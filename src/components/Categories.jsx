const Categories = () => {
  const categories = [
    {
      title: "Location de matériel événementiel",
      desc: "Sonorisation, éclairage, mobilier, scènes et tentes pour salons, festivals, conférences et événements professionnels, partout en France.",
      icon: "🏢"
    },
    {
      title: "Location de matériel restauration & réception",
      desc: "Équipements de cuisine professionnelle, arts de la table et mobilier pour événements, traiteurs, hôtels et réceptions.",
      icon: "🍽️"
    },
    {
      title: "Location de bureaux & matériel informatique",
      desc: "Mobilier de bureau, matériel IT, imprimantes et solutions réseau pour aménager des espaces de travail temporaires ou mobiles.",
      icon: "💻"
    },
    {
      title: "Location de matériel BTP & chantier",
      desc: "Échafaudages, engins, outillage et équipements de chantier pour vos travaux temporaires, projets de construction et interventions techniques.",
      icon: "🛠️"
    },
    {
      title: "Location de matériel agricole & espaces verts",
      desc: "Tracteurs, outils de jardinage et équipements paysagers pour travaux agricoles, entretien et aménagement extérieur.",
      icon: "🚜"
    },
    {
      title: "Location logistique & infrastructures temporaires",
      desc: "Matériel de manutention, stockage, vestiaires, sanitaires et éclairage pour chantiers, événements et sites temporaires.",
      icon: "📦"
    }
  ];

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[#1D2939] font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Locations disponibles</p>
        <h2 className="text-[42px] font-black text-[#1D2939] mb-16">Que pouvez-vous louer <br /> sur Subliz ?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white p-10 rounded-xl shadow-sm text-left border border-gray-50 flex flex-col h-full">
              <div className="text-[#5D5FEF] text-2xl mb-6">{cat.icon}</div>
              <h3 className="font-bold text-[#1D2939] text-[18px] mb-4 leading-snug">{cat.title}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed flex-grow">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-gray-500 text-sm">Et des centaines d'autres catégories disponibles pour tous les besoins de location !</p>
          <button className="bg-[#5D5FEF] text-white px-10 py-4 rounded-full font-bold hover:bg-[#4a4ccf] transition-all">
            Découvrir toutes les catégories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;