import { TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const Features = () => {
  const steps = [
    {
      title: "Rentabilisez vos actifs",
      desc: "Ne laissez plus votre matériel dormir. Générez des revenus simplement.",
      icon: <TrendingUp size={32} strokeWidth={1.5} />
    },
    {
      title: "Sécurité garantie",
      desc: "Chaque transaction est protégée et chaque profil est vérifié par nos soins.",
      icon: <ShieldCheck size={32} strokeWidth={1.5} />
    },
    {
      title: "Flexibilité totale",
      desc: "Louez selon vos besoins, pour la durée qui vous convient, sans engagement lourd.",
      icon: <Zap size={32} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="bg-slate-50 py-24 px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[40px] font-black text-[#1D2939] mb-20 leading-tight">
          Pourquoi choisir l'économie collaborative ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100"
            >
              {/* Icône avec cercle de fond discret */}
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-[#5D5FEF] mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1D2939] mb-4">{step.title}</h3>
              <p className="text-gray-500 text-[16px] leading-relaxed px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;