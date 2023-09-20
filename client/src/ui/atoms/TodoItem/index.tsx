import React, { ChangeEvent, useState } from "react";
import { Todo } from "../../../store/todo";
import "./index.css";
import PrioritySelect from "../PrioritySelect";
import TodoAction from "../TodoAction";
import ToggleTodoButton from "../ToggleTodoButton";

interface TodoItemsProps {
  todo: Todo;
}

const TodoItems: React.FC<TodoItemsProps> = ({ todo }) => {
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

  return (
    <div key={todo?.id} className="p-2 border-[1px] border-transparent hover:border-gray-500 rounded-md mb-2 flex justify-center">
      <ToggleTodoButton todo={todo} />
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
      <PrioritySelect todo={todo} />

      {/* Actions */}
      <TodoAction todoId={todo?.id} todoState={todoState} />
    </div>
  );
};

export default TodoItems;
