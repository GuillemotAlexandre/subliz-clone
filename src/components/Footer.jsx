const Footer = () => {
  return (
    <footer className="bg-[#1D2939] text-white pt-24 pb-12 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-black mb-8">Subliz</h2>
          <p className="text-gray-400 text-[15px] leading-relaxed max-w-sm">
            Subliz est la plateforme qui libère la valeur des choses. Nous donnons le moyen à tous les professionnels de partager leurs produits et services de façon simple, récurrente et accessible. Avec Subliz, la location devient facile, fluide et universelle.
          </p>
          <div className="mt-10 flex gap-10 text-[11px] font-bold text-gray-500 uppercase tracking-tighter">
            <a href="#">CGU</a>
            <a href="#">CGV</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">Mentions légales</a>
          </div>
        </div>
        
        <div className="flex flex-col gap-6">
          <h4 className="font-bold text-[16px]">Utiles</h4>
          <ul className="text-gray-400 space-y-4 text-[14px]">
            <li className="hover:text-white cursor-pointer transition-colors">Devenir loueur</li>
            <li className="hover:text-white cursor-pointer transition-colors">Louer un produit</li>
            <li className="hover:text-white cursor-pointer transition-colors">À propos</li>
            <li className="hover:text-white cursor-pointer transition-colors">Nous contacter</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="font-bold text-[16px]">Accès</h4>
          <ul className="text-gray-400 space-y-4 text-[14px]">
            <li className="hover:text-white cursor-pointer transition-colors">Marketplace</li>
            <li className="hover:text-white cursor-pointer transition-colors">Compte loueur</li>
            <li className="hover:text-white cursor-pointer transition-colors">Compte client</li>
            <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="font-bold text-[16px]">Nos outils</h4>
          <ul className="text-gray-400 space-y-4 text-[14px]">
            <li className="hover:text-white cursor-pointer transition-colors">Faire une demande</li>
            <li className="hover:text-white cursor-pointer transition-colors">Devenir partenaire</li>
            <li className="hover:text-white cursor-pointer transition-colors">Simulateur économie</li>
            <li className="hover:text-white cursor-pointer transition-colors">Simulateur rendement</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500 font-medium">
        <p>2026 | SUBLIZ. Tous droits réservés</p>
        <p className="mt-4 md:mt-0">Powered by <span className="text-white font-bold tracking-widest">FINADORY ✨</span></p>
      </div>
    </footer>
  );
};

export default Footer;