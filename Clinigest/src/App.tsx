import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import AdminHome from "./pages/Admin/adminHome"; // Importamos el componente de Admin
import { useState } from "react";

// --- Componente ProtectedRoute ---
// Se encarga de la lógica de protección
interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: Array<"admin" | "doctor" | "patient">;
  currentRole: "admin" | "doctor" | "patient" | null;
}

const ProtectedRoute = ({ children, allowedRoles, currentRole }: ProtectedRouteProps) => {
  if (currentRole === null) {
    // 1. Si no hay rol (no autenticado), redirigir al login
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(currentRole)) {
    // 2. Si el usuario está logueado pero no tiene el rol correcto (ej: Paciente intenta ir a /admin)
    // Redirigir a la vista principal o a una página de error 403
    return <Navigate to="/" replace />; 
  }

  // 3. Si todo es correcto, renderizar la ruta solicitada
  return <>{children}</>;
};


function App() {
  const [currentRole, setCurrentRole] = useState<
    "admin" | "doctor" | "patient" | null
  >(null);

  const [userData, setUserData] = useState<any>(null);

  const handleLogin = (
    role: "admin" | "doctor" | "patient",
    data: any
  ) => {
    // 💡 Consejo: guardar el rol en localStorage aquí ayuda con la persistencia
    localStorage.setItem('role', role); 
    
    setCurrentRole(role);
    setUserData(data);
    
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* Rutas Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* RUTAS PROTEGIDAS POR ROL */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute currentRole={currentRole} allowedRoles={["admin"]}>
              <AdminHome user={userData} role={currentRole} /> 
            </ProtectedRoute>
          }
        />

        <Route
          path="/doctor"
          element={
            <ProtectedRoute currentRole={currentRole} allowedRoles={["doctor"]}>
              <h1>Panel Doctor — Bienvenido {userData?.email}</h1>
            </ProtectedRoute>
          }
        />

        <Route
          path="/patient"
          element={
            <ProtectedRoute currentRole={currentRole} allowedRoles={["patient"]}>
              <h1>Panel Paciente — Bienvenido {userData?.email}</h1>
            </ProtectedRoute>
          }
        />
        
        {/* Ruta 404 para URLs incorrectas */}
        <Route path="*" element={<h1>404: Página no encontrada</h1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;