import React, { useRef, useEffect } from "react";
import AIRJORDAN1HIGHG from "../assets/AIRJORDAN1HIGHG-removebg-preview.png";
import gsap from "gsap";
const JordanShowcase: React.FC = () => {
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (splashRef.current) {
      gsap.fromTo(
        splashRef.current,
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(splashRef.current, {
              opacity: 0,
              duration: 0.8,
              delay: 0.7,
              ease: "power2.inOut"
            });
          }
        }
      );
    }
  }, []);

  return (
    <div ref={splashRef} className="relative flex items-center justify-center h-screen bg-black">
      {/* Background text */}
      <h1 className="absolute text-[12rem] md:text-[20rem] font-extrabold text-gray-900/50 tracking-widest select-none">
        JORDAN
      </h1>

      {/* Shoe Image */}
      <div className="relative z-10">
        <img
          src={AIRJORDAN1HIGHG}
          alt="Air Jordan"
          className="w-[400px] md:w-[600px] drop-shadow-[0_25px_50px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};


export default JordanShowcase;
