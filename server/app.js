const Autoload = require("@fastify/autoload");
const { join } = require("path");
const fastifyCors = require("@fastify/cors");
const fastifyEnv = require("@fastify/env");
const S = require("fluent-json-schema");
const Sensible = require("@fastify/sensible");
async function app(fastify, options) {
  const schema = S.object()
    .prop("DATABASE_URL", S.string().required())
    .prop("CLIENT_BASE_URL", S.string().required())
    .prop("JWT_SECRET", S.string().required())
    .prop("COOKIE_SECRET", S.string().required())
    .valueOf();

  const opt = {
    schema: schema,
    dotenv: true
  };

  await fastify.register(fastifyEnv, opt);

  await fastify.register(fastifyCors, {
    origin: [fastify.config.CLIENT_BASE_URL],
    credentials:true,
  });

  await fastify.register(Sensible);

  await fastify.register(Autoload, {
    dir: join(__dirname, "plugins"),
    opt: Object.assign({}, options)
  });

  await fastify.register(Autoload, {
    dir: join(__dirname, "routes"),
    opt: Object.assign({}, options)
  });
}

module.exports = app;
