"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function FinalCtaSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-r from-[#0a0a0a] via-[#111111] to-[#0a0a0a] overflow-hidden">
      {/* Orb watermark background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#015ce6] via-[#3198ff] to-[#6366f1] blur-3xl" />
      </div>
      
      {/* Additional glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#015ce6]/5 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-white via-[#015ce6] to-[#3198ff] bg-clip-text text-transparent">
            SecurityPal's AI revolution is almost here.
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300">
            Join the innovators.
          </p>

          {/* Email form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Input
              type="email"
              placeholder="your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/5 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm focus:border-[#015ce6] focus:ring-[#015ce6]/50 glow-blue h-12"
              required
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#015ce6] to-[#3198ff] hover:from-[#0070f3] hover:to-[#015ce6] text-white border-0 glow-blue-strong transition-all duration-300 h-12 px-8"
            >
              Join the Waitlist →
            </Button>
          </motion.form>

          {/* Trust indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 mt-8"
          >
            Trusted by 100+ Enterprise Security Teams
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}