import { Music, Utensils, Monitor, HardHat, Tractor, Box } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      title: "Location de matériel événementiel",
      desc: "Sonorisation, éclairage, mobilier, scènes et tentes pour salons, festivals, conférences et événements professionnels, partout en France.",
      icon: <Music size={24} strokeWidth={1.5} />
    },
    {
      title: "Location de matériel restauration & réception",
      desc: "Équipements de cuisine professionnelle, arts de la table et mobilier pour événements, traiteurs, hôtels et réceptions.",
      icon: <Utensils size={24} strokeWidth={1.5} />
    },
    {
      title: "Location de bureaux & matériel informatique",
      desc: "Mobilier de bureau, matériel IT, imprimantes et solutions réseau pour aménager des espaces de travail temporaires ou mobiles.",
      icon: <Monitor size={24} strokeWidth={1.5} />
    },
    {
      title: "Location de matériel BTP & chantier",
      desc: "Échafaudages, engins, outillage et équipements de chantier pour vos travaux temporaires, projets de construction et interventions techniques.",
      icon: <HardHat size={24} strokeWidth={1.5} />
    },
    {
      title: "Location de matériel agricole & espaces verts",
      desc: "Tracteurs, outils de jardinage et équipements paysagers pour travaux agricoles, entretien et aménagement extérieur.",
      icon: <Tractor size={24} strokeWidth={1.5} />
    },
    {
      title: "Location logistique & infrastructures temporaires",
      desc: "Matériel de manutention, stockage, vestiaires, sanitaires et éclairage pour chantiers, événements et sites temporaires.",
      icon: <Box size={24} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Locations disponibles</p>
        <h2 className="text-[42px] font-black text-[#1D2939] leading-tight mb-16">
          Que pouvez-vous louer <br className="hidden md:block" /> sur Subliz ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="group bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 text-left border border-gray-100 flex flex-col h-full transition-all duration-300">
              {/* Conteneur d'icône stylisé */}
              <div className="text-[#5D5FEF] mb-8 w-12 h-12 flex items-center justify-center bg-slate-50 rounded-xl group-hover:bg-[#5D5FEF] group-hover:text-white transition-colors duration-300">
                {cat.icon}
              </div>
              <h3 className="font-bold text-[#1D2939] text-[20px] mb-4 leading-snug">{cat.title}</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed flex-grow">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-8">
          <p className="text-gray-400 text-sm font-medium italic">
            Et des centaines d'autres catégories disponibles pour tous les besoins de location !
          </p>
          <button className="bg-[#5D5FEF] text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-[#4a4ccf] hover:shadow-lg hover:scale-105 transition-all active:scale-95">
            Découvrir toutes les catégories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;