import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/mirandahiromy",
      label: "@mirandahiromy",
    },
    {
      icon: Facebook,
      href: "https://facebook.com",
      label: "Miranda Hiromy Cosmetología",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12 max-w-4xl mx-auto">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-white italic" style={{ fontFamily: 'var(--font-heading)' }}>Miranda Hiromy</h3>
            <p className="text-gray-400">
              Cosmetóloga certificada con pasión por realzar tu belleza natural. Especializada en tratamientos faciales y cuidado personalizado de la piel.
            </p>
          </div>

          <div className="space-y-4 text-center md:text-right">
            <h3 className="text-white">Sígueme en Redes</h3>
            <div className="flex gap-4 justify-center md:justify-end">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 Miranda Hiromy - Cosmetóloga Profesional. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
