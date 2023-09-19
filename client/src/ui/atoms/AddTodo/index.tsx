import React, { FormEvent, useState } from "react";
import todoStore from "../../../store/todo";
import { saveTodoService } from "../../../services/todo";
import { AxiosResponse } from "axios";
import { IoAdd } from "react-icons/io5";
interface AddTodoProps {}

const AddTodo: React.FC<AddTodoProps> = () => {
  const [todoGoal, setTodoGoal] = useState("");
  const { addTodo } = todoStore();

  function handleSubmit(e: FormEvent) { 
    e.preventDefault();
    const payload = {
      title: todoGoal
    };
    saveTodoService({ ...payload })
      .then((resp: AxiosResponse) => {
        addTodo(resp?.data);
      })
      .catch(err => {
        console.log(err);
      });

    setTodoGoal("");
  }

  return (
    <div className="w-4/5 m-auto border-t-[1px] border-[#313135] flex justify-center items-center">
      <form onSubmit={handleSubmit} className="mt-4 w-4/6">
        <label htmlFor="addTodo" className="text-lg text-[#606069]">
          What needs to be done?
        </label>
        <div className="mt-2 w-full bg-[#313135] border border-gray-500 rounded-lg flex">
          <input value={todoGoal} id="addTodo" onChange={e => setTodoGoal(e.target.value)} className="w-full flex p-2 bg-transparent outline-none focus:outline-none text-white" />
          <button type="submit" className="px-2 border-l-[1px] border-gray-500">
            <IoAdd color="white" size={30} fontWeight={100} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
