const PreFooter = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Texte SUBLIZ géant en arrière-plan */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[250px] md:text-[450px] font-black text-slate-100 select-none tracking-tighter opacity-50">
          SUBLIZ
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        {/* Photo Polaroid de gauche */}
        <div className="absolute left-10 top-0 hidden lg:block transform -rotate-12 shadow-xl border-[12px] border-white rounded-sm w-48">
          <img 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=300" 
            alt="Intérieur" 
            className="w-full h-40 object-cover"
          />
        </div>

        {/* Photo Polaroid de droite */}
        <div className="absolute right-10 bottom-0 hidden lg:block transform rotate-12 shadow-xl border-[12px] border-white rounded-sm w-48">
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300" 
            alt="Équipement" 
            className="w-full h-40 object-cover"
          />
        </div>

        {/* Contenu Central */}
        <h2 className="text-[42px] font-black text-[#1D2939] mb-8 leading-tight">
          Prêt à transformer vos <br /> biens en revenus passifs ?
        </h2>
        
        <p className="text-gray-500 max-w-2xl mx-auto text-[15px] leading-relaxed mb-10">
          Rejoignez des milliers d'entrepreneurs qui ont déjà fait le choix de l'économie collaborative. 
          Commencez à générer des revenus dès aujourd'hui en louant vos équipements, véhicules ou espaces inutilisés.
        </p>

        <button className="bg-[#3D3BF3] text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
          Devenir loueur
        </button>
      </div>
    </section>
  );
};

export default PreFooter;