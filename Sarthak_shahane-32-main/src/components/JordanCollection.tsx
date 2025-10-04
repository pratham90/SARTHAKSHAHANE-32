
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Star, Calendar } from "lucide-react";
import { useState } from "react";
import AIRJORDAN1HIGHG from "../assets/AIRJORDAN1HIGHG-removebg-preview.png";
import AIRJORDAN1HIGHG_1 from "../assets/AIRJORDAN1HIGHG__1_-removebg-preview.png";
import AIRJORDAN1HIGHG_2 from "../assets/AIRJORDAN1HIGHG__2_-removebg-preview.png";
import WMNSAIRJORDAN1MID_1 from "../assets/WMNSAIRJORDAN1MID__1_-removebg-preview.png";
import WMNSAIRJORDAN1MID_2 from "../assets/WMNSAIRJORDAN1MID__2_-removebg-preview.png";
import WMNSAIRJORDAN1MID_3 from "../assets/WMNSAIRJORDAN1MID__3_-removebg-preview.png";


const JordanCollection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Jordans" },
    { id: "retro", name: "Retro" },
    { id: "classic", name: "Classic" },
    { id: "limited", name: "Limited Edition" }
  ];

  const sneakers = [
    {
      id: 1,
      name: "Air Jordan 1 Retro High OG",
      subtitle: "Chicago",
      year: "1985",
      category: "retro",
      price: "$170",
      rating: 4.9,
  image: AIRJORDAN1HIGHG,
      description: "The one that started it all. Banned by the NBA, loved by the world.",
      featured: true,
      sizes: "7-18",
      colorways: "Chicago, Bred, Royal"
    },
    {
      id: 2,
      name: "Air Jordan 11 Retro",
      subtitle: "Bred",
      year: "1995",
      category: "classic",
      price: "$220",
      rating: 5.0,
  image: AIRJORDAN1HIGHG_1,
      description: "Patent leather perfection. Championship legacy.",
      featured: true,
      sizes: "7-18",
      colorways: "Bred, Concord, Space Jam"
    },
    {
      id: 3,
      name: "Air Jordan 4 Retro",
      subtitle: "White Cement",
      year: "1989",
      category: "retro",
      price: "$200",
      rating: 4.8,
  image: AIRJORDAN1HIGHG_2,
      description: "Flight meets style. Tinker Hatfield's masterpiece.",
      featured: false
    },
    {
      id: 4,
      name: "Air Jordan 3 Retro",
      subtitle: "Black Cement",
      year: "1988",
      category: "classic",
      price: "$190",
      rating: 4.9,
  image: WMNSAIRJORDAN1MID_1,
      description: "The Jumpman debut. Elephant print iconic.",
      featured: false
    },
    {
      id: 5,
      name: "Air Jordan 12 Retro",
      subtitle: "Flu Game",
      year: "1997",
      category: "limited",
      price: "$190",
      rating: 4.7,
  image: WMNSAIRJORDAN1MID_2,
      description: "The game that became legend. Sick performance.",
      featured: true
    },
    {
      id: 6,
      name: "Air Jordan 6 Retro",
      subtitle: "Infrared",
      year: "1991",
      category: "retro",
      price: "$190",
      rating: 4.8,
  image: WMNSAIRJORDAN1MID_3,
      description: "First championship shoe. Ring ceremony ready.",
      featured: false
    }
  ];

  const filteredSneakers = activeCategory === "all" 
    ? sneakers 
    : sneakers.filter(sneaker => sneaker.category === activeCategory);

  return (
    <section id="collection" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            THE <span className="bg-gradient-champion bg-clip-text text-transparent">COLLECTION</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Every shoe tells a story. Every story builds a legend. 
            From the hardwood to the streets, these are the icons.
          </p>

          {/* Category Filter */}
          <div className="inline-flex bg-card/50 backdrop-blur-sm border border-border rounded-full p-2 gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-6 transition-all duration-300 ${
                  activeCategory === category.id 
                    ? "bg-gradient-fire hover:shadow-fire text-white" 
                    : "hover:bg-muted hover:text-foreground"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Banner */}
        <div className="mb-16">
          <Card className="relative overflow-hidden border-primary/30 bg-gradient-fire">
            <CardContent className="p-12 text-center relative z-10">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10">
                <div className="text-6xl mb-4">👑</div>
                <h3 className="text-3xl font-black text-white mb-4">GREATEST OF ALL TIME</h3>
                <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                  Six championships. Endless style. The shoes that defined a generation and continue to inspire the next.
                </p>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  Shop GOAT Collection
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sneakers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSneakers.map((sneaker, index) => (
            <Card 
              key={sneaker.id}
              className={`group relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-fire bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 ${
                sneaker.featured ? 'ring-1 ring-primary/20' : ''
              }`}
            >
              <CardContent className="p-0">
                {/* Featured badge */}
                {sneaker.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-fire rounded-full text-xs font-bold text-white">
                      <Star className="h-3 w-3 fill-current" />
                      FEATURED
                    </div>
                  </div>
                )}

                {/* Shoe Image Area */}
                <div className="relative h-64 bg-gradient-subtle flex items-center justify-center group-hover:bg-gradient-fire/10 transition-all duration-500">
                  <img
                    src={sneaker.image}
                    alt={sneaker.name}
                    className="max-h-56 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-fire opacity-0 group-hover:opacity-10 transition-all duration-500" />
              
              {/* Quick Shop overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-sm font-semibold mb-2">Quick Shop</div>
                  <div className="flex gap-2 justify-center mb-3">
                    {['8', '9', '10', '11', '12'].map(size => (
                      <button key={size} className="w-8 h-8 bg-white/20 rounded border border-white/30 text-xs hover:bg-white/40 transition-colors">
                        {size}
                      </button>
                    ))}
                  </div>
                  <Button size="sm" className="bg-white text-black hover:bg-white/90">
                    Add to Cart
                  </Button>
                </div>
              </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-primary font-mono mb-1">
                        <Calendar className="h-3 w-3" />
                        {sneaker.year}
                      </div>
                      <h3 className="font-bold text-lg leading-tight mb-1">{sneaker.name}</h3>
                      <p className="text-muted-foreground">{sneaker.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-primary">{sneaker.price}</div>
                      <div className="flex items-center gap-1 text-xs">
                        <Star className="h-3 w-3 fill-accent text-accent" />
                        <span className="text-muted-foreground">{sneaker.rating}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {sneaker.description}
                  </p>

                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-fire hover:shadow-fire transition-all duration-300"
                    >
                      Shop Now
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-12"
          >
            Load More Jordans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JordanCollection;