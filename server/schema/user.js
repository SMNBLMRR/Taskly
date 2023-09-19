const S = require("fluent-json-schema");
const userInfoSchema = {
  response: {
    200: S.object()
      .prop("email", S.string())
      .prop("id", S.string())
  }
};

module.exports = {
  userInfoSchema
};
