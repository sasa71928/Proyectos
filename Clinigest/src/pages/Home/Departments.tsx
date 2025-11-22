import type { Dispatch, SetStateAction } from "react";

import pediatriaImg from "../../assets/images/pediatria.jpg";
import enfermeriaImg from "../../assets/images/enfermera.jpeg";
import imagenologiaImg from "../../assets/images/radiog.jpeg";
import laboratorioImg from "../../assets/images/laboratorio.jpeg";
import generalImg from "../../assets/images/general.jpeg";

interface Department {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

interface DepartmentsProps {
  activeDepartment: string;
  setActiveDepartment: Dispatch<SetStateAction<string>>;
}

const departments = [
  {
    id: "pediatria",
    name: "Pediatría",
    title: "Departamento de Pediatría",
    subtitle: "Cuidado especializado para niños y adolescentes",
    description:
      "Nuestro departamento de pediatría ofrece atención médica integral para bebés, niños y adolescentes. Contamos con especialistas altamente capacitados que brindan un cuidado compasivo y personalizado, desde chequeos de rutina hasta tratamientos para condiciones complejas. Nuestro enfoque centrado en la familia garantiza que tanto los pacientes como sus padres se sientan cómodos y bien informados durante todo el proceso de atención.",
    image: pediatriaImg,
  },
  {
    id: "enfermeria",
    name: "Enfermería",
    title: "Departamento de Enfermería",
    subtitle: "Cuidado profesional y compasivo para todos los pacientes",
    description:
      "Nuestro equipo de enfermería está compuesto por profesionales dedicados que proporcionan cuidados de alta calidad a todos nuestros pacientes. Trabajan en estrecha colaboración con médicos y otros profesionales de la salud para garantizar una atención integral. Desde la administración de medicamentos hasta el apoyo emocional, nuestras enfermeras están comprometidas con el bienestar y la recuperación de cada paciente.",
    image: enfermeriaImg,
  },
  {
    id: "imagenologia",
    name: "Imagenología",
    title: "Departamento de Imagenología",
    subtitle: "Diagnóstico preciso mediante tecnología avanzada de imágenes",
    description:
      "El departamento de imagenología ofrece servicios diagnósticos de vanguardia utilizando equipos de última generación. Realizamos radiografías, ultrasonidos, tomografías computarizadas y resonancias magnéticas para proporcionar a nuestros médicos imágenes detalladas que ayudan en el diagnóstico y tratamiento de diversas condiciones. Nuestros técnicos y radiólogos están altamente capacitados para garantizar resultados precisos y una experiencia cómoda para el paciente.",
    image: imagenologiaImg,
  },
  {
    id: "laboratorio",
    name: "Laboratorio Clínico",
    title: "Laboratorio Clínico",
    subtitle: "Análisis precisos para diagnósticos confiables",
    description:
      "Nuestro laboratorio clínico realiza una amplia gama de pruebas diagnósticas con la más alta precisión y rapidez. Desde análisis de sangre rutinarios hasta pruebas especializadas, nuestro equipo de tecnólogos médicos utiliza equipos avanzados para proporcionar resultados confiables que ayudan a los médicos a diagnosticar enfermedades, monitorear tratamientos y prevenir problemas de salud.",
    image: laboratorioImg,
  },
  {
    id: "medicina-general",
    name: "Medicina General",
    title: "Medicina General",
    subtitle: "Atención primaria integral para pacientes de todas las edades",
    description:
      "El departamento de medicina general es la puerta de entrada a nuestros servicios de salud. Nuestros médicos generales ofrecen atención primaria completa, desde chequeos preventivos hasta el manejo de enfermedades crónicas. Con un enfoque holístico, nuestros profesionales no solo tratan enfermedades, sino que también promueven hábitos saludables y prevención, estableciendo relaciones duraderas con los pacientes para garantizar su bienestar a largo plazo.",
    image: generalImg,
  },
];

export default function Departments({
  activeDepartment,
  setActiveDepartment,
}: DepartmentsProps) {
  const activeDept =
    departments.find((d) => d.id === activeDepartment) || departments[0];

  return (
    <section id="departamentos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-slate-800 mb-4 relative inline-block pb-4">
            Departamentos
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-600"></span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Nuestros departamentos especializados para su atención integral
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Departments List */}
          <div className="lg:col-span-2">
            <ul className="space-y-4 border-r-2 border-slate-100 pr-4">
              {departments.map((dept) => (
                <li key={dept.id} className="relative">
                  <button
                    onClick={() => setActiveDepartment(dept.id)}
                    className={`w-full text-left py-2 transition-colors ${
                      activeDepartment === dept.id
                        ? "text-blue-600"
                        : "text-slate-700 hover:text-blue-600"
                    }`}
                  >
                    {dept.name}
                  </button>
                  {activeDepartment === dept.id && (
                    <span className="absolute right-[-18px] top-0 bottom-0 w-0.5 bg-blue-600"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Department Content */}
          <div className="lg:col-span-6">
            <div className="pr-8">
              <h3 className="text-slate-800 mb-4">{activeDept.title}</h3>
              <p className="italic text-slate-600 mb-4">
                {activeDept.subtitle}
              </p>
              <p className="text-slate-700 leading-relaxed">
                {activeDept.description}
              </p>
            </div>
          </div>

          {/* Department Image */}
          <div className="lg:col-span-4">
            <img
              src={activeDept.image}
              alt={activeDept.title}
              className="w-full h-auto rounded-lg shadow-lg transition-opacity duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
