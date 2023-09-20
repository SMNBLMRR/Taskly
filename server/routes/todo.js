const { todosSchema, saveTodoSchema, updateTodoSchema } = require("../schema/todo");
async function todo(fastify, options) {
  const { prisma, httpErrors, isAuth } = fastify;

  fastify.route({
    method: "GET",
    path: "/api/v1/todo",
    onRequest: isAuth,
    schema: todosSchema,
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
    method: "PATCH",
    path: "/api/v1/todo",
    onRequest: isAuth,
    schema:updateTodoSchema,
    handler: todoUpdateHandler
  });

  async function todoUpdateHandler(req, res) {
    const { uid } = req.user;
    const { id, ...payload } = req.body;

    try {
      const updatedTodo = await prisma.todo.update({
        where: {
          userId: uid,
          id
        },
        data: payload
      });
      if (updatedTodo){
        res.code(200);
        return updatedTodo;
      } 
      return httpErrors.badRequest();
    } catch (error) {
      console.log(error);
      return httpErrors.badRequest();
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
    path: "/api/v1/todo",
    schema: deleteTodo,
    onRequest: isAuth,
    handler: deleteTodo
  });

  async function deleteTodo(req, res) {
    const { uid } = req.user;
    const { id } = req.query;
    try {
      const todo = await prisma.todo.delete({
        where: {
          id: parseInt(id),
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
