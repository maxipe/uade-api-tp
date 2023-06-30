import { Router } from "express";
import { check } from "express-validator";
import checkFields from "../middlewares/validateFields";
import contactRequestsController from "../controllers/contactRequests.controller";
import validateJwt from "../middlewares/jwtValidator";

const contactRequestsRouter = Router();

/**
 * @openapi
 * /contact-requests/:
 *  post:
 *    tags:
 *    - Contact Requests
 *    description: Create a new contact request
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/contactRequestCreationDto'
 *    responses:
 *      201:
 *        description: Contact request created
 *    security: [
 *    ]
 */
contactRequestsRouter.post(
  "/",
  [
    check("name").not().isEmpty(),
    check("email").not().isEmpty(),
    check("phone").not().isEmpty(),
    check("message").not().isEmpty(),
    checkFields,
  ],
  contactRequestsController.save
);

/**
 * @openapi
 * /contact-requests/:
 *  get:
 *    tags:
 *    - Contact Requests
 *    description: Get a list of contact requests
 *    responses:
 *      200:
 *        description: Contact requests list returned
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/contactRequestDto'
 */
contactRequestsRouter.get("/", validateJwt, contactRequestsController.get);


  /**
   * @openapi
   * components:
   *  schemas:
   *    contactRequestCreationDto:
   *      required:
   *        - name
   *        - email
   *        - phone
   *        - message
   *      type: object
   *      properties:
   *        name:
   *          type: string
   *          example: John Doe
   *        email:
   *          type: string
   *          example: 'example@example.com'
   *        phone:
   *          type: string
   *          example: '+5491155445544'
   *        message:
   *          type: string
   *          example: I want to hire you
   *    contactRequestDto:
   *      required:
   *        - date
   *        - name
   *        - email
   *        - phone
   *        - message
   *      type: object
   *      properties:
   *        date:
   *          type: string
   *          format: date-time
   *        name:
   *          type: string
   *          example: John Doe
   *        email:
   *          type: string
   *          example: 'example@example.com'
   *        phone:
   *          type: string
   *          example: '+5491155445544'
   *        message:
   *          type: string
   *          example: I want to hire you
   */

export default contactRequestsRouter;
