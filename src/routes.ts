import { Application } from "express";
import healthcheck from "./api/healthcheck";
import notes from "./api/notes";

const routes = (app: Application): void => {
  app.use("/api/healthcheck", healthcheck);
  app.use("/api/notes", notes);
};
export default routes;
