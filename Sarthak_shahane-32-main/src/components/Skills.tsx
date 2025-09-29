import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "PostgreSQL", "MongoDB", "Redis"],
      color: "bg-gradient-primary"
    },
    {
      title: "Frontend Development", 
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Zustand", "React Query"],
      color: "bg-gradient-accent"
    },
    {
      title: "Design & Prototyping",
      skills: ["Figma", "Framer", "Adobe XD", "Sketch", "UI/UX Design", "Design Systems", "Responsive Design"],
      color: "bg-primary"
    },
    {
      title: "Mobile & Tools",
      skills: ["React Native", "Flutter", "Git", "Docker", "AWS", "Vercel", "Firebase", "Postman"],
      color: "bg-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building end-to-end digital solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:shadow-medium transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center mb-6">
                <div className={`w-3 h-3 rounded-full ${category.color} mr-3`} />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1 text-sm bg-secondary hover:bg-card-hover border border-border transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">3+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-glow">20+</div>
            <div className="text-muted-foreground">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;