import { useState } from 'react';

import todoStore from '../store/todo';
import { TodoPayloadInterface, deleteTodoSevice, updateTodoService } from '../services/todo';

export const useTodoAPI = (todoId: number) => {
  const { updateTodo, deleteTodo } = todoStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateTodoState = async (todo:TodoPayloadInterface) => {
    setIsLoading(true);
    try {
    await updateTodoService(todoId, { ...todo })
    updateTodo(todoId, { ...todo });
    } catch (err:any) {
      setError(err);
      // handle error here, maybe revert the state
    } finally {
      setIsLoading(false);
    }
  }

  const toggleTodo = async (checked: boolean) => {
    setIsLoading(true);
    try {
      await updateTodoService(todoId, { checked });
      updateTodo(todoId, { checked });
    } catch (err:any) {
      setError(err);
      // handle error here, maybe revert the state
    } finally {
      setIsLoading(false);
    }
  };

  const setPriority = async (priority:any) => {
    setIsLoading(true);
    try {
      await updateTodoService(todoId, { priority });
      updateTodo(todoId, { priority });
    } catch (err:any) {
      setError(err);
      // handle error here, maybe revert the state
    } finally {
      setIsLoading(false);
    }
  }

  const deleteTodoItem = async () => {
    setIsLoading(true);
    try {
      await deleteTodoSevice(todoId);
      deleteTodo(todoId);
    } catch (err:any) {
      setError(err);
      // handle error here
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateTodoState,
    toggleTodo,
    deleteTodoItem,
    setPriority,
    isLoading,
    error,
  };
};