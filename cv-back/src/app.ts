import "dotenv/config.js";
import express from "express";
import routes from "./routes";
import dbConnection from "./db/config";

const app = express();
dbConnection();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
