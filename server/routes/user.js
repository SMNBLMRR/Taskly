const { userInfoSchema } = require("../schema/user");

async function user(fastify, options) {
  const { prisma, httpErrors, isDemiAuth } = fastify;
  fastify.route({
    method: "GET",
    path: "/api/v1/userInfo",
    schema: userInfoSchema,
    onRequest: isDemiAuth,
    handler: getUserInfo
  });

  async function getUserInfo(req, res) {
    const { uid } = req.user || {};
    try {
      if (!uid) return null;
      const user = await prisma.user.findFirst({
        where: {
          id: uid
        }
      });
      if (!user) return null;
      return user;
    } catch (error) {
      console.log(error);
      return httpErrors.unauthorized();
    }
  }
}

module.exports = user;
