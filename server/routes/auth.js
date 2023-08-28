const { registerSchema, loginSchema } = require("../schema/auth");
const bcrypt = require("bcrypt");

async function register(fastify, options) {
  const { prisma, httpErrors, jwt } = fastify;

  fastify.route({
    method: "POST",
    path: "/api/v1/register",
    schema: registerSchema,
    handler: registerHandler
  });

  async function registerHandler(req, res) {
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findFirst({
        where: {
          email
        }
      });
      if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        await prisma.user.create({
          data: {
            email,
            password: hashedPassword
          }
        });
        return {
          msg: "User registered"
        };
      }
      return httpErrors.badRequest();
    } catch (error) {
      return fastify.httpErrors.internalServerError();
    }
  }

  fastify.route({
    method: "POST",
    path: "/api/v1/login",
    schema: loginSchema,
    handler: loginHandler
  });

  async function loginHandler(req, res) {
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findFirst({
        where: {
          email
        }
      });
      if (!user) return httpErrors.badRequest();
      const isMatchedPassword = await bcrypt.compare(password, user.password);
      if (isMatchedPassword) {
        const token = jwt.sign({
          uid: user?.id,
          email
        },{
          sign: {
            expires: new Date(Date.now() + 604800 * 1000),
            algorithm: "HS256",
          },
        });

        res.setCookie("session_user", token, {
          secure: process.env.NODE_ENV === "production",
          httpOnly: true,
          signed: true,
          sameSite: true,
          //path:"/"
          maxAge: 604800,
          expires: new Date(Date.now() + 604800 * 1000),
        });
        return {
          msg: "Logged in"
        };
      } else {
        return httpErrors.badRequest();
      }
    } catch (error) {
      return fastify.httpErrors.internalServerError();
    }
  }
}
module.exports = register;
