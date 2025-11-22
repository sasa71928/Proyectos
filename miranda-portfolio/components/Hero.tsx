import heroImage from "../src/assets/main.jpeg";

export function Hero() {
  return (
    <section id="inicio" className="h-screen relative overflow-hidden">
      {/* Imagen de fondo que cubre toda la pantalla */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Miranda Hiromy - Cosmetóloga Profesional"
          className="w-full h-full object-cover object-top"
        />
        {/* Overlay sutil para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      {/* Contenido sobre la imagen */}
      <div className="relative h-full flex items-end justify-start pb-20 pl-8 md:pl-16 lg:pl-24">
        <div className="text-left">
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl text-white italic tracking-wide"
            style={{ 
              fontFamily: 'var(--font-heading)',
              textShadow: '2px 2px 8px rgba(0,0,0,0.4)'
            }}
          >
            Miranda Hiromy
          </h1>
          <p 
            className="text-white text-lg md:text-xl lg:text-2xl mt-4"
            style={{ 
              fontFamily: 'var(--font-body)',
              textShadow: '1px 1px 4px rgba(0,0,0,0.4)'
            }}
          >
            Cosmetóloga Profesional
          </p>
        </div>
      </div>
    </section>
  );
}