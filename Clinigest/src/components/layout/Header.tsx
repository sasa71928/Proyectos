import { Hospital } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 backdrop-blur-sm bg-white/90">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <Hospital className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-blue-900 font-semibold">CliniGest</h2>
        </div>

        {/* Botones */}
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => navigate("/login")}>
            Iniciar Sesión
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => navigate("/register")}
          >
            Registrarse
          </Button>
        </div>
      </div>
    </header>
  );
}
