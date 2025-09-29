import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Target, Crown, Flame } from "lucide-react";

const JordanLegacy = () => {
  const achievements = [
    {
      icon: Trophy,
      number: "39",
      title: "Jordan Models",
      description: "Iconic silhouettes that changed sneaker culture",
      years: "1985 - Present"
    },
    {
      icon: Crown,
      number: "$5B",
      title: "Brand Revenue",
      description: "Annual sneaker sales worldwide",
      years: "2023 Revenue"
    },
    {
      icon: Target,
      number: "1M+",
      title: "Pairs Sold",
      description: "Monthly global sneaker sales",
      years: "Consistent Demand"
    },
    {
      icon: Flame,
      number: "#1",
      title: "Basketball Brand",
      description: "Most coveted sneakers in the world",
      years: "Since 1985"
    }
  ];

  const moments = [
    {
      year: "1985",
      title: "Air Jordan 1",
      description: "The revolutionary high-top that started it all",
      highlight: "Banned by NBA, loved by fans"
    },
    {
      year: "1988",
      title: "Air Jordan 3",
      description: "First Jordan with Jumpman logo",
      highlight: "Tinker Hatfield design debut"
    },
    {
      year: "1995",
      title: "Air Jordan 11",
      description: "Patent leather meets basketball",
      highlight: "Most coveted retro release"
    },
    {
      year: "2001",
      title: "Retro Program",
      description: "Classic Jordans return to market",
      highlight: "Sneakerhead culture explodes"
    },
    {
      year: "2015",
      title: "Remastered Quality",
      description: "Premium materials and craftsmanship",
      highlight: "OG specifications return"
    },
    {
      year: "2024",
      title: "Lost & Found",
      description: "Chicago 1s with vintage storytelling",
      highlight: "Most hyped release of the year"
    }
  ];

  return (
    <section id="legacy" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            SNEAKER <span className="bg-gradient-fire bg-clip-text text-transparent">EVOLUTION</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From the hardwood to the streets. Every Jordan tells a story of innovation, 
            style, and cultural impact that goes beyond basketball.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-border hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-fire bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center relative z-10">
                <div className="absolute inset-0 bg-gradient-fire opacity-0 group-hover:opacity-5 transition-all duration-500" />
                
                <div className="mb-6">
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <div className="text-6xl font-black text-primary mb-2 group-hover:animate-glow-pulse">
                  {achievement.number}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground mb-4">{achievement.description}</p>
                
                <div className="text-xs text-primary font-mono tracking-wider">
                  {achievement.years}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-3xl font-black text-center mb-16">
            SNEAKER <span className="text-primary">MILESTONES</span>
          </h3>
          
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-fire" />
          
          <div className="space-y-12">
            {moments.map((moment, index) => (
              <div 
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <Card className="inline-block max-w-md border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="text-2xl font-black text-primary mb-2">{moment.year}</div>
                      <h4 className="text-lg font-bold mb-2">{moment.title}</h4>
                      <p className="text-muted-foreground mb-3">{moment.description}</p>
                      <div className="text-sm text-accent font-semibold">{moment.highlight}</div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-background animate-glow-pulse" />
                </div>
                
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JordanLegacy;