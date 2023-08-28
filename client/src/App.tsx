import { Route, Routes } from 'react-router-dom';
import { Suspense } from "react";
import './App.css';
import publicRoute from './routes/publicRoute';
import ProtectedRoute from './routes';
import protectedRoute from './routes/protectedRoute';

function App() {
  return (
    <>
    <Suspense fallback="loading...">
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
    </Suspense>
    </>
  );
}

export default App;
