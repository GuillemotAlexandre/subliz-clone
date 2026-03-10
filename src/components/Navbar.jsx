const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* 1. La TopBar Violette */}
      <div className="bg-[#5D5FEF] text-white py-2 px-6 flex justify-between items-center text-[13px] font-medium">
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <span>🛒</span>
          <span>Trouver un produit</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <span>🎧</span>
            <span>Nous contacter</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <span>👤</span>
            <span>Se connecter / S'inscrire</span>
          </div>
        </div>
      </div>

      {/* 2. La Navbar Principale avec ombre */}
      <div className="bg-white border-b border-gray-100 px-10 py-4 flex justify-between items-center shadow-md">
        {/* Logo */}
        <div className="text-[28px] font-[900] text-[#1D2939] tracking-tighter cursor-pointer">
          Subliz
        </div>

        {/* Liens Centraux */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-[#1D2939] font-bold text-[15px] hover:text-[#5D5FEF] transition-colors">Louer un produit</a>
          <a href="#" className="text-[#1D2939] font-bold text-[15px] hover:text-[#5D5FEF] transition-colors">Devenir loueur</a>
          <a href="#" className="text-[#1D2939] font-bold text-[15px] hover:text-[#5D5FEF] transition-colors">A propos</a>
          <a href="#" className="text-[#1D2939] font-bold text-[15px] hover:text-[#5D5FEF] transition-colors">Ressources</a>
        </div>

        {/* Bouton d'action */}
        <button className="bg-[#5D5FEF] text-white px-8 py-3 rounded-full font-bold text-[15px] hover:bg-[#4a4ccf] hover:shadow-lg transition-all active:scale-95">
          Faire une demande
        </button>
      </div>
    </nav>
  );
};

export default Navbar;