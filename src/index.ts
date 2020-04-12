import { serveTLS } from "https://deno.land/std/http/server.ts";

const tlsOptions = {
  hostname: "localhost",
  port: 443,
  certFile: "./src/crt.pem", // TODO: ENV VAR
  keyFile: "./src/key.pem" // TODO: ENV VAR
};

async function httpsServer() {
  console.log(`Simple HTTPS server listening on ${tlsOptions.hostname}:${tlsOptions.port}`);

  const body = new TextEncoder().encode("Hello HTTPS");
  for await (const req of serveTLS(tlsOptions)) {
      req.respond({ body });
    }
}

httpsServer();
