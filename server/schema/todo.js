const S = require("fluent-json-schema");
const todosSchema = {
  response: {
    200: S.array().items(
      S.object()
        .prop("id", S.integer())
        .prop("title", S.string())
        .prop("description", S.anyOf([S.string(), S.null()]))
    )
  }
};

const singleTodoSchema = {
    response: {
      200: 
        S.object()
          .prop("id", S.integer())
          .prop("title", S.string())
          .prop("description", S.anyOf([S.string(), S.null()]))
      }
  };

const saveTodoSchema = {
  body: S.object()
    .additionalProperties(false)
    .prop("title", S.string().required())
    .prop("description", S.string()),
  response: {
    201: S.object()
      .prop("title", S.string())
      .prop("description", S.string())
      .prop("createdAt", S.string().format("time"))
      .prop("updatedAt", S.string().format("time"))
  }
};

const deleteTodo = {
    response:{
        204:S.null()
    }
}

module.exports = {
  todosSchema,
  singleTodoSchema,
  deleteTodo,
  saveTodoSchema
};
