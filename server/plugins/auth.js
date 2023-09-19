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
  fastify.decorate("isDemiAuth", isDemiAuth);

  async function isAuthorized(req, res, cb) {
    const { session_user } = req.cookies;
    if (session_user) {
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
          throw fastify.httpErrors.unauthorized("Access denied");
        }
      } else {
        cb();
      }
    } else {
      cb();
    }
  }

  async function isAuth(req, res) {
    return isAuthorized(req, res, () => {
      throw fastify.httpErrors.unauthorized("Access denied");
    });
  }

  async function isDemiAuth(req, res) {
    return isAuthorized(req, res, () => {
      return (req.user = null);
    });
  }
}

module.exports = fp(auth);
