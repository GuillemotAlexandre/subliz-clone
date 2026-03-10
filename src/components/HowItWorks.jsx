const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Créez votre compte loueur",
      desc: "Inscription en 2 minutes. Créez votre boutique en ligne personnalisée et vérifiez votre identité pour gagner la confiance des locataires. Aucun frais d'inscription requis.",
      linkText: "Créer mon compte",
      img: "https://subliz.com/assets/images/how-it-works/step-1.png" // Remplace par tes screenshots
    },
    {
      num: "02",
      title: "Listez vos biens à louer",
      desc: "Ajoutez vos équipements avec photos professionnelles et description détaillée. Définissez vos conditions, vos tarifs de location (heure, jour, semaine, mois) et vos disponibilités selon votre calendrier.",
      linkText: "Demander une démo",
      img: "https://subliz.com/assets/images/how-it-works/step-2.png"
    },
    {
      num: "03",
      title: "Générez des revenus",
      desc: "Recevez des demandes de location, gérez vos contrats et factures automatiquement. Recevez vos paiements sécurisés directement sur votre compte bancaire.",
      linkText: "Commencer à louer",
      img: "https://subliz.com/assets/images/how-it-works/step-3.png"
    }
  ];

  return (
    <section className="py-24 bg-[#0F172A] px-6"> {/* Fond sombre comme l'original */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Comment devenir <span className="text-[#5D5FEF]">loueur sur Subliz</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Commencez à générer des revenus passifs en 3 étapes simples avec notre plateforme de location.
          </p>
          <button className="mt-8 bg-[#5D5FEF] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-all">
            Créer ma boutique
          </button>
        </div>

        <div className="space-y-12">
          {steps.map((step, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center min-h-[450px] shadow-2xl">
              {/* Texte à gauche */}
              <div className="flex-1 p-12 lg:p-16">
                <span className="text-xl font-bold text-[#1D2939] mb-4 block">{step.num}</span>
                <h3 className="text-3xl md:text-4xl font-black text-[#1D2939] mb-6 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  {step.desc}
                </p>
                <a href="#" className="text-[#1D2939] font-bold border-b-2 border-black pb-1 hover:text-[#5D5FEF] hover:border-[#5D5FEF] transition-all">
                  {step.linkText}
                </a>
              </div>

              {/* Image/Mockup à droite */}
              <div className="flex-1 bg-gray-50 h-full w-full flex items-center justify-center p-6">
                <div className="rounded-xl shadow-2xl border border-gray-200 overflow-hidden transform translate-x-10 translate-y-10 group-hover:translate-x-0 transition-transform duration-500">
                   {/* Ici on simule le dashboard avec une couleur ou une image */}
                   <div className="bg-white w-[500px] h-[350px] p-4 flex flex-col gap-4">
                      <div className="h-8 w-1/3 bg-gray-100 rounded"></div>
                      <div className="h-full w-full bg-slate-50 rounded border border-dashed border-gray-300 flex items-center justify-center text-gray-300">
                         Dashboard Preview {step.num}
                      </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;