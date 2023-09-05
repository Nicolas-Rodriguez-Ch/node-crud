import express, { Express } from "express";
import configExpress from "./config/express";
import routes from "./routes";
import handleError from "./middleware/handleError";

const app: Express = express();

configExpress(app);
routes(app);
app.use(handleError);

app.listen(8080, () => {
  console.log(`Server is running on port ${8080}`);
});
