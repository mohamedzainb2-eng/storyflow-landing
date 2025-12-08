import React from "react";
import ScrollScene from "../../components/ScrollScene";
import HeroSection from "../../components/HeroSection";

const HeroScene: React.FC = () => {
  return (
    <ScrollScene
      id="hero"
      backgroundElement={
        <div className="h-full w-full multiverse-grid-overlay">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0,rgba(129,140,248,0.22),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(236,72,153,0.22),transparent_55%)]" />
        </div>
      }
    >
      <HeroSection />
    </ScrollScene>
  );
};

export default HeroScene;
