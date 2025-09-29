import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, User, Search } from "lucide-react";
import { useState, useEffect } from "react";

const JordanNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Legacy", href: "#legacy" },
    { name: "Collection", href: "#collection" },
    { name: "Stories", href: "#stories" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-black">
              <span className="bg-gradient-fire bg-clip-text text-transparent">JORDAN</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="hidden sm:block text-xs text-muted-foreground font-mono tracking-wider">
              EST. 1985
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-fire transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              size="sm"
              variant="ghost"
              className="hidden sm:flex hover:bg-muted"
            >
              <Search className="h-4 w-4" />
            </Button>
            
            <Button
              size="sm"
              variant="ghost" 
              className="hidden sm:flex hover:bg-muted"
            >
              <User className="h-4 w-4" />
            </Button>

            <Button
              size="sm"
              variant="ghost"
              className="hidden sm:flex hover:bg-muted relative"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
            </Button>

            {/* Mobile menu toggle */}
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="border-t border-border pt-4 flex gap-4 px-4">
                <Button size="sm" variant="ghost" className="flex-1">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button size="sm" variant="ghost" className="flex-1">
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
                <Button size="sm" variant="ghost" className="flex-1 relative">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Cart
                  <span className="absolute top-0 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default JordanNavigation;