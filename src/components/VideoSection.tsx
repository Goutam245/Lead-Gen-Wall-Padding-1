import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  const impactRate = useCountUp(98, 2000, isVisible);
  const durability = useCountUp(25, 1800, isVisible);
  const installTime = useCountUp(48, 1600, isVisible);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="video" ref={sectionRef} className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase mb-4">
            See It In Action
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            See SAFEWALL Protection <span className="text-gradient">in Action</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Engineered for impact absorption. Tested beyond industry standards. 
            Watch how our systems protect athletes across the UK.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Video Player */}
          <div 
            className={`lg:col-span-2 relative rounded-2xl overflow-hidden shadow-premium-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => isPlaying && setShowControls(false)}
          >
            <div className="aspect-video relative bg-primary">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster=""
                muted={isMuted}
                loop
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/video/safewall-case-study.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay */}
              <button
                onClick={togglePlay}
                className={`absolute inset-0 flex items-center justify-center bg-primary/40 transition-opacity duration-300 ${
                  isPlaying && !showControls ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center shadow-glow-lg transition-transform hover:scale-110">
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </div>
              </button>

              {/* Video Controls */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent transition-opacity duration-300 ${
                  showControls ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={togglePlay}
                      className="text-white hover:text-secondary transition-colors"
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-secondary transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                    </button>
                  </div>
                  <button
                    onClick={handleFullscreen}
                    className="text-white hover:text-secondary transition-colors"
                  >
                    <Maximize2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Panel */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="card-premium">
              <div className="text-4xl font-display font-bold text-secondary mb-2">
                {impactRate}%
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Impact Absorption Rate</h3>
              <p className="text-sm text-muted-foreground">
                Industry-leading shock absorption technology
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl font-display font-bold text-electric mb-2">
                {durability}+ Years
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Material Durability</h3>
              <p className="text-sm text-muted-foreground">
                Engineered for extreme weather conditions
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl font-display font-bold text-lime mb-2">
                {installTime} Hours
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Average Install Time</h3>
              <p className="text-sm text-muted-foreground">
                Professional fitting with minimal disruption
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
