import "dotenv/config.js";
import express from "express";
import routes from "./routes";
import dbConnection from "./db/config";
import cors from "cors";

const runApp = async () => {
  const app = express();
  await dbConnection();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());

  routes(app);

  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT ?? ""}`);
  });
};

void runApp();
