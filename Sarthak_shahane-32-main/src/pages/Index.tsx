
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import JordanNavigation from "@/components/JordanNavigation";
import JordanHero from "@/components/JordanHero";
import JordanLegacy from "@/components/JordanLegacy";
import JordanCollection from "@/components/JordanCollection";
import JordanStories from "@/components/JordanStories";
import Contact from "@/components/Contact";

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        }
      );
    }
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-background">
      <JordanNavigation />
      <JordanHero />
      <JordanLegacy />
      <JordanCollection />
      <JordanStories />
      <Contact />
    </div>
  );
};

export default Index;
