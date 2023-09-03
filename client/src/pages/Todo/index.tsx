import React, { useEffect, useState } from 'react';
import PrivateHeader from '../../ui/molecules/PrivateHeader';
import Modal from '../../ui/molecules/Modal';
import modalStore from '../../store/modal';

interface TodoProps {
    
}

const Todo: React.FC<TodoProps> = () => {

  const {isOpen, setIsOpen } = modalStore();

  /*
  useEffect(() => {
    function handleKeyDown(e:KeyboardEvent){
      if(e.ctrlKey && e.code === 'Space'){
        setIsOpen(true);
      }
    }
    window.addEventListener("keyup",handleKeyDown)
    return () => {
      window.removeEventListener('keyup', handleKeyDown);
    };
  },[setIsOpen])
  */

    return (
        <>
          <PrivateHeader />
          {/* { isOpen ? <Modal /> : null } */}
          
        </>
    );
}

export default Todo