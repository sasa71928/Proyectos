import { Sparkles, Heart, Droplet, Sun } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Sparkles,
      title: "Tratamientos Faciales",
      description: "Limpiezas profundas, hidratación intensiva y tratamientos anti-edad personalizados para tu tipo de piel.",
    },
    {
      icon: Heart,
      title: "Cuidado de la Piel",
      description: "Rutinas personalizadas y asesoramiento profesional para mantener tu piel radiante y saludable.",
    },
    {
      icon: Droplet,
      title: "Tratamientos Hidratantes",
      description: "Hidratación profunda con productos de alta calidad para revitalizar tu piel.",
    },
    {
      icon: Sun,
      title: "Rejuvenecimiento",
      description: "Técnicas avanzadas para reducir signos de envejecimiento y mejorar la textura de la piel.",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>Mis Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ofrezco una amplia gama de tratamientos personalizados para cubrir todas tus necesidades de belleza y cuidado de la piel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 text-gray-900 rounded-xl mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
