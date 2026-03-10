const PhotoGallery = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
        {/* Image 1 : Cabine acoustique */}
        <div className="md:col-span-1 h-full">
          <img src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&q=80" alt="Bureau" className="w-full h-full object-cover rounded-2xl" />
        </div>
        {/* Image 2 : Grande étagère industrielle (plus large) */}
        <div className="md:col-span-1 h-full">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" alt="Entrepôt" className="w-full h-full object-cover rounded-2xl" />
        </div>
        {/* Image 3 : Panneaux solaires */}
        <div className="md:col-span-1 h-full">
          <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80" alt="Solaire" className="w-full h-full object-cover rounded-2xl" />
        </div>
        {/* Image 4 : Vaisselle/Restauration */}
        <div className="md:col-span-1 h-full">
          <img src="https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80" alt="Restauration" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;