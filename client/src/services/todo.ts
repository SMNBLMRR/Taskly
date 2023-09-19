import { AxiosResponse } from "axios";
import request from "../util/request";
import { Todo } from "../store/todo";

export interface TodoPayloadInterface extends Omit<Todo, "id"> {}

export async function getTodoList(): Promise<AxiosResponse> {
  return request.get("/api/v1/todo");
}

export async function saveTodoService(data: TodoPayloadInterface): Promise<AxiosResponse> {
  return request.post("/api/v1/todo", data);
}

export async function updateTodoService(id: number, data: TodoPayloadInterface): Promise<AxiosResponse> {
  return request.patch("/api/v1/todo", { id, ...data });
}

export async function deleteTodoSevice(id: number): Promise<AxiosResponse> {
  return request.delete("/api/v1/todo", {
    params: {
      id
    }
  });
}
