const MarketExpansion = () => {
  const points = [
    {
      title: "Évolution des usages",
      desc: "73% des consommateurs européens préfèrent maintenant louer plutôt que d’acheter pour des besoins ponctuels. La location devient le nouveau standard de consommation responsable.",
      icon: "⚪"
    },
    {
      title: "Opportunité économique",
      desc: "Les entreprises qui louent leurs biens inutilisés génèrent des revenus complémentaires en moyenne entre 500€ et 3000€ par mois, transformant des actifs dormants en sources de revenus actifs.",
      icon: "📋"
    },
    {
      title: "Impact environnemental",
      desc: "La location permet de réduire la surconsommation : un bien loué peut servir à 10-15 personnes différentes, évitant la production de multiples objets neufs et réduisant l'empreinte carbone.",
      icon: "🍃"
    }
  ];

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mb-4">Pourquoi Subliz</p>
        <h2 className="text-[42px] font-black text-[#1D2939] mb-8">L’économie de la location : un marché <br/> en pleine expansion</h2>
        <p className="text-gray-500 max-w-3xl mx-auto text-[15px] leading-relaxed mb-16">
          Le marché de la location connaît une croissance exceptionnelle. En Europe, l’économie collaborative génère plus de 180 milliards d’euros par an, avec une progression de 23% chaque année. Les consommateurs privilégient désormais l’accès à la propriété, créant des opportunités sans précédent pour les entrepreneurs et les particuliers qui souhaitent valoriser leurs biens.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <div key={i} className="bg-white p-10 rounded-sm shadow-sm flex flex-col items-center text-center border-b-4 border-transparent hover:border-[#5D5FEF] transition-all">
              <div className="text-[#5D5FEF] text-2xl mb-6">{p.icon}</div>
              <h3 className="font-bold text-xl mb-4">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{p.desc}</p>
              <button className="mt-auto text-sm font-bold border-t border-gray-100 pt-4 w-full hover:text-[#5D5FEF]">En savoir plus</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketExpansion;