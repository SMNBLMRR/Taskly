const fp = require("fastify-plugin");
const { PrismaClient } = require("@prisma/client");
async function db(fastify, options) {
  const prisma = new PrismaClient({
    log: [
      {
        emit: "event",
        level: "query"
      },
      {
        emit: "stdout",
        level: "error"
      },
      {
        emit: "stdout",
        level: "info"
      },
      {
        emit: "stdout",
        level: "warn"
      }
    ]
  });

  try {
    await prisma.$connect();
  } catch (error) {
    console.log("Error");
  }

  fastify.decorate("prisma", prisma);

  prisma.$on("query", e => {
    console.log("Query: " + e.query);
    console.log("Params: " + e.params);
    console.log("Duration: " + e.duration + "ms");
  });
}

module.exports = fp(db);
