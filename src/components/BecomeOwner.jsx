import { Store, LayoutDashboard, Globe, Layers } from 'lucide-react';

const BecomeOwner = () => {
  const cards = [
    {
      title: "Boutique en ligne personnalisée",
      desc: "Créez facilement votre propre boutique dédiée. Fixez vos tarifs à l'heure, jour, semaine ou mois, et commencez à louer.",
      icon: <Store size={28} strokeWidth={1.5} />
    },
    {
      title: "Gestion simplifiée de vos locations",
      desc: "Pilotez vos locations avec un tableau de bord intuitif, calendrier synchronisé, réservation et paiement en un clic, avec un support 7j/7.",
      icon: <LayoutDashboard size={28} strokeWidth={1.5} />
    },
    {
      title: "Vos produits sur notre marketplace",
      desc: "Vos offres sont visibles sur Subliz Marketplace, augmentant votre visibilité et vos chances de location.",
      icon: <Globe size={28} strokeWidth={1.5} />
    },
    {
      title: "Une plateforme tout-en-un",
      desc: "Louez, gérez, sécurisez et développez votre activité sur une seule plateforme pensée pour vous.",
      icon: <Layers size={28} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
      <div className="lg:w-2/5 text-left">
        <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mb-6">Pourquoi devenir loueur</p>
        <h2 className="text-[52px] font-black text-[#1D2939] leading-[1.1] mb-8">
          Transformez l’inutilisé en opportunité.
        </h2>
        <p className="text-gray-500 text-[17px] leading-relaxed mb-10">
          Transformez vos actifs dormants en source de revenus réguliers et profitez d'une plateforme complète pour gérer votre activité de location en toute sécurité.
        </p>
        <button className="bg-[#5D5FEF] text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-[#4a4ccf] transition-all">
          Devenir loueur
        </button>
      </div>

      <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-transparent hover:border-gray-200 transition-all group">
            {/* Le conteneur de l'icône avec un léger fond pour plus de DA */}
            <div className="text-[#5D5FEF] mb-6 w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
              {card.icon}
            </div>
            <h4 className="font-bold text-[#1D2939] text-[19px] mb-3">{card.title}</h4>
            <p className="text-gray-500 text-[14px] leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BecomeOwner;