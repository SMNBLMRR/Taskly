const jwt = require("@fastify/jwt");
const cookie = require("@fastify/cookie");
const fp = require("fastify-plugin");
async function auth(fastify, options) {

  const { config } = fastify;

  await fastify.register(jwt, {
    secret: config.JWT_SECRET,
    cookie: {
      cookieName: "session_user",
      signed: true
    }
  });

  await fastify.register(cookie, {
    secret: config.COOKIE_SECRET
  });

  fastify.decorate("isAuth", isAuth);

  async function isAuth(req, res) {
    const { session_user } = req.cookies;
    if (!session_user) throw fastify.httpErrors.unauthorized();
    const cookie = req.unsignCookie(session_user);
    if (cookie.valid) {
      try {
        req.jwtVerify(cookie.value);
        const { email, uid } = fastify.jwt.decode(cookie.value);
        req.user = {
          email,
          uid
        };
      } catch (err) {
        throw fastify.httpErrors.unauthorized();
      }
    } else {
      throw fastify.httpErrors.unauthorized();
    }
  }
}

module.exports = fp(auth);
