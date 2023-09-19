import React, { ChangeEvent, useRef, useState } from "react";
import todoStore, { Todo } from "../../../store/todo";
import { deleteTodoSevice, updateTodoService } from "../../../services/todo";
import "./index.css";
import { AxiosResponse } from "axios";
import { AiFillDelete, AiOutlineCheckCircle } from "react-icons/ai";
import { priority } from "../../../util/tag";

interface TodoItemsProps {
  todo: Todo;
}

const TodoItems: React.FC<TodoItemsProps> = ({ todo }) => {
  const { updateTodo, deleteTodo } = todoStore();

  function updateTodoRadio(todo: Todo) {
    updateTodo(todo?.id, { checked: !todo?.checked });
    updateTodoService(todo?.id, { checked: !todo?.checked })
      .then((resp: AxiosResponse) => {
        //toas notification
      })
      .catch(err => {
        //toast notification
        updateTodo(todo?.id, { checked: todo?.checked });
      });
  }

  function handleDelete(id: number) {
    deleteTodo(id);
    deleteTodoSevice(id)
      .then((resp: AxiosResponse) => {
        //toast notification
      })
      .catch(err => {
        console.log("err");
      });
  }

  const [todoState, setTodoState] = useState({
    title: todo?.title,
    description: todo?.description ?? ""
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setTodoState(state => ({
      ...state,
      [name]: value
    }));
  }

  const initialFormState = useRef(todoState);

  function inputHasChanged() {
    return todoState.title !== initialFormState.current.title || todoState.description !== initialFormState.current.description;
  }

  const [isToogle, setIsToggle] = useState(false);
  
  function handleSubmit(id: number) {
    updateTodo(id, { ...todoState });
    updateTodoService(id, { ...todoState })
      .then((resp: AxiosResponse) => {
        //toast notification
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleChangePriority(id: number, priority: any) {
    console.log(priority);
    updateTodo(todo?.id, { priority });
    updateTodoService(id, { priority })
      .then((resp: AxiosResponse) => {
        //toast notification
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div key={todo?.id} className="p-2 border-[1px] border-transparent hover:border-gray-500 rounded-md mb-2 flex justify-center">
      {/* checkbox */}
      <div className="flex justify-center items-center relative mx-2">
        <span onClick={() => updateTodoRadio(todo)} className="w-4 relative h-4 hover:opacity-[0.5] rounded m-auto border flex justify-center items-center">
          <span className={`w-4/6 h-4/6 block rounded-[2px] ${todo?.checked ? "bg-[#fa617b]" : ""}`}></span>
        </span>
      </div>

      {/* title */}
      <div className="flex justify-center items-center relative">
        <input
          onChange={handleChange}
          readOnly={todo?.checked}
          value={todoState.title}
          name="title"
          className={`ml-2 bg-[#313135] rounded focus:outline-none px-2 focus:bg-[#101010] hover:bg-[#101010] text-gray-200 ${todo?.checked ? "line-through text-gray-700" : null}`}
          placeholder="Title"
        />
      </div>

      {/* description */}
      <div className="flex justify-center items-center relative mx-2">
        <input
          onChange={handleChange}
          readOnly={todo?.checked}
          value={todoState.description ?? ""}
          name="description"
          className={`bg-[#313135] rounded focus:outline-none px-2 focus:bg-[#101010] hover:bg-[#101010] text-gray-200 ${todo?.checked ? "line-through text-gray-700" : null}`}
          placeholder="Description"
        />
      </div>

      {/* date */}
      <div className="flex justify-center items-center relative mx-6 text-[#9b9cf1] text-xs">
        <span className="w-max">{todo?.updatedAt?.toLocaleLowerCase()}</span>
      </div>

      {/* priority */}

      <div className="flex justify-center items-center relative mx-4 text-[#9b9cf1]">
        <div className="relative flex">
          <div style={{ backgroundColor: priority[todo?.priority ?? "LOW"].color }} className={`px-2 text-white rounded-[5px] w-20 text-center`} onClick={() => setIsToggle(!isToogle)}>
            {todo?.priority ?? "Priority"}
            {isToogle ? (
              <div className="absolute rounded p-2 left-0 bg-[#313135] mt-2 z-[999]">
                <span className="w-3 h-3 block bg-[#313135] rotate-45 -mb-[10px] -top-1 absolute"></span>
                {Object.entries(priority).map((elem, i) => {
                  return (
                    <div key={i} onClick={() => handleChangePriority(todo?.id, elem[0])} className="text-center bg-[#171719] my-1 rounded px-1 hover:cursor-pointer hover:opacity-[0.5]">
                      <div>
                        <h1>{elem[0]}</h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Actions */}
      
      <div className="flex justify-center items-center relative ml-6">
        <span className="mx-2">
          <AiFillDelete size={17} className="hover:opacity-[0.5]" onClick={() => handleDelete(todo?.id)} color="#fa617b" />
        </span>
        <span className="mx-2">
          {inputHasChanged() ? <AiOutlineCheckCircle size={17} color="green" className="hover:opacity-[0.5]" onClick={() => handleSubmit(todo?.id)} /> : <AiOutlineCheckCircle size={17} className="hover:cursor-not-allowed" color="red" />}
        </span>
      </div>
    </div>
  );
};

export default TodoItems;
