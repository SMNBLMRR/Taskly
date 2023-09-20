import React, { useEffect } from "react";
import AddTodo from "../../ui/atoms/AddTodo";
import todoStore, { Todo } from "../../store/todo";
import TodoItems from "../../ui/atoms/TodoItem";
import "./index.css";
import userStore from "../../store/user";
import { doLogout } from "../../services/auth";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

interface TodoProps {}

const Todos: React.FC<TodoProps> = () => {
  const { todos, getTodo } = todoStore();
  const { user } = userStore();
  const navigate = useNavigate();

  function handleLogOut() {
    doLogout()
      .then((resp: AxiosResponse) => {
        //toast notification
        navigate("/");
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  return (
    <>
      <aside className="flex justify-between p-4 left-0 flex-row top-0 w-full overflow-hidden">
        <div className="flex h-fit w-fit  px-1 py-1 bg-[#313135] rounded-full">
          <span className="rounded-full w-4 h-4 flex justify-center items-center p-3 text-lg bg-white text-[#fa617b]">{user?.email[0]?.toUpperCase()}</span>
          <span className="ml-1 mr-1 text-white">{user?.email}</span>
        </div>
        <div onClick={handleLogOut} className="flex h-fit w-fit px-3 py-1 bg-[#313135] text-white rounded-full hover:cursor-pointer hover:opacity-[0.5]">
          log out
        </div>
      </aside>
      <aside className="hide-scrollbar overflow-x-hidden h-[65vh] w-fit flex m-auto p-5 flex-col overflow-scroll">
        {todos && todos?.length > 0 ? (
          todos
            ?.sort((a: Todo, b: Todo) => a.id - b.id)
            .map((todo: Todo) => {
              return (
                <div key={todo?.id}>
                  <TodoItems todo={todo} />
                </div>
              );
            })
        ) : (
          <div>
            <h1 className="text-[#414141] text-4xl font-bold px-6 py-2">There are currently no activities</h1>
          </div>
        )}
      </aside>
      <AddTodo />
    </>
  );
};

export default Todos;
