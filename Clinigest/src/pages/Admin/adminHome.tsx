// src/pages/Admin/adminHome.tsx (Corregido)

interface AdminHomeProps {
  user: any; 
  role: "admin" | "doctor" | "patient" | null; 
}

// 🛑 CLAVE: Desestructurar { user, role }
export default function AdminHome({ user, role }: AdminHomeProps) {
  
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">
        Administrador: Dashboard Principal
      </h1>
      <p className="text-lg text-gray-700">
        Bienvenido {user?.first_name} {user?.last_name}, ({user?.email}). Tienes acceso completo de {role}.
      </p>
      
      {/* Contenido del Dashboard Admin (Ejemplo) */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ... */}
      </div>
    </div>
  );
}