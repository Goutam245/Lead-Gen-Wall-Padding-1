import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import stadium1 from '@/assets/stadium-1.jpg';
import stadium2 from '@/assets/stadium-2.png';
import detail1 from '@/assets/detail-1.png';
import detail2 from '@/assets/detail-2.png';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref, isVisible } = useScrollAnimation(0.1);

  const images = [
    { src: stadium1, alt: 'Stadium wall padding with sponsor branding', category: 'stadium', title: 'National League Stadium Installation' },
    { src: stadium2, alt: 'Multiple sponsor panels on stadium wall', category: 'stadium', title: 'Multi-Panel Branding Solution' },
    { src: detail1, alt: 'Close-up of padding corner detail', category: 'detail', title: 'Precision Corner Engineering' },
    { src: detail2, alt: 'Ground level installation detail', category: 'installation', title: 'Seamless Ground Integration' },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'stadium', label: 'Stadium Views' },
    { id: 'detail', label: 'Close-ups' },
    { id: 'installation', label: 'Installation' },
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };
  
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Precision Engineering Meets <span className="text-gradient">Premium Design</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our installations across National League stadiums
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-secondary text-white shadow-glow'
                  : 'bg-muted text-muted-foreground hover:bg-secondary/10 hover:text-secondary'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="gallery-image group aspect-[16/10] rounded-2xl overflow-hidden shadow-premium cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div className="w-full">
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <ZoomIn className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wide">View Details</span>
                  </div>
                  <h3 className="text-white font-display font-bold text-xl">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-5xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white font-display font-bold text-xl">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-white/60 mt-2">
                {selectedImage + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
