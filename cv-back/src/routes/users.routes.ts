import { Router } from "express";
import { check } from "express-validator";
import checkFields from "../middlewares/validateFields";
import usersController from "../controllers/users.controller";

const usersRouter = Router();

/**
 * @openapi
 * /users/login:
 *  post:
 *    tags: [Users]
 *    description: Login method
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/loginDto'
 *    responses:
 *      200:
 *        description: Successful login
 *      401:
 *        description: Unauthorized. Invalid user or password
 *    security: [
 *    ]
 */
usersRouter.post(
  "/login",
  [
    check("username").not().isEmpty(),
    check("password").not().isEmpty(),
    checkFields,
  ],
  usersController.login
);

/**
 * @openapi
 * /users/register:
 *  post:
 *    tags:
 *    - Users
 *    description: Register method. Only allowed to be executed once to create single admin user.
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/registerDto'
 *    responses:
 *      200:
 *        description: Successful registration
 *      403:
 *        description: Forbidden. User already created
 *    security: [
 *    ]
 */
usersRouter.post(
  "/register",
  [
    check("username").not().isEmpty(),
    check("password").not().isEmpty(),
    checkFields,
  ],
  usersController.register
);

/**
 * @openapi
 * components:
 *  schemas:
 *    loginDto:
 *      required:
 *        - username
 *        - password
 *      type: object
 *      properties:
 *        username:
 *          type: string
 *          example: admin
 *        password:
 *          type: string
 *          example: test123!
 *    registerDto:
 *      required:
 *        - username
 *        - password
 *      type: object
 *      properties:
 *        username:
 *          type: string
 *          example: admin
 *        password:
 *          type: string
 *          example: test123!
 */

export default usersRouter;
