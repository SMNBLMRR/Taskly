import { Route, Routes } from 'react-router-dom';
import { Suspense } from "react";
import './App.css';
import publicRoute from './routes/publicRoute';
import ProtectedRoute from './routes';
import protectedRoute from './routes/protectedRoute';
import AuthProvider from './ui/atoms/AuthProvider';
import Loader from './ui/atoms/Loader';

function App() {
  return (
    <>
    <Suspense fallback={<Loader />}>
      <AuthProvider>
        <Routes>
          {/* public route */}
            <Route>
                  {publicRoute}
            </Route>
            {/* private route */}
            <Route element={<ProtectedRoute />} >
                {protectedRoute}
            </Route>
        </Routes>
      </AuthProvider>
    </Suspense>
    </>
  );
}

export default App;
