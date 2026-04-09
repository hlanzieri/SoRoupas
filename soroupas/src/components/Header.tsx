import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-red-600 shadow-lg shadow-black/10">
      <div className="container mx-auto relative flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 text-white transition-opacity hover:opacity-90">
          <Image
            src="/images/logoBranca.png"
            alt="SÓROUPAS Magazine"
            width={44}
            height={44}
            priority
            className="h-11 w-11 shrink-0 object-contain"
          />
          <span className="flex flex-col leading-none">
            <span className="text-[1.15rem] uppercase tracking-[0.24em] sm:text-[1.45rem]">
              <span className="font-semibold">SÓ</span>
              <span className="font-black">ROUPAS</span>
            </span>
            <span className="mt-1 pl-[0.12em] text-[0.65rem] font-light uppercase tracking-[0.65em] text-white/85 sm:text-[0.72rem]">
              MAGAZINE
            </span>
          </span>
        </Link>
        
          <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-8 font-medium text-white/80 md:flex">
          <Link href="#inicio" className="transition hover:text-white">Início</Link>
          <Link href="#marcas" className="transition hover:text-white">Marcas</Link>
          <Link href="#sobre" className="transition hover:text-white">Sobre</Link>
          <Link href="#contato" className="transition hover:text-white">Lojas</Link>
        </nav>
      </div>
    </header>
  );
}