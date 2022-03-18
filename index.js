import { Application } from "https://deno.land/x/oak@v8.0.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { APP_HOST, APP_PORT } from "./config.js";
import router from "./routes.js";
import client from "./db/database.js";
import _404 from "./controllers/404.js";
import errorHandler from "./controllers/errorHandler.js";

const app = new Application();

app.use(
  oakCors({
    origin: "*"
  }),
);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(errorHandler);
app.use(_404);

await client.connect();

console.log(`Listening on port:${APP_PORT}...`);

await app.listen({ port: APP_PORT });

await client.end();