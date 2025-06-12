"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlowingOrb } from "./GlowingOrb";
import { AtmosphericBackground } from "./AtmosphericBackground";
import { MountainSilhouetteBackground } from "./MountainSilhouetteBackground";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function HeroSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a] overflow-hidden">
      {/* Atmospheric background with enhanced starfield */}
      <AtmosphericBackground />
      
      {/* Mountain silhouette background */}
      <MountainSilhouetteBackground />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-16"
        >
          <GlowingOrb />
        </motion.div>
        
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Tagline - Smaller size */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            The Future of TPRM is Almost Here
          </h1>
          
          {/* Subheading - Lighter weight and smaller size */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            SecurityPal.AI is evolving. Smarter. Faster. AI-Native.
          </p>
          
          {/* Email form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Input
              type="email"
              placeholder="your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/5 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm focus:border-[#015ce6] focus:ring-[#015ce6]/50 glow-blue font-normal"
              style={{ fontFamily: 'Inter, sans-serif' }}
              required
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#015ce6] to-[#3198ff] hover:from-[#0070f3] hover:to-[#015ce6] text-white border-0 glow-blue-strong transition-all duration-300 font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Join the Waitlist →
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}