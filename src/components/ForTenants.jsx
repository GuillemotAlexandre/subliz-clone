const ForTenants = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-20 items-center">
      {/* Droite : Texte et Stats */}
      <div className="lg:w-1/2">
        <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mb-6">Les avantages pour les locataires</p>
        <h2 className="text-[52px] font-black text-[#1D2939] leading-[1.1] mb-8">
          Pour les locataires : accédez à tout sans posséder
        </h2>
        <p className="text-gray-500 text-[17px] leading-relaxed mb-8">
          Découvrez des milliers d'objets et équipements disponibles à la location près de chez vous. Subliz simplifie la location et vous permet d'accéder à des équipements de qualité sans investissement initial important. Économique, écologique et flexible, c'est la solution idéale pour tous vos projets.
        </p>
        
        <ul className="space-y-4 mb-12">
          {[
            "Large catalogue de plus de 500 catégories d'équipements professionnels",
            "Vérification et notation des loueurs pour votre tranquillité d'esprit",
            "Réservation instantanée et paiement sécurisé avec protection acheteur",
            "Économisez jusqu'à 70% par rapport à l'achat neuf sur vos équipements"
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] text-[#1D2939] font-medium">
              <span className="text-[#5D5FEF] mt-1">✓</span>
              {text}
            </li>
          ))}
        </ul>

        <div className="flex gap-16 border-t border-gray-100 pt-10">
          <div>
            <span className="text-[54px] font-[900] text-[#1D2939]">160+</span>
            <p className="text-gray-400 text-sm font-bold">Produits disponibles</p>
          </div>
          <div>
            <span className="text-[54px] font-[900] text-[#1D2939]">70%</span>
            <p className="text-gray-400 text-sm font-bold">D'économies <br/> vs. achat neuf</p>
          </div>
        </div>

        <button className="mt-12 bg-[#5D5FEF] text-white px-10 py-4 rounded-full font-bold hover:bg-[#4a4ccf] transition-all">
          Explorer le catalogue
        </button>
      </div>

      {/* Gauche : Image du PC */}
      <div className="lg:w-1/2">
        <div className="bg-[#F9FAFB] p-12 rounded-[40px]">
          <img 
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80" 
            alt="Plateforme Subliz" 
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ForTenants;