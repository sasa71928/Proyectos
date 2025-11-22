import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1579801874037-f28c38c7edbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHRyZWF0bWVudCUyMHJlc3VsdHN8ZW58MXx8fHwxNzYwNjQ0MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Tratamiento de skincare",
      category: "Skincare",
    },
    {
      src: "https://images.unsplash.com/photo-1731514798247-2d7ecb6fa45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjBiZWF1dHklMjBzYWxvbnxlbnwxfHx8fDE3NjA2NDQxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Tratamiento facial",
      category: "Facial",
    },
    {
      src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjA2NDQxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Tratamiento cosmético",
      category: "Tratamiento",
    },
    {
      src: "https://images.unsplash.com/photo-1582490841511-81e1363fb48c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzcGElMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NjA2NDQxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Spa beauty",
      category: "Spa",
    },
    {
      src: "https://images.unsplash.com/photo-1706419972358-028e2c713133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3QlMjBuZXV0cmFsfGVufDF8fHx8MTc2MDY0NDE0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Productos de skincare",
      category: "Productos",
    },
    {
      src: "https://images.unsplash.com/photo-1733171934596-6fad5221f396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYwNjQ0MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Cosméticos profesionales",
      category: "Profesional",
    },
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>Galería de Resultados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubre los increíbles resultados que he logrado con mis clientes. Cada transformación cuenta una historia única.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square bg-gray-100"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block px-3 py-1 bg-white/90 rounded-full text-gray-900">
                    {image.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
