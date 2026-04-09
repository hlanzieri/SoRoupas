import Header from '@/components/Header';
import Brands from '@/components/Brands';
import Locations from '@/components/Location';
import Footer from '@/components/Footer';
import { Star, Shirt, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* --- SECTION: HERO (BANNER PRINCIPAL) --- */}
      <section id="inicio" className="relative bg-red-600 py-20 lg:py-32 overflow-hidden">
        {/* Elemento Decorativo de Fundo */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full text-sm font-medium mb-6 backdrop-blur-md">
              <Star size={16} className="fill-white" />
              <span>Qualidade e Preço Acessível</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              A MODA QUE <br /> 
              <span className="text-red-200">VESTE SUA FAMÍLIA.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-xl leading-relaxed">
              Moda infantil, juvenil e adulto com as melhores marcas do varejo. Visite nossas lojas em Cataguases e Leopoldina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#contato" 
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-lg"
              >
                Localizar Lojas <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: MARCAS (MARQUEE) --- */}
      <section id="marcas">
        <div className="py-6 bg-gray-50 text-center">
          <p className="text-sm font-bold text-gray-600 uppercase tracking-widest mb-4">Principais Marcas que Trabalhamos</p>
          <Brands />
        </div>
      </section>

      {/* --- SECTION: CATEGORIAS / DIFERENCIAIS --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md transition">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-6 text-red-600">
                <Shirt size={24} />
              </div>
              <h3 className=" text-gray-600 text-xl font-bold mb-3">Moda Infantil</h3>
              <p className="text-gray-600 italic">Conforto e estilo para os pequenos crescerem com alegria.</p>
            </div>
            <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md transition">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-6 text-red-600">
                <Sparkles size={24} />
              </div>
              <h3 className="text-gray-600 text-xl font-bold mb-3">Moda Juvenil</h3>
              <p className="text-gray-600 italic">As tendências que a galera jovem adora.</p>
            </div>
            <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md transition">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-6 text-red-600">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-gray-600 text-xl font-bold mb-3">Moda Adulto</h3>
              <p className="text-gray-600 italic">Masculino e Feminino com o melhor custo-benefício.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: SOBRE NÓS (HISTÓRIA) --- */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600 rounded-lg -z-10"></div>
                <div className="bg-white p-2 shadow-xl rounded-lg">
                  <div className="relative aspect-video overflow-hidden rounded">
                    <Image
                      src="/images/lojaFachada.jpg"
                      alt="Fachada da loja SOROUPAS Magazine"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-black text-gray-800 mb-6 italic">TRADIÇÃO E REINVENÇÃO</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A <strong>Soroupas Magazine</strong> é uma referência no varejo regional. Em 2020, nossa loja em Cataguases foi 
                totalmente remodelada para oferecer um ambiente moderno e climatizado para nossos clientes.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Nosso foco é oferecer marcas consagradas como Trifil e Malwee, garantindo que você encontre 
                qualidade superior com preços que cabem no seu bolso.
              </p>
              <a 
                href="https://marcelolopes.jor.br/site/2020/10/05/so-roupas-e-reinaugurada-toda-remodelada-e-com-muitas-novidades/" 
                target="_blank"
                className="text-red-600 font-bold flex items-center gap-2 hover:underline"
              >
                Leia a matéria completa sobre nossa reinauguração <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: MAPAS E CONTATO --- */}
      <Locations />

      <Footer />
    </main>
  );
}