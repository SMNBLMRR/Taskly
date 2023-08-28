const { todosSchema, saveTodoSchema, singleTodoSchema } = require("../schema/todo");

async function todo(fastify, options) {
  const { prisma, httpErrors, isAuth } = fastify;

  fastify.route({
    method: "GET",
    path: "/api/v1/todos",
    schema: todosSchema,
    onRequest: isAuth,
    handler: getTodos
  });

  async function getTodos(req, res) {
    const { uid } = req.user;
    try {
      const todos = await prisma.todo.findMany({
        where: {
          userId: uid
        }
      });
      if (!todos) return [{ msg: "Empty todo" }];
      res.code(200);
      return todos;
    } catch (error) {
      return httpErrors.notFound();
    }
  }

  fastify.route({
    method: "GET",
    path: "/api/v1/todos/:todoId",
    schema: singleTodoSchema,
    onRequest: isAuth,
    handler: getTodosById
  });

  async function getTodosById(req, res) {
    const { uid } = req.user;
    const { todoId } = req.params;
    try {
      const todo = await prisma.todo.findFirst({
        where: {
          id: parseInt(todoId),
          userId: uid
        }
      });
      if (!todo) return { msg: "Empty todo" };
      res.code(200);
      return todo;
    } catch (error) {
      return httpErrors.notFound();
    }
  }

  fastify.route({
    method: "POST",
    path: "/api/v1/todo",
    schema: saveTodoSchema,
    onRequest: isAuth,
    handler: saveTodo
  });

  async function saveTodo(req, res) {
    const { uid } = req.user;
    const { title, description } = req.body;
    try {
      const newTodo = await prisma.todo.create({
        data: {
          title,
          description,
          userId: uid
        }
      });
      if (!newTodo) return httpErrors.badRequest();
      res.code(201);
      return newTodo;
    } catch (error) {
      return httpErrors.badRequest();
    }
  }

  fastify.route({
    method: "DELETE",
    path: "/api/v1/todos/:todoId",
    schema: deleteTodo,
    onRequest: isAuth,
    handler: deleteTodo
  });

  async function deleteTodo(req, res) {
    const { uid } = req.user;
    const { todoId } = req.params;
    try {
      const todo = await prisma.todo.delete({
        where: {
          id: parseInt(todoId),
          userId: uid
        }
      });
      if (!todo) return httpErrors.notFound();
      res.code(204);
      return;
    } catch (error) {
      return httpErrors.notFound();
    }
  }
}

module.exports = todo;
