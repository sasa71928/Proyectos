import { Card, CardContent } from "../../components/ui/card";
import { Activity, Shield, Heart, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="py-20 bg-gradient-to-r from-blue-50/85 to-blue-100/85"
    >
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h1 className="text-slate-800 mb-3 uppercase">
            Bienvenido a CliniGest
          </h1>
          <p className="text-slate-600">
            Somos un equipo de profesionales dedicados a la gestión clínica
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <Card className="bg-blue-600 border-0 h-full text-white">
              <CardContent className="p-8">
                <h3 className="text-white mb-4">¿Por qué elegir CliniGest?</h3>
                <p className="mb-8 leading-relaxed">
                  En CliniGest, combinamos tecnología, atención médica de
                  calidad y un equipo humano comprometido con el bienestar del
                  paciente. Nos especializamos en facilitar una gestión clínica
                  eficiente, segura y personalizada.
                </p>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white hover:text-blue-600 rounded-full transition-all"
                >
                  <span>Learn More</span>
                  <CheckCircle className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-slate-800 mb-3">
                Atención integral en un solo lugar
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Desde medicina general hasta servicios de imagenología,
                centralizamos múltiples especialidades para comodidad y
                confianza.
              </p>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-slate-800 mb-3">Tecnología que cuida</h4>
              <p className="text-slate-600 leading-relaxed">
                Equipos modernos para diagnósticos precisos y tratamientos más
                efectivos en menos tiempo.
              </p>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-slate-800 mb-3">Calidez y profesionalismo</h4>
              <p className="text-slate-600 leading-relaxed">
                Nuestro personal médico y administrativo brinda una experiencia
                amable, respetuosa y humana.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
