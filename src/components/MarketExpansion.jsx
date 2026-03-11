import { BarChart3, Wallet, Leaf, ArrowRight } from 'lucide-react';

const MarketExpansion = () => {
  const points = [
    {
      title: "Évolution des usages",
      desc: "73% des consommateurs européens préfèrent maintenant louer plutôt que d’acheter pour des besoins ponctuels. La location devient le nouveau standard de consommation responsable.",
      icon: <BarChart3 size={28} strokeWidth={1.5} />
    },
    {
      title: "Opportunité économique",
      desc: "Les entreprises qui louent leurs biens inutilisés génèrent des revenus complémentaires en moyenne entre 500€ et 3000€ par mois, transformant des actifs dormants en sources de revenus actifs.",
      icon: <Wallet size={28} strokeWidth={1.5} />
    },
    {
      title: "Impact environnemental",
      desc: "La location permet de réduire la surconsommation : un bien loué peut servir à 10-15 personnes différentes, évitant la production de multiples objets neufs et réduisant l'empreinte carbone.",
      icon: <Leaf size={28} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Pourquoi Subliz</p>
        <h2 className="text-[42px] font-black text-[#1D2939] leading-tight mb-8">
          L’économie de la location : un marché <br className="hidden md:block" /> en pleine expansion
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto text-[17px] leading-relaxed mb-20">
          Le marché de la location connaît une croissance exceptionnelle. En Europe, l’économie collaborative génère plus de 180 milliards d’euros par an, avec une progression de 23% chaque année.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {points.map((p, i) => (
            <div key={i} className="group bg-white p-10 rounded-2xl shadow-sm flex flex-col items-center text-center border-b-4 border-transparent hover:border-[#5D5FEF] hover:shadow-xl transition-all duration-300">
              {/* Icône stylisée */}
              <div className="text-[#5D5FEF] mb-8 p-4 bg-slate-50 rounded-full group-hover:bg-[#5D5FEF]/10 transition-colors">
                {p.icon}
              </div>
              
              <h3 className="font-bold text-[#1D2939] text-xl mb-4">{p.title}</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-10 flex-grow">
                {p.desc}
              </p>
              
              <button className="flex items-center gap-2 text-sm font-bold text-[#1D2939] hover:text-[#5D5FEF] transition-colors group/btn">
                En savoir plus 
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketExpansion;