import { readdirSync } from "node:fs";
import { join } from "node:path";

import express, { Application } from "express";

const app: Application = express();

app.use(express.json());

const routes = readdirSync(join(__dirname, "routes"));

/**
 * user-routes: /user
 * house-routes: /house
 */
for (let route of routes) {
  app.use(
    `/${route.split("-")[0]}`,
    require(join(__dirname, "routes", route)).default
  );
}

export { app };
