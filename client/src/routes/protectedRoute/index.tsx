import { lazy } from 'react';
import { Route } from 'react-router-dom';

const Dashboard = lazy(() => import('../../pages/Dashboard'));

const protectedRoute = [
  <Route element={<Dashboard />} key="dashboard" path={"/dashboard"}/>,
//   <Route element={<Dashboard />} key="dashboard1" path={"/dashboard/h1"}/>,
//   <Route element={<Dashboard />} key="dashboard2" path={"/dashboard/h2"}/>,
];

export default protectedRoute;