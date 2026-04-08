import Link from 'next/link';
import { Shirt } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-red-600 p-2 rounded-lg">
            <Shirt className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold text-red-600 tracking-tight">SOROUPAS</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 font-medium text-gray-600">
          <Link href="#inicio" className="hover:text-red-600 transition">Início</Link>
          <Link href="#marcas" className="hover:text-red-600 transition">Marcas</Link>
          <Link href="#sobre" className="hover:text-red-600 transition">Sobre</Link>
          <Link href="#contato" className="hover:text-red-600 transition">Lojas</Link>
        </nav>

        <button className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition">
          Ver Ofertas
        </button>
      </div>
    </header>
  );
}