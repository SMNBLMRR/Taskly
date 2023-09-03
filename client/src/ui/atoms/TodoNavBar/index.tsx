import React from 'react';
import todoStore, { Todo } from '../../../store/todo';
import { RiTodoFill } from "react-icons/ri"
import { BsThreeDots } from "react-icons/bs"
interface TodoNavBarProps {
    
}

const TodoNavBar: React.FC<TodoNavBarProps> = () => {

    const { todos } = todoStore();

    return (
        <>
            {todos && todos?.length > 0 ? (
                todos?.map((elem:Todo) => {
                    return (
                        <div key={elem?.id}>
                            <span>{elem?.title}</span>
                        </div>
                    )
                })
            ) : (
                <div className='flex flex-col'>
                    <div className='flex items-center'>
                        <RiTodoFill color='red' size={20}/>
                        <span className='ml-2' >Aggiungi todo</span>
                    </div>
                </div>
            )}
        </>
    );
}

export default TodoNavBar