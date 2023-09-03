const S = require("fluent-json-schema");

const registerSchema = {
    body: S.object()
    .additionalProperties(false)
    .prop("email",S.string().format(S.FORMATS.EMAIL).required())
    .prop("password",S.string().minLength(8).required()),
    response:{
        201:S.object().prop("msg",S.string())
    }
}

const loginSchema = {
    body: S.object()
    .additionalProperties(false)
    .prop("email",S.string().format(S.FORMATS.EMAIL).required())
    .prop("password",S.string().minLength(8).required()),
    response:{
        200:S.object().prop("msg",S.string())
    }
}

module.exports = {
    registerSchema,
    loginSchema
}