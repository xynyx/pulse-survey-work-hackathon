import { Client } from "https://deno.land/x/postgres@0.11.3/mod.ts";

const client = new Client({
    user: "postgres",
    database: "pulse_survey",
    hostname: "127.0.0.1",
    password: "postgres",
    port: 5432
});

export default client;