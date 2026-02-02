import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const testimonials = [
    {
      quote: "SAFEWALL transformed our stadium's perimeter. The branding options helped offset costs while providing superior player protection.",
      club: "Woking FC",
      role: "Stadium Operations Manager",
      year: "2024",
      rating: 5,
    },
    {
      quote: "Professional installation, exceptional quality. Our players and fans feel safer, and the finish looks incredible on broadcast.",
      club: "Barnet FC",
      role: "Head Groundsman",
      year: "2023",
      rating: 5,
    },
    {
      quote: "We evaluated multiple suppliers across Europe. SAFEWALL offered the best combination of safety standards, customization, and value.",
      club: "Aldershot Town",
      role: "Club Director",
      year: "2024",
      rating: 5,
    },
    {
      quote: "The 10-year warranty gave us confidence. Three seasons in, the padding looks as good as day one despite harsh weather.",
      club: "Boreham Wood",
      role: "Facilities Manager",
      year: "2022",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-muted overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase mb-4">
            Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Trusted by Champions <span className="text-gradient">Across the UK</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card rounded-3xl p-8 md:p-12 shadow-premium relative">
                    {/* Quote Icon */}
                    <Quote className="absolute top-8 right-8 w-16 h-16 text-secondary/10" />

                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Attribution */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.club.charAt(0)}
                      </div>
                      <div>
                        <div className="font-display font-bold text-foreground">
                          {testimonial.club}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {testimonial.role} • Installed {testimonial.year}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-card shadow-premium flex items-center justify-center text-foreground hover:bg-secondary hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-card shadow-premium flex items-center justify-center text-foreground hover:bg-secondary hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-secondary w-8'
                    : 'bg-border hover:bg-secondary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
