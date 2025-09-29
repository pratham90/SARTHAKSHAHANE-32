import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const JordanHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroContent = [
    {
      title: "AIR JORDAN",
      subtitle: "LEGACY",
      description: "The most iconic basketball shoes ever created.",
      year: "1985-2024"
    },
    {
      title: "RETRO",
      subtitle: "COLLECTION",
      description: "Classic designs. Modern comfort. Timeless style.",
      year: "NEW DROPS"
    },
    {
      title: "LIMITED",
      subtitle: "EDITION",
      description: "Exclusive releases for true sneaker enthusiasts.",
      year: "RARE FINDS"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToExplore = () => {
    document.getElementById('legacy')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-fire rounded-full opacity-20 animate-float blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-champion rounded-full opacity-15 animate-float blur-2xl" style={{ animationDelay: '2s' }} />
        
        {/* Floating Jordan elements */}
        <div className="absolute top-20 right-20 text-6xl font-black text-primary/10 rotate-12 animate-float">23</div>
        <div className="absolute bottom-32 left-16 text-4xl font-black text-accent/10 -rotate-12 animate-float" style={{ animationDelay: '1s' }}>🏀</div>
        <div className="absolute top-1/2 left-10 text-3xl font-black text-primary/10 rotate-45 animate-float" style={{ animationDelay: '3s' }}>👑</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in-up">
          {/* Year indicator */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-card/50 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-3" />
            <span className="text-primary font-mono text-sm tracking-wider">
              {heroContent[currentSlide].year}
            </span>
          </div>

          {/* Main title - animated */}
          <div className="relative overflow-hidden mb-4">
            <h1 className="text-7xl md:text-9xl font-black leading-none">
              <span className="block text-foreground tracking-tight">
                {heroContent[currentSlide].title}
              </span>
              <span className="block bg-gradient-fire bg-clip-text text-transparent animate-glow-pulse">
                {heroContent[currentSlide].subtitle}
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {heroContent[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 justify-center mb-16">
            <Button 
              size="lg"
              className="bg-gradient-fire hover:shadow-fire transition-all duration-500 hover:scale-105 px-8 py-4 text-lg font-semibold"
            >
              <Play className="mr-3 h-5 w-5" />
              Shop Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToExplore}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 px-8 py-4 text-lg"
            >
              Explore Collection
            </Button>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-3 justify-center mb-8">
            {heroContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary animate-glow-pulse" />
      </div>

      {/* Jordan Jumpman silhouette */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5">
        <div className="w-full h-full bg-gradient-fire rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default JordanHero;