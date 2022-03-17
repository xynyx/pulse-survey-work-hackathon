import { Application } from "https://deno.land/x/oak@v8.0.0/mod.ts";
import { APP_HOST, APP_PORT } from "./config.js";
import router from "./routes.js";
import client from "./db/database.js";
// import _404 from "./controllers/404.js";
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
await client.connect();
// app.use(_404);

console.log(`Listening on port:${APP_PORT}...`);

await app.listen({ port: APP_PORT });

await client.end();