const Simulators = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-center">
      <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mb-4">En savoir plus sur la location</p>
      <h2 className="text-[42px] font-black text-[#1D2939] mb-12">Découvrez nos derniers conseils <br/> sur la location de mobilier.</h2>
      <button className="bg-[#5D5FEF] text-white px-8 py-3 rounded-full font-bold mb-20">Nos conseils et ressources</button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-12 rounded-xl">
          <h4 className="font-bold text-xl mb-2">Pour les propriétaires de mobilier</h4>
          <div className="h-1 w-20 bg-[#5D5FEF] mx-auto mb-6"></div>
          <p className="font-bold mb-2">Simulateur de rendement</p>
          <p className="text-gray-500 text-sm mb-8">Découvrez combien la location pourrait vous rapporter.</p>
          <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50">Simulateur de rendement</button>
        </div>

        <div className="bg-slate-50 p-12 rounded-xl">
          <h4 className="font-bold text-xl mb-2">Pour les utilisateur clients</h4>
          <div className="h-1 w-20 bg-[#5D5FEF] mx-auto mb-6"></div>
          <p className="font-bold mb-2">Simulateur d'économies</p>
          <p className="text-gray-500 text-sm mb-8">Découvrez vos économies potentielles grâce à la location.</p>
          <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50">Simulateur d'économies</button>
        </div>
      </div>
    </section>
  );
};

export default Simulators;