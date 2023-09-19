const S = require("fluent-json-schema");
const todosSchema = {
  response: {
    200: S.array().items(
      S.object()
        .prop("id", S.integer())
        .prop("title", S.string())
        .prop("description", S.anyOf([S.string(), S.null()]))
        .prop("priority", S.anyOf([S.string(), S.null()]))
        .prop("createdAt", S.string().format("date"))
        .prop("updatedAt", S.string().format("date"))
        .prop("checked", S.boolean())
    )
  }
};

const singleTodoSchema = {
  response: {
    200: S.object()
      .prop("id", S.integer())
      .prop("title", S.string())
      .prop("description", S.anyOf([S.string(), S.null()]))
      .prop("priority", S.anyOf([S.string(), S.null()]))
      .prop("checked", S.boolean())
  }
};

const saveTodoSchema = {
  body: S.object()
    .additionalProperties(false)
    .prop("title", S.string().required())
    .prop("description", S.string()),
  response: {
    201: S.object()
      .prop("id", S.integer())
      .prop("title", S.string())
      .prop("description", S.anyOf([S.string(), S.null()]))
      .prop("priority", S.anyOf([S.string(), S.null()]))
      .prop("createdAt", S.string().format("date"))
      .prop("updatedAt", S.string().format("date"))
      .prop("checked", S.boolean())
  }
};

const deleteTodo = {
  response: {
    204: S.null()
  }
};

module.exports = {
  todosSchema,
  singleTodoSchema,
  deleteTodo,
  saveTodoSchema
};
