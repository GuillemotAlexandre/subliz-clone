const Navbar = () => {
  return (
    <header className="w-full font-sans">
      {/* 1. Topbar Violette */}
      <div className="bg-[#5D5FEF] text-white text-[12px] py-2 px-10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span>🛒 Trouver un produit</span>
        </div>
        <div className="flex gap-6">
          <span className="cursor-pointer">🎧 Nous contacter</span>
          <span className="cursor-pointer">👤 Se connecter / S'inscrire</span>
        </div>
      </div>

      {/* 2. Navbar Principale */}
      <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-sm">
        <div className="text-3xl font-black text-[#1D2939]">Subliz</div>
        
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-[#1D2939]">
          <a href="#" className="hover:text-[#5D5FEF]">Louer un produit</a>
          <a href="#" className="hover:text-[#5D5FEF]">Devenir loueur</a>
          <a href="#" className="hover:text-[#5D5FEF]">A propos</a>
          <a href="#" className="hover:text-[#5D5FEF]">Ressources</a>
        </div>

        <button className="bg-[#5D5FEF] text-white px-8 py-3 rounded-full font-bold hover:bg-[#4a4ccf] transition-all">
          Faire une demande
        </button>
      </nav>
    </header>
  );
};

export default Navbar;