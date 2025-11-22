import { MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se puede integrar con un servicio de email o WhatsApp
    const whatsappMessage = `Hola Miranda! Me gustaría agendar una cita.%0ANombre: ${formData.name}%0AEmail: ${formData.email}%0ATeléfono: ${formData.phone}%0AServicio: ${formData.service}%0AMensaje: ${formData.message}`;
    window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, '_blank');
  };

  const services = [
    "Tratamiento Facial",
    "Cuidado de la Piel",
    "Hidratación Profunda",
    "Rejuvenecimiento",
    "Consulta General",
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
            Agenda tu Cita
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Estoy aquí para ayudarte a lograr la piel de tus sueños. Agenda tu cita y comienza tu transformación.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Formulario de Contacto */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-gray-900 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Solicita tu Cita
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-700 mb-2">
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensaje (Opcional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntame sobre tus necesidades o preguntas..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Solicitud
              </button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div className="lg:col-span-2 space-y-6">


            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-gray-900 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Ubicación & Horarios
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-gray-600 mt-1 flex-shrink-0" />
                  <div className="text-gray-600">
                    Calle Principal 123<br />
                    Madrid, España
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-gray-600 mt-1 flex-shrink-0" />
                  <div className="text-gray-600">
                    <div>Lun - Vie: 9:00 - 19:00</div>
                    <div>Sáb: 10:00 - 14:00</div>
                    <div className="text-sm text-gray-500 mt-1">*Solo con cita previa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}