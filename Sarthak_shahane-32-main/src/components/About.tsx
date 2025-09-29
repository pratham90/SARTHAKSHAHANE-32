import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Expertise",
      description: "Java backends, REST APIs, and modern frontend frameworks"
    },
    {
      icon: Palette,
      title: "Design-Driven",
      description: "Prototyping with Framer, Figma, and React for seamless UX"
    },
    {
      icon: Rocket,
      title: "Performance First",
      description: "Optimized solutions that scale from prototype to production"
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "Pragmatic approach with accessibility and usability in mind"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about bridging the gap between elegant design and robust functionality
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a full-stack developer who believes in <span className="text-primary font-semibold">pragmatic solutions</span> and 
              <span className="text-accent font-semibold"> user-centric design</span>. My journey spans from crafting scalable Java 
              backend systems to creating intuitive frontend experiences.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              Whether I'm architecting REST APIs, prototyping in Figma, or experimenting with mobile apps, 
              I focus on delivering solutions that not only work beautifully but also provide meaningful value to users.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing insights about development best practices.
            </p>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-subtle rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Code className="h-16 w-16 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground">Developer Profile Image</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medium transition-all duration-300 hover:scale-105 border-border bg-card hover:bg-card-hover"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-glow-pulse">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;