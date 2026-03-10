const TrustBar = () => {
  return (
    <div className="w-full py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-10">
        <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-8">
          Ils nous font confiance
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
          {/* Remplace par des noms de boîtes réelles ou des placeholders propres */}
          <span className="text-2xl font-bold text-slate-400">EDF</span>
          <span className="text-2xl font-bold text-slate-400">VOLTALIB</span>
          <span className="text-2xl font-bold text-slate-400">HOSTNLIB</span>
          <span className="text-2xl font-bold text-slate-400">SUBLIZ</span>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;