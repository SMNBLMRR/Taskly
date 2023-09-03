import React from 'react';

interface ModalProps {

}

const Modal: React.FC<ModalProps> = () => {
    return (
        <div className='w-full h-screen overflow-hidden flex fixed justify-center items-center left-0 top-0'>
            <div className='glass_effect w-full h-full fixed left-0 top-0'></div>
            <div className='p-10 z-50 w-96 h-96 bg-modal rounded pt-5'>
                <h1 className='text-white text-center'>Aggiungi todo</h1>
                <form className='flex flex-col'>
                    <label className='text-white mt-2' htmlFor="title">Title</label>
                    <input id="title" name='title' className='rounded p-1 my-1'  />
                    <label className='text-white mt-2' htmlFor="description">Description</label>
                    <input id="description" name='description' className='rounded p-1 my-1'  />
                    <div className='flex justify-between items-center'>
                    <button type='button'>Clear</button>
                    <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal