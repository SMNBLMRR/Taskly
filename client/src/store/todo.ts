import { create } from "zustand";
import { TodoPayloadInterface, getTodoList } from "../services/todo";
import { AxiosResponse } from "axios";

enum Priority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH"
}

export interface Todo {
  id: number;
  title?: string;
  description?: string;
  priority?: Priority;
  createdAt?: string;
  updatedAt?: string;
  checked?: boolean;
}

export interface TodoStoreInterface {
  todos: Todo[] | [];
  getTodo: () => void;
  addTodo: (todo: Todo) => void;
  updateTodo: (id: number, updatedFields: TodoPayloadInterface) => void;
  deleteTodo: (id: number) => void;
}

const todoStore = create<TodoStoreInterface>(set => ({
  todos: [],
  getTodo: () => {
    getTodoList()
      .then((resp: AxiosResponse) => {
        if (Array.isArray(resp?.data)) {
          set({ todos: [...resp.data] });
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  addTodo: (todo: Todo) => {
    set(state => ({ todos: [...state.todos, todo] }));
  },
  updateTodo: (id: number, updatedFields: TodoPayloadInterface) => {
    set(state => ({
      todos: state.todos.map((todo: Todo) => {
        return todo?.id === id ? { ...todo, ...updatedFields } : todo;
      })
    }));
  },
  deleteTodo: (id: number) => {
    set(state => ({
      todos: state.todos.filter((todo: Todo) => todo?.id !== id)
    }));
  }
}));

export default todoStore;
