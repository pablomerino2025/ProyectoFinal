import Image from "next/image"; 

export default function HomePage() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 min-h-[calc(100vh-120px)] w-full mx-auto">
      
      {/* Contenido Izquierdo: Título */}
      <div className="flex-1 text-left md:pr-12 mb-12 md:mb-0">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tighter uppercase text-white font-sans">
          PORTAFOLIO
          <br />
          DE TRABAJO
        </h1>
      </div>

      {/* Contenido Derecho: Imagen */}
      <div className="flex-1 flex justify-center md:justify-end">
        {/* Dimensiones ajustadas para el diseño final */}
        <div className="relative w-[300px] h-[450px] md:w-[450px] md:h-[580px]">
          <Image
            // ⚠️ RUTA: Asegúrate de que este archivo exista en tu carpeta /public
            src="/pablo-martinez-profile.png" 
            alt="Pablo Martinez"
            fill 
            className="object-cover" 
            priority
          />
        </div>
      </div>
    </section>
  );
}