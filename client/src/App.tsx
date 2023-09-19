import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import publicRoute from "./routes/publicRoute";
import ProtectedRoute from "./routes";
import protectedRoute from "./routes/protectedRoute";
import AuthProvider from "./ui/atoms/AuthProvider";
import Loader from "./ui/atoms/Loader";

function App() {
  const { pathname } = useLocation();
  const mainColor = pathname.startsWith("/todo") ? "#171719" : "#f5deb3";
  return (
    <div style={{ backgroundColor: mainColor }} className="flex flex-col min-h-screen">
      <Suspense fallback={<Loader />}>
        <AuthProvider>
          <Routes>
            {/* public route */}
            <Route>{publicRoute}</Route>
            {/* private route */}
            <Route element={<ProtectedRoute />}>{protectedRoute}</Route>
          </Routes>
        </AuthProvider>
      </Suspense>
    </div>
  );
}

export default App;
