import React from 'react';
import TodoNavBar from '../../atoms/TodoNavBar';

interface PrivateHeaderProps {
    
}

const PrivateHeader: React.FC<PrivateHeaderProps> = () => {

    return (
        <>
        <aside className='flex p-4 left-0 top-0 w-64 h-screen overflow-hidden border-r-2 flex-col'>
            <div className='flex h-fit px-4 py-2 rounded shadow-shadow-ligth'>
                <span className='rounded-full w-4 h-4 flex justify-center items-center border-2 p-3 text-lg border-gray-200 text-gray-700'>S</span>
                <span className='ml-3 text-gray-700'>Simone Marrandino</span>
            </div>
            <span className='block h-smallest my-4 w-full bg-gray-300'></span>
            <div className=''>
                <span className='font-semibold'>Projects</span>
                <div className='px-1 my-2'>
                    <TodoNavBar />
                </div>
            </div>
        </aside>
        </>
    );
}

export default PrivateHeader