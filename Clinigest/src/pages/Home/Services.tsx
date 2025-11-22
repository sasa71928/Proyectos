import { Card, CardContent } from "../../components/ui/card";
import {
  Syringe,
  Droplets,
  Waves,
  FlaskConical,
  Bandage,
  ScanLine,
} from "lucide-react";

const services = [
  {
    icon: Syringe,
    title: "Inyecciones",
    description:
      "Aplicamos medicamentos por vía intramuscular o subcutánea bajo supervisión profesional, asegurando una administración segura y eficaz para cada paciente.",
  },
  {
    icon: Droplets,
    title: "Canalizaciones",
    description:
      "Realizamos canalizaciones intravenosas para la administración de sueros, medicamentos y toma de muestras, utilizando técnicas seguras y personal capacitado.",
  },
  {
    icon: Waves,
    title: "Ultrasonidos",
    description:
      "Estudios de ultrasonido (ecografías) para diagnóstico no invasivo de tejidos blandos, órganos internos y control de embarazo. Resultados rápidos y precisos.",
  },
  {
    icon: FlaskConical,
    title: "Muestras de laboratorio",
    description:
      "Procesamos muestras de sangre, orina y otros fluidos para exámenes como biometría hemática, glucosa, perfil lipídico, y pruebas de embarazo. Resultados confiables y rápidos.",
  },
  {
    icon: Bandage,
    title: "Curaciones básicas",
    description:
      "Tratamos heridas leves, quemaduras, úlceras y otras afecciones superficiales con técnicas asépticas y material estéril, promoviendo una recuperación segura.",
  },
  {
    icon: ScanLine,
    title: "Radiografías",
    description:
      "Servicio de rayos X para detectar fracturas, anomalías pulmonares, problemas articulares y más. Imágenes digitales con alta resolución y bajo nivel de radiación.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-slate-800 mb-4 relative inline-block pb-4">
            Servicios
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-600"></span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Lista de servicios que ofrece CliniGest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border border-slate-200 hover:border-blue-600 transition-all"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
