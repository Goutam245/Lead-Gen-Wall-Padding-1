import { Play, Shield, Award, Clock, CheckCircle } from 'lucide-react';
import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import stadiumImage from '@/assets/stadium-1.jpg';

const Hero = () => {
  const { ref: statsRef, isVisible } = useScrollAnimation(0.3);
  
  const installations = useCountUp(500, 2000, isVisible);
  const warranty = useCountUp(10, 1500, isVisible);
  const satisfaction = useCountUp(100, 2500, isVisible);

  const trustBadges = [
    { icon: Shield, label: 'Made in UK' },
    { icon: Award, label: '20+ Years Excellence' },
    { icon: CheckCircle, label: 'ISO Certified' },
    { icon: Clock, label: 'National League Official' },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToVideo = () => {
    document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden section-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={stadiumImage}
          alt="Stadium wall padding installation"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-electric/10 rounded-full blur-3xl animate-float-delay" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content - 60% */}
          <div className="lg:col-span-3 space-y-8">
            {/* Animated Logo Text */}
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-semibold tracking-wide uppercase mb-6">
                UK's Premier Safety Solution
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight animate-fade-in-up text-shadow-lg">
              Protecting Athletes.{' '}
              <span className="text-gradient">Elevating Performance.</span>{' '}
              Engineering Excellence.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl animate-fade-in-up-delay leading-relaxed">
              British-engineered wall padding systems trusted by National League stadiums across the UK. 
              Premium protection that champions deserve.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-2">
              <button
                onClick={scrollToContact}
                className="btn-primary animate-pulse-glow flex items-center justify-center gap-2 text-lg"
              >
                Get Your Custom Quote
              </button>
              <button
                onClick={scrollToVideo}
                className="btn-outline flex items-center justify-center gap-2 text-lg"
              >
                <Play className="w-5 h-5" />
                Watch Innovation in Action
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-6 animate-fade-in-up-delay-2">
              {trustBadges.map((badge, index) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-white/70"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <badge.icon className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Cards - 40% */}
          <div ref={statsRef} className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="space-y-4">
              <div 
                className="stat-card animate-float"
                style={{ animationDelay: '0s' }}
              >
                <div className="text-5xl font-display font-bold text-white mb-2">
                  {installations}+
                </div>
                <div className="text-white/70 font-medium">Installations Nationwide</div>
              </div>

              <div 
                className="stat-card animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="text-5xl font-display font-bold text-secondary mb-2">
                  Zero
                </div>
                <div className="text-white/70 font-medium">Injury Reports Since 2003</div>
              </div>

              <div 
                className="stat-card animate-float"
                style={{ animationDelay: '2s' }}
              >
                <div className="text-5xl font-display font-bold text-white mb-2">
                  {warranty}-Year
                </div>
                <div className="text-white/70 font-medium">Comprehensive Warranty</div>
              </div>

              <div 
                className="stat-card animate-float"
                style={{ animationDelay: '3s' }}
              >
                <div className="text-5xl font-display font-bold text-lime mb-2">
                  {satisfaction}%
                </div>
                <div className="text-white/70 font-medium">Client Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
