import { Button } from "../../components/ui/button";

interface CTASectionProps {
  onLogin?: () => void;
  onRegister?: () => void;
}

export default function CTASection({ onLogin, onRegister }: CTASectionProps) {
  return (
    <section className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
      <p className="mb-8">Crea tu cuenta o inicia sesión para acceder a CliniGest</p>
      <div className="flex justify-center gap-4">
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => onLogin?.()}
        >
          Iniciar Sesión
        </Button>
        <Button
          variant="outline"
          onClick={() => onRegister?.()}
        >
          Registrarse
        </Button>
      </div>
    </section>
  );
}
