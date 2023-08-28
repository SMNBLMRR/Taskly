import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  const auth = { isAuth : true};
    return (
        auth?.isAuth ? <Outlet /> : <Navigate to="/login"/>
    );
}

export default ProtectedRoute