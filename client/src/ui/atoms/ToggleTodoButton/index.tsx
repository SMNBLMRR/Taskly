import React from 'react';
import { Todo } from '../../../store/todo';
import { useTodoAPI } from '../../../hooks/useTodoApi';

interface ToggleTodoButtonProps {
    todo:Todo
}

const ToggleTodoButton: React.FC<ToggleTodoButtonProps> = ({todo}) => {

    const { toggleTodoFunc } = useTodoAPI(todo?.id);

    return (
      <div className="flex justify-center items-center relative mx-2">
        <span onClick={() => toggleTodoFunc(!todo?.checked)} className="w-4 relative h-4 hover:opacity-[0.5] rounded m-auto border flex justify-center items-center">
            <span className={`w-4/6 h-4/6 block rounded-[2px] ${todo?.checked ? "bg-[#fa617b]" : ""}`}></span>
        </span>
      </div>
    );
}

export default ToggleTodoButton