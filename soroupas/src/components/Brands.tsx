const brands = ["Trifil", "Malwe", "UniJeans", "Hrradinhos"];

export default function Brands() {
  const brandsList = [...brands, ...brands];

  return (
    <div className="overflow-hidden border-y border-gray-100 bg-gray-50 py-10">
      <div className="flex w-max min-w-max animate-marquee whitespace-nowrap">
        {brandsList.map((brand, i) => (
          <span
            key={i}
            className="mx-12 flex-none text-3xl font-black uppercase tracking-widest text-red-700 md:text-5xl"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}