import { ShoppingCart, Headset, UserCircle, ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* 1. La TopBar Violette - Plus élégante */}
      <div className="bg-[#5D5FEF] text-white py-2.5 px-10 flex justify-between items-center text-[12px] font-semibold tracking-wide">
        <div className="flex items-center gap-2 cursor-pointer hover:text-slate-200 transition-colors">
          <ShoppingCart size={14} strokeWidth={2} />
          <span>Trouver un produit</span>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer hover:text-slate-200 transition-colors">
            <Headset size={14} strokeWidth={2} />
            <span>Nous contacter</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-slate-200 transition-colors border-l border-white/20 pl-8">
            <UserCircle size={16} strokeWidth={2} />
            <span>Se connecter / S'inscrire</span>
          </div>
        </div>
      </div>

      {/* 2. La Navbar Principale */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-100 px-10 py-4 flex justify-between items-center shadow-sm">
        {/* Logo avec un petit tweak de kerning */}
        <div className="text-[26px] font-[900] text-[#1D2939] tracking-tighter cursor-pointer hover:opacity-90 transition-opacity">
          Subliz<span className="text-[#5D5FEF]">.</span>
        </div>

        {/* Liens Centraux */}
        <div className="hidden lg:flex items-center gap-10">
          {["Louer un produit", "Devenir loueur", "À propos", "Ressources"].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="text-[#1D2939] font-bold text-[14px] hover:text-[#5D5FEF] transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5D5FEF] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Bouton d'action dynamique */}
        <button className="group bg-[#1D2939] text-white px-7 py-3 rounded-full font-bold text-[14px] hover:bg-[#5D5FEF] hover:shadow-xl transition-all duration-300 flex items-center gap-2 active:scale-95">
          Faire une demande
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;