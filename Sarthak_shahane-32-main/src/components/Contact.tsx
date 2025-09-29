import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Github, Linkedin, Calendar, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      action: "sarthak@example.com",
      href: "mailto:sarthak@example.com",
      primary: true
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect professionally", 
      action: "Connect with me",
      href: "https://linkedin.com/in/sarthak",
      primary: false
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code",
      action: "Follow on GitHub",
      href: "https://github.com/sarthak",
      primary: false
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Let's discuss your project",
      action: "Book a meeting",
      href: "https://calendly.com/sarthak",
      primary: true
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hello, 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-medium transition-all duration-300 hover:scale-105 border-border bg-card hover:bg-card-hover cursor-pointer ${
                method.primary ? 'ring-1 ring-primary/20' : ''
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-glow-pulse ${
                  method.primary ? 'bg-gradient-primary' : 'bg-secondary'
                }`}>
                  <method.icon className={`h-6 w-6 ${
                    method.primary ? 'text-primary-foreground' : 'text-muted-foreground'
                  }`} />
                </div>
                <h3 className="font-semibold mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                <Button 
                  variant={method.primary ? "default" : "outline"}
                  size="sm"
                  asChild
                  className={method.primary ? "bg-gradient-primary hover:shadow-glow" : "hover:bg-primary hover:text-primary-foreground"}
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for new opportunities</span>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Ready to bring your ideas to life?</h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              From initial concept to final deployment, I'm here to help you create 
              exceptional digital experiences.
            </p>
            <Button 
              size="lg"
              asChild
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <a href="mailto:sarthak@example.com">
                <MessageCircle className="mr-2 h-4 w-4" />
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <MapPin className="h-4 w-4" />
            <span>Based in India • Available worldwide</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 Sarthak. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;