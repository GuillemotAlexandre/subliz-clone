import { Instagram, Linkedin, Twitter, Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1D2939] text-white pt-24 pb-12 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Subliz</h2>
          <p className="text-gray-400 text-[15px] leading-relaxed max-w-sm">
            Subliz est la plateforme qui libère la valeur des choses. Nous donnons le moyen à tous les professionnels de partager leurs produits et services de façon simple, récurrente et accessible.
          </p>
          
          {/* Ajout de réseaux sociaux pour le côté pro */}
          <div className="flex gap-5 mt-8 text-gray-500">
            <Linkedin size={20} className="hover:text-[#5D5FEF] cursor-pointer transition-colors" />
            <Instagram size={20} className="hover:text-[#5D5FEF] cursor-pointer transition-colors" />
            <Twitter size={20} className="hover:text-[#5D5FEF] cursor-pointer transition-colors" />
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">CGU</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          </div>
        </div>
        
        <div className="flex flex-col gap-6">
          <h4 className="font-bold text-[16px] text-white">Utiles</h4>
          <ul className="text-gray-400 space-y-4 text-[14px]">
            <li className="hover:text-[#5D5FEF] cursor-pointer transition-colors">Devenir loueur</li>
            <li className="hover:text-[#5D5FEF] cursor-pointer transition-colors">Louer un produit</li>
            <li className="hover:text-[#5D5FEF] cursor-pointer transition-colors">À propos</li>
            <li className="hover:text-[#5D5FEF] cursor-pointer transition-colors">Nous contacter</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="font-bold text-[16px] text-white">Accès</h4>
          <ul className="text-gray-400 space-y-4 text-[14px]">
            <li className="hover:text-[#5D5FEF] cursor-pointer transition-colors">Marketplace</li>
            <li className="hover:text-[#5D5FEF] cursor-pointer transition-colors">Compte loueur</li>
            <li className="hover:text-[#5D5FEF] cursor-pointer transition-colors">Compte client</li>
            <li className="hover:text-[#5D5FEF] cursor-pointer transition-colors">FAQ</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="font-bold text-[16px] text-white">Nos outils</h4>
          <ul className="text-gray-400 space-y-4 text-[14px]">
            <li className="hover:text-[#5D5FEF] cursor-pointer transition-colors">Faire une demande</li>
            <li className="hover:text-[#5D5FEF] cursor-pointer transition-colors">Devenir partenaire</li>
            <li className="hover:text-[#5D5FEF] cursor-pointer transition-colors">Simulateur économie</li>
            <li className="hover:text-[#5D5FEF] cursor-pointer transition-colors">Simulateur rendement</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500 font-medium">
        <p>© 2026 | SUBLIZ. Tous droits réservés</p>
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <span>Powered by</span>
          <span className="text-white font-bold tracking-[0.2em] flex items-center gap-1">
            FINADORY <Rocket size={14} className="text-[#5D5FEF]" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;