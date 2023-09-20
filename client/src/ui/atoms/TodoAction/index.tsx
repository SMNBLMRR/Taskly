import React, { useRef } from 'react';
import { AiFillDelete, AiOutlineCheckCircle } from 'react-icons/ai';
import { useTodoAPI } from '../../../hooks/useTodoApi';

interface TodoActionProps {
    todoState:any
    todoId:number
}

const TodoAction: React.FC<TodoActionProps> = ({ todoState, todoId }) => {

    const { deleteTodoFunc, updateTodoFunc } = useTodoAPI(todoId);

    const initialFormState = useRef(todoState);

    function inputHasChanged() {
        return todoState.title !== initialFormState.current.title || todoState.description !== initialFormState.current.description;
      }

    return (
        <div className="flex justify-center items-center relative ml-6">
        <span className="mx-2">
          <AiFillDelete size={17} className="hover:opacity-[0.5]" onClick={() => deleteTodoFunc()} color="#fa617b" />
        </span>
        <span className="mx-2">
          {inputHasChanged() ? (
            <AiOutlineCheckCircle size={17} color="green" className="hover:opacity-[0.5]" onClick={() => updateTodoFunc(todoState,() => (initialFormState.current = todoState))} />
          ) : (
            <AiOutlineCheckCircle size={17} className="hover:cursor-not-allowed" color="red" />
          )}
        </span>
      </div>
    );
}

export default TodoAction