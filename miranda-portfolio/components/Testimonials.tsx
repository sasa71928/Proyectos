import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      text: "¡Increíble profesional! Los resultados superaron mis expectativas. Mi piel nunca había lucido tan radiante.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      text: "Excelente atención y resultados visibles desde la primera sesión. Totalmente recomendada.",
      rating: 5,
    },
    {
      name: "Laura Rodríguez",
      text: "Muy profesional y dedicada. Me explicó cada paso del tratamiento y me sentí en buenas manos.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>Testimonios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Lo que dicen mis clientes sobre su experiencia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-gray-900 text-gray-900" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="text-gray-900">{testimonial.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
