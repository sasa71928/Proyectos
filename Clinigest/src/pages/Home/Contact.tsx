import { Card, CardContent } from "../../components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">Contáctanos</h2>
          <p className="text-slate-600">Estamos aquí para ayudarte</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-0 shadow-sm text-center">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="text-slate-900 mb-2">Teléfono</h4>
              <p className="text-slate-600">+52 555 123 4567</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm text-center">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="text-slate-900 mb-2">Email</h4>
              <p className="text-slate-600">contacto@clinigest.com</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm text-center">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="text-slate-900 mb-2">Ubicación</h4>
              <p className="text-slate-600">Ciudad de México</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
