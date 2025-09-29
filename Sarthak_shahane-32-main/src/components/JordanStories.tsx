import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, Users, ExternalLink } from "lucide-react";

const JordanStories = () => {
  const stories = [
    {
      id: 1,
      title: "Chicago 1s Lost & Found",
      subtitle: "2022 Release of the Year",
      description: "The vintage-inspired packaging and aged details made these the most hyped Jordan 1 release in years.",
      duration: "3:24",
      views: "12M",
      category: "Release Stories",
      thumbnail: "📦",
      featured: true
    },
    {
      id: 2,
      title: "Resell Market Explained",
      subtitle: "StockX vs GOAT Battle",
      description: "How Jordan releases drive the billion-dollar sneaker resale market and create instant millionaires.",
      duration: "8:45",
      views: "5.2M",
      category: "Market Analysis",
      thumbnail: "💰",
      featured: true
    },
    {
      id: 3,
      title: "Sneaker Bot Wars",
      subtitle: "The Race for Limited Drops", 
      description: "Inside the world of automated purchasing and how technology changed sneaker collecting forever.",
      duration: "12:15",
      views: "3.8M",
      category: "Tech Culture",
      thumbnail: "🤖",
      featured: false
    },
    {
      id: 4,
      title: "Air Jordan 11 Legacy",
      subtitle: "Patent Leather Revolution",
      description: "How the Jordan 11 became the most retro'd sneaker of all time and influenced modern basketball design.",
      duration: "6:33",
      views: "4.1M",
      category: "Design History",
      thumbnail: "✨",
      featured: false
    },
    {
      id: 5,
      title: "Sneaker Customization",
      subtitle: "Art Meets Athletics",
      description: "Custom Jordan artists transform classic silhouettes into one-of-a-kind masterpieces worth thousands.",
      duration: "15:22",
      views: "2.7M",
      category: "Art & Culture",
      thumbnail: "🎨",
      featured: true
    },
    {
      id: 6,
      title: "Factory Tours",
      subtitle: "Behind the Scenes",
      description: "Exclusive access to Jordan manufacturing facilities and the craftsmanship behind each pair.",
      duration: "18:45",
      views: "6.9M",
      category: "Manufacturing",
      thumbnail: "🏭",
      featured: false
    }
  ];

  const featuredStories = stories.filter(story => story.featured);
  const regularStories = stories.filter(story => !story.featured);

  return (
    <section id="stories" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            SNEAKER <span className="bg-gradient-champion bg-clip-text text-transparent">CULTURE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From iconic releases to resell markets, explore the stories behind 
            the world's most coveted sneakers and their cultural impact.
          </p>
        </div>

        {/* Featured Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="w-1 h-6 bg-gradient-fire rounded-full" />
            Featured Stories
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <Card 
                key={story.id}
                className={`group relative overflow-hidden border-border hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-fire bg-card/50 backdrop-blur-sm ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <CardContent className="p-0 relative">
                  {/* Video thumbnail */}
                  <div className={`relative bg-gradient-subtle flex items-center justify-center group-hover:bg-gradient-fire/10 transition-all duration-500 ${
                    index === 0 ? 'h-80' : 'h-48'
                  }`}>
                    <div className={`group-hover:scale-110 transition-transform duration-500 ${
                      index === 0 ? 'text-9xl' : 'text-6xl'
                    }`}>
                      {story.thumbnail}
                    </div>
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <Play className="h-6 w-6 text-white ml-1" />
                      </div>
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs font-semibold text-primary border border-primary/30">
                        {story.category}
                      </span>
                    </div>
                    
                    {/* Duration */}
                    <div className="absolute bottom-4 right-4">
                      <span className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs text-white font-mono">
                        {story.duration}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className={`font-black mb-2 ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                      {story.title}
                    </h4>
                    <p className="text-primary text-sm font-semibold mb-3">
                      {story.subtitle}
                    </p>
                    <p className={`text-muted-foreground mb-4 leading-relaxed ${
                      index === 0 ? 'text-base' : 'text-sm'
                    }`}>
                      {story.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {story.views} views
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {story.duration}
                        </div>
                      </div>
                      
                      <Button 
                        size="sm"
                        className="bg-gradient-fire hover:shadow-fire transition-all duration-300"
                      >
                        <Play className="h-3 w-3 mr-1" />
                        Watch
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regular Stories Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="w-1 h-6 bg-gradient-champion rounded-full" />
            Culture Deep Dives
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularStories.map((story) => (
              <Card 
                key={story.id}
                className="group relative overflow-hidden border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <div className="relative h-40 bg-gradient-subtle flex items-center justify-center group-hover:bg-gradient-fire/10 transition-all duration-500">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-500">
                      {story.thumbnail}
                    </div>
                    
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <Play className="h-4 w-4 text-white ml-0.5" />
                      </div>
                    </div>
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-primary/20 backdrop-blur-sm rounded text-xs font-semibold text-primary border border-primary/30">
                        {story.category}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs text-white font-mono">
                        {story.duration}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="font-bold mb-1">{story.title}</h4>
                    <p className="text-primary text-xs font-semibold mb-2">{story.subtitle}</p>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-2">
                      {story.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        {story.views} views
                      </div>
                      <Button size="sm" variant="ghost" className="h-8 px-3">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block border-primary/30 bg-gradient-fire">
            <CardContent className="p-8 text-center relative">
              <div className="absolute inset-0 bg-black/20 rounded-lg" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">📺</div>
                <h3 className="text-2xl font-black text-white mb-4">Sneaker Shopping</h3>
                <p className="text-white/90 mb-6 max-w-md mx-auto">
                  Watch celebrities and athletes react to rare Jordans while shopping at premium sneaker boutiques.
                </p>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Series
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JordanStories;