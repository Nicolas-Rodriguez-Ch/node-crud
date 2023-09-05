import express, { Express } from "express";
import configExpress from "./config/express";
import routes from "./routes";

const app: Express = express();

configExpress(app);
routes(app);

app.listen(8080, () => {
  console.log(`Server is running on port ${8080}`);
});
