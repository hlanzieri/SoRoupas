import { Clock, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Coluna 1: Sobre e Redes */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">SOROUPAS</h3>
            <p className="text-red-100 mb-6 leading-relaxed">
              Moda infantil, juvenil e adulto. <br />
              Tradição, qualidade e o melhor preço de Cataguases, Leopoldina e região.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/soroupas.magazine/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full hover:bg-white/20 transition"
                aria-label="Instagram da Soroupas"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37a4 4 0 1 1-7.75 1.26 4 4 0 0 1 7.75-1.26z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
                <span className="text-sm font-medium">Instagram: @soroupas.magazine</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Horários */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Clock className="text-white" size={20} /> Horário de Funcionamento
            </h4>
            <ul className="space-y-2 text-red-100 text-sm">
              <li className="flex justify-between border-b border-red-500 pb-1">
                <span>Segunda a Sexta</span>
                <span>08:30 – 18:30</span>
              </li>
              <li className="flex justify-between border-b border-red-500 pb-1">
                <span>Sábado</span>
                <span>08:00 – 13:00</span>
              </li>
              <li className="flex justify-between text-red-100">
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Dados Legais */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <FileText className="text-white" size={20} /> Informações Legais
            </h4>
            <div className="space-y-4 text-sm text-red-100">
              <div>
                <p className="font-bold text-white">Unidade Cataguases</p>
                <p>CNPJ: 01.038.733/0001-88</p>
              </div>
              <div>
                <p className="font-bold text-white">Unidade Leopoldina</p>
                <p>CNPJ: 13.665.847/0001-37</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-red-500 pt-8 text-center text-red-100 text-sm">
          <p>© {new Date().getFullYear()} Soroupas Magazine. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido por <a href="https://www.github.com/hlanzieri" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">HLF</a></p>
        </div>
      </div>
    </footer>
  );
}