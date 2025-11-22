import { Award, Star, Users } from "lucide-react";

export function About() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Clientes Satisfechos",
    },
    {
      icon: Award,
      number: "8+",
      label: "Años de Experiencia",
    },
    {
      icon: Star,
      number: "100%",
      label: "Dedicación",
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>Sobre Mí</h2>
          <p className="text-gray-600 text-lg">
            Soy cosmetóloga certificada apasionada por ayudar a las personas a sentirse seguras y hermosas en su propia piel. Con años de experiencia y formación continua en las últimas técnicas y tratamientos, me dedico a ofrecer resultados excepcionales personalizados para cada cliente.
          </p>
          <p className="text-gray-600">
            Mi enfoque combina técnicas tradicionales con innovaciones modernas en el cuidado de la piel, siempre priorizando la salud y el bienestar de cada persona que confía en mí.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full mb-4">
                  <Icon size={28} />
                </div>
                <div className="text-3xl text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
