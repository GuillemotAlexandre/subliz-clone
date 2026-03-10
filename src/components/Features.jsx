const Features = () => {
  const steps = [
    {
      title: "Rentabilisez vos actifs",
      desc: "Ne laissez plus votre matériel dormir. Générez des revenus simplement.",
      icon: "💰"
    },
    {
      title: "Sécurité garantie",
      desc: "Chaque transaction est protégée et chaque profil est vérifié par nos soins.",
      icon: "🛡️"
    },
    {
      title: "Flexibilité totale",
      desc: "Louez selon vos besoins, pour la durée qui vous convient, sans engagement lourd.",
      icon: "⚡"
    }
  ];

  return (
    <section className="bg-slate-50 py-20 px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-black text-[#1D2939] mb-16">Pourquoi choisir l'économie collaborative ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-6">{step.icon}</div>
              <h3 className="text-xl font-bold text-[#1D2939] mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;