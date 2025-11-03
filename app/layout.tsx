import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Search } from "lucide-react"; 
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pablo Martinez | Portafolio",
  description: "Portafolio de trabajo de Pablo Martinez.",
};

function Header() {
  return (
    <div className="w-full bg-black flex flex-col items-center">
      <header className="flex justify-between items-center px-6 py-4 bg-black text-white max-w-7xl mx-auto w-full">
        {/* Nombre/Logo */}
        <div className="font-bold text-lg text-white font-mono tracking-wider">
          Pablo Martinez
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex space-x-8 text-sm text-gray-300">
          <div className="hover:text-cyan-400 transition-colors cursor-pointer">About</div>
          <div className="hover:text-cyan-400 transition-colors cursor-pointer">Product</div>
          <div className="hover:text-cyan-400 transition-colors cursor-pointer">Project</div>
          <div className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</div>
        </nav>

        {/* Botón de Búsqueda (Cian) */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500 text-white rounded-lg text-sm cursor-pointer">
          Search <Search size={16} /> 
        </div>
      </header>
      
      {/* 🛑 BARRA DIVISORIA DEL HEADER 🛑 */}
      <div className="w-full h-px bg-gray-800 max-w-7xl mx-auto"></div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full mb-4 max-w-7xl mx-auto px-6">
      {/* 🛑 BARRA DIVISORIA DEL FOOTER (superior) 🛑 */}
      <div className="border-t border-gray-800 pt-4 flex justify-end text-sm text-gray-500 font-mono">
        2025
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-black text-white min-h-screen flex flex-col items-center`}
      >
        <div className="w-full flex-grow flex flex-col items-center">
            <Header />

            {/* 🛑 Renderiza el contenido de app/page.tsx 🛑 */}
            <main className="flex-grow w-full max-w-7xl mx-auto px-6">
              {children} 
            </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}