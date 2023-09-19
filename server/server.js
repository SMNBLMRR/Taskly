const fastify = require("fastify")({
  logger: {
    transport: {
      target: "pino-pretty"
    }
  }
});

const app = require("./app");

async function start() {
  await fastify.register(app);

  fastify
    .listen({
      host: "0.0.0.0",
      port: process.env.PORT
    })
    .then(() => {
      console.log("server is running...");
    })
    .catch(err => {
      console.log("Error...");
      process.exit(1);
    });
}

start();
