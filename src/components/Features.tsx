import { Shield, CloudRain, Palette, Clock, Wrench, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Features = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const features = [
    {
      icon: Shield,
      title: 'Supreme Safety Standards',
      description: 'Impact-tested padding exceeding British safety regulations with advanced foam technology.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: CloudRain,
      title: 'Weather-Resistant Technology',
      description: 'UV-stabilized, waterproof materials engineered for year-round durability in any climate.',
      color: 'text-electric',
      bgColor: 'bg-electric/10',
    },
    {
      icon: Palette,
      title: 'Custom Branding Options',
      description: 'Full-color printing capabilities for sponsors and club identity with fade-resistant inks.',
      color: 'text-lime',
      bgColor: 'bg-lime/10',
    },
    {
      icon: Clock,
      title: 'Rapid Installation',
      description: 'Professional fitting completed in as little as 48 hours with minimal ground disruption.',
      color: 'text-electric',
      bgColor: 'bg-electric/10',
    },
    {
      icon: Wrench,
      title: 'Maintenance-Free Design',
      description: 'Easy-clean surfaces requiring zero upkeep, saving you time and operational costs.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Award,
      title: '10-Year Guarantee',
      description: 'Comprehensive warranty backed by British engineering excellence and premium materials.',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
    },
  ];

  return (
    <section id="features" ref={ref} className="py-24 section-dark overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_hsla(155,100%,41%,0.3)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_hsla(220,100%,50%,0.3)_0%,_transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-semibold tracking-wide uppercase mb-4">
            Why Choose SAFEWALL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Built for Performance. <span className="text-gradient">Designed for Safety.</span>
          </h2>
          <p className="text-lg text-white/70">
            Every SAFEWALL system combines cutting-edge materials with precision engineering
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:bg-white/10 hover:border-secondary/30 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
