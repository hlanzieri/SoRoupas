import { AtSign, Clock, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Coluna 1: Sobre e Redes */}
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-6">SOROUPAS</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Moda infantil, juvenil e adulto. <br />
              Tradição, qualidade e o melhor preço de Cataguases, Leopoldina e região.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/soroupas.magazine/" 
                target="_blank" 
                className="bg-white/10 p-3 rounded-full hover:bg-red-600 transition"
              >
                <AtSign size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Horários */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Clock className="text-red-500" size={20} /> Horário de Funcionamento
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between border-b border-gray-800 pb-1">
                <span>Segunda a Sexta</span>
                <span>08:30 – 18:30</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-1">
                <span>Sábado</span>
                <span>08:00 – 13:00</span>
              </li>
              <li className="flex justify-between text-red-400">
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Dados Legais */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <FileText className="text-red-500" size={20} /> Informações Legais
            </h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <p className="font-bold text-gray-200">Unidade Cataguases</p>
                <p>CNPJ: 01.038.733/0001-88</p>
              </div>
              <div>
                <p className="font-bold text-gray-200">Unidade Leopoldina</p>
                <p>CNPJ: 13.665.847/0001-37</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Soroupas Magazine. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com foco em qualidade e preço acessível.</p>
        </div>
      </div>
    </footer>
  );
}