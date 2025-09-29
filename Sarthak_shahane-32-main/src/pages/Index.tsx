import JordanNavigation from "@/components/JordanNavigation";
import JordanHero from "@/components/JordanHero";
import JordanLegacy from "@/components/JordanLegacy";
import JordanCollection from "@/components/JordanCollection";
import JordanStories from "@/components/JordanStories";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
