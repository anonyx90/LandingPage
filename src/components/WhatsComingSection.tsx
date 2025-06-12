"use client";

import { motion } from "framer-motion";
import { Target, MessageSquare, Eye, Zap } from "lucide-react";

export function WhatsComingSection() {
  const features = [
    {
      icon: Target,
      title: "Automated Risk Scoring",
      description: "AI-powered algorithms automatically assess and score vendor risks in real-time"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Due Diligence",
      description: "Ask questions in plain English and get instant insights from vendor documentation"
    },
    {
      icon: Eye,
      title: "AI-Powered Vendor Insights",
      description: "Uncover hidden risks and patterns across your entire vendor ecosystem"
    },
    {
      icon: Zap,
      title: "Instant Security Questionnaire Responses",
      description: "Generate comprehensive security assessments in seconds, not weeks"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-white via-[#015ce6] to-[#3198ff] bg-clip-text text-transparent mb-6">
            What's Coming
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Revolutionary AI capabilities that will transform how you manage third-party risks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group border border-white/10 hover:border-[#015ce6]/30"
            >
              {/* Orb-like glow accent */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-[#015ce6] to-[#6366f1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity glow-blue" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#015ce6]/20 to-[#6366f1]/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-[#015ce6]/30 group-hover:to-[#6366f1]/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#015ce6] group-hover:text-[#3198ff] transition-colors" />
                </div>
                
                {/* Title */}
                <h3 className="mb-3 text-white group-hover:text-[#015ce6] transition-colors">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}