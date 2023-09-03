import { lazy } from 'react';
import { Route } from 'react-router-dom';

const Todo = lazy(() => import('../../pages/Todo'));

const protectedRoute = [
  <Route element={<Todo />} key="todo" path={"/todo"}/>,
];

export default protectedRoute;