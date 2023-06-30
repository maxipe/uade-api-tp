import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";
import { Request, Response } from "express";
import usersRouter from "./routes/users.routes";
import contactRequestsRouter from "./routes/contactRequests.routes";

function routes(app: Express) {
  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/swagger.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  app.use("/users", usersRouter);
  app.use("/contact-requests", contactRequestsRouter);

}

export default routes;
