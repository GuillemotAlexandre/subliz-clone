const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-24 pb-16 px-6 bg-white">
      {/* 1. Le petit badge noir du haut */}
      <div className="bg-[#1D2939] text-white text-[12px] font-medium px-4 py-1.5 rounded-full mb-10 tracking-wide">
        Location de mobilier professionnel
      </div>

      {/* 2. Le Titre avec le dégradé de couleur */}
      <h1 className="text-[54px] md:text-[72px] font-[900] text-[#1D2939] leading-[1.1] max-w-4xl tracking-tight">
        Libérez la valeur de <br />
        <span className="text-[#5D5FEF]">vos objets</span>
      </h1>

      {/* 3. Le texte descriptif */}
      <p className="text-gray-500 mt-8 max-w-2xl text-[17px] leading-relaxed font-medium">
        Subliz connecte des loueurs professionnels avec des locataires en quête de flexibilité. 
        Transformez vos biens en revenus passifs grâce à l'économie collaborative.
      </p>

      {/* 4. Les deux boutons côte à côte */}
      <div className="flex flex-col sm:flex-row gap-5 mt-12">
        <button className="bg-[#5D5FEF] text-white px-10 py-4 rounded-full font-bold text-[16px] hover:bg-[#4a4ccf] shadow-lg shadow-indigo-100 transition-all">
          Devenir loueur
        </button>
        <button className="bg-white text-[#1D2939] border-2 border-[#1D2939] px-10 py-4 rounded-full font-bold text-[16px] hover:bg-gray-50 transition-all">
          Louer un produit
        </button>
      </div>

      {/* 5. La petite baseline discrète */}
      <p className="text-gray-400 text-[14px] mt-8 font-medium">
        Simple. Sécurisé. Rentable.
      </p>
    </section>
  );
};

export default Hero;