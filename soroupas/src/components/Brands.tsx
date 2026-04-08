const brands = ["Trifil", "Malwe", "UniJeans", "Hrradinhos", "Trifil", "Malwee", "UniJeans", "Hrradinhos"];

export default function Brands() {
  return (
    <div className="bg-gray-50 py-10 overflow-hidden border-y border-gray-100">
      <div className="flex animate-marquee whitespace-nowrap">
        {brands.map((brand, i) => (
          <span key={i} className="text-3xl md:text-5xl font-black text-gray-300 mx-12 uppercase tracking-widest">
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}