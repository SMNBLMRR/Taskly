import React, { useState } from 'react';
import { Todo } from '../../../store/todo';
import { priority } from '../../../util/tag';
import { useTodoAPI } from '../../../hooks/useTodoApi';

interface PrioritySelectProps {
    todo:Todo
}

const PrioritySelect: React.FC<PrioritySelectProps> = ({ todo }) => {

    const { updatePriorityFunc } = useTodoAPI(todo?.id);

    const [isToogle, setIsToggle] = useState(false);

    return (
        <div className="flex justify-center items-center relative mx-4 text-[#9b9cf1]">
        <div className="relative flex">
            <div style={{ backgroundColor: priority[todo?.priority ?? "LOW"].color }} className={`px-2 text-white rounded-[5px] w-20 text-center`} onClick={() => setIsToggle(!isToogle)}>
            {todo?.priority ?? "Priority"}
            {isToogle ? (
                <div className="absolute rounded p-2 left-0 bg-[#313135] mt-2 z-[999]">
                <span className="w-3 h-3 block bg-[#313135] rotate-45 -mb-[10px] -top-1 absolute"></span>
                {Object.entries(priority).map((elem, i) => {
                    return (
                    <div key={i} onClick={() => updatePriorityFunc(elem[0])} className="text-center bg-[#171719] my-1 rounded px-1 hover:cursor-pointer hover:opacity-[0.5]">
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
    );
}

export default PrioritySelect