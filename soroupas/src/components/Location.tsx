import { MapPin, Phone, Clock } from 'lucide-react';

const shops = [
  {
    city: "Cataguases",
    address: "Praça Gov. Valadares, 45 - Centro",
    phone: "(32) 3421-1474",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.234!2d-42.697!3d-21.389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDIzJzIwLjQiUyA0MsKwNDEnNDkuMiJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
    wa: "https://api.whatsapp.com/send?phone=553234211474&text=Queria%20mais%20informa%C3%A7%C3%B5es"
  },
  {
    city: "Leopoldina",
    address: "R. Barão de Cotegipe, 149 - Centro",
    phone: "(32) 98525-3598",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.234!2d-42.645!3d-21.530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMxJzQ4LjAiUyA0MsKwMzgnNDIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
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
              <iframe src={shop.mapUrl} width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-red-600 mb-4">{shop.city}</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center gap-2"><MapPin size={18} /> {shop.address}</p>
                  <p className="flex items-center gap-2"><Phone size={18} /> {shop.phone}</p>
                </div>
                <a href={shop.wa} target="_blank" className="mt-6 inline-block w-full text-center bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition">
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