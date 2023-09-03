import { create } from "zustand";

export interface Todo {
    id:number,
    title:string,
    description:string
}

export interface TodoStoreInterface {
    todos:Todo[] | null,
    setTodo:(todo:Todo[]) => void

}

const todoStore = create<TodoStoreInterface>((set) => ({
    todos:[],
    setTodo: (todo:Todo[]) => set({todos:todo}),
}))

export default todoStore