import { MapPin, Phone } from 'lucide-react';

const shops = [
  {
    city: "Cataguases",
    address: "Praça Gov. Valadares, 45 - Centro",
    phone: "(32) 3421-1474",
    mapEmbedQuery: "Soroupas Cataguases, Praca Gov. Valadares 45 Centro, Cataguases MG",
    mapUrl: "https://maps.app.goo.gl/DWu7uvmbvXWJgmhx7",
    wa: "https://api.whatsapp.com/send?phone=553234211474&text=Queria%20mais%20informa%C3%A7%C3%B5es"
  },
  {
    city: "Leopoldina",
    address: "R. Barão de Cotegipe, 149 - Centro",
    phone: "(32) 98525-3598",
    mapEmbedQuery: "Soroupas Leopoldina, Rua Barao de Cotegipe 149 Centro, Leopoldina MG",
    mapUrl: "https://maps.app.goo.gl/qsZ4ncBTu3gZkZ2D6",
    wa: "https://api.whatsapp.com/send?phone=5532985253598&text=Queria%20mais%20informa%C3%A7%C3%B5es"
  }
];

export default function Locations() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nossas Unidades</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {shops.map((shop) => (
            <div key={shop.city} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(shop.mapEmbedQuery)}&output=embed`}
                width="100%"
                height="256"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa da unidade ${shop.city}`}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-red-600 mb-4">{shop.city}</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center gap-2"><MapPin size={18} /> {shop.address}</p>
                  <p className="flex items-center gap-2"><Phone size={18} /> {shop.phone}</p>
                </div>
                <a href={shop.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-red-600 hover:text-red-700 hover:underline">
                  Abrir no Google Maps
                </a>
                <a href={shop.wa} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block w-full text-center bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition">
                  Falar com {shop.city}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}