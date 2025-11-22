import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useNavigate } from "react-router-dom"; 

// Define la estructura de datos que se pasará a App.tsx
interface UserData {
    id: string;
    email: string;
    role: "admin" | "doctor" | "patient";
    first_name: string;
    last_name: string;
}

interface LoginProps {
    onLogin: (role: "admin" | "doctor" | "patient", userData: UserData) => void;
}

export default function Login({ onLogin }: LoginProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg("");
        setLoading(true);

        // 1. Autenticación (Login)
        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (authError) {
            setLoading(false);
            setErrorMsg(authError.message || "Error al iniciar sesión. Verifica tus credenciales.");
            return;
        }

        const user = authData.user;
        
        // 2. Obtención del perfil (incluye rol, nombre y apellido)
        const { data: userData, error: userError } = await supabase
            .from('users')
            .select('role, first_name, last_name') 
            .eq('id', user.id)
            .single();
        
        setLoading(false);

        // Ya que el console.log confirmó que los datos llegan, 
        // solo verificamos errores o si el perfil está vacío
        if (userError || !userData) {
            console.error("Error al obtener perfil:", userError);
            await supabase.auth.signOut();
            setErrorMsg("No se encontró el perfil de usuario o datos incompletos.");
            return;
        }

        const role = userData.role as "admin" | "doctor" | "patient";
        console.log(`✅ Rol de perfil encontrado: ${role}`);
        console.log("✅ Datos de perfil recuperados (userData):", userData);

        const completeUserData: UserData = {
            id: user.id,
            email: user.email!, 
            role: role,
            first_name: userData.first_name || '', 
            last_name: userData.last_name || '',
        };

       
        onLogin(role, completeUserData);
        
        // 4. Redirigir al usuario
        if (role === 'admin') {
            navigate('/admin');
        } else if (role === 'doctor') {
            navigate('/doctor');
        } else if (role === 'patient') {
            navigate('/patient');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-lg shadow-md w-96 space-y-4"
            >
                <h1 className="text-2xl font-bold text-center">Iniciar Sesión</h1>

                {errorMsg && (
                    <div className="bg-red-100 text-red-700 p-2 rounded text-sm">
                        {errorMsg}
                    </div>
                )}

                <div>
                    <label htmlFor="email" className="block font-semibold mb-1">Correo:</label>
                    <input
                        id="email"
                        type="email"
                        className="w-full border p-2 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block font-semibold mb-1">Contraseña:</label>
                    <input
                        id="password"
                        type="password"
                        className="w-full border p-2 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                    {loading ? "Iniciando..." : "Entrar"}
                </button>
            </form>
        </div>
    );
}