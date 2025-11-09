import { motion } from "motion/react";
import { Sparkles, Users, Heart, Zap } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Deep Practices",
    description: "Work with tarot cards, bioenergetics and esoteric techniques for consciousness transformation"
  },
  {
    icon: Users,
    title: "Personal Sessions",
    description: "Individual and group sessions with direct contact and energetic exchange"
  },
  {
    icon: Heart,
    title: "Guidance on the Path",
    description: "Constant support and course correction throughout the entire program"
  },
  {
    icon: Zap,
    title: "Quick Results",
    description: "First changes are felt already after the first session, deep ones — within a month"
  }
];

export function WhatAwaitsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-purple-50 to-orange-50" />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-40 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
            What Awaits You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive approach to transforming all areas of life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-teal-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-orange-200 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-orange-600" />
            <h3 className="text-2xl font-semibold text-gray-900">Synergy of Approaches</h3>
            <Sparkles className="w-6 h-6 text-orange-600" />
          </div>
          <p className="text-gray-700 text-center text-lg">
            A unique combination of esotericism, parapsychology, tarot cards and bioenergetic practices 
            creates a powerful field for transformation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
