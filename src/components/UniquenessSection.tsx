import { motion } from "motion/react";
import { Sparkles, Zap, Heart, Eye, Infinity } from "lucide-react";

const uniqueFeatures = [
  {
    icon: Sparkles,
    title: "Synergy of Practices",
    description: "A unique combination of esotericism, parapsychology, tarot cards and bioenergetics creates a powerful transformation effect"
  },
  {
    icon: Infinity,
    title: "Unified Energy Field",
    description: "All sessions take place in a unified energy field, which enhances the effect and creates a continuous flow of transformation"
  },
  {
    icon: Eye,
    title: "Seeing the Root of Problems",
    description: "Work not only with symptoms, but also with the true causes of situations at the level of energy and karmic programs"
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Changes are felt already during the first session thanks to deep energetic work"
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    description: "Transformation affects all areas of life simultaneously: relationships, finances, health, purpose"
  }
];

export function UniquenessSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-teal-600 to-orange-600 bg-clip-text text-transparent">
            Format Uniqueness
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            What makes this program special and effective
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {uniqueFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-purple-50 to-teal-50 p-8 rounded-3xl border border-purple-200 hover:border-purple-400 transition-all duration-300 h-full hover:shadow-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-teal-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden"
        >
          <div className="bg-gradient-to-r from-purple-600 via-teal-600 to-orange-600 p-[2px] rounded-3xl">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <div className="text-center max-w-4xl mx-auto">
                <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Synergy of Esotericism, Parapsychology, Tarot and Bioenergetics
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This is not just a set of different methodologies. This is a deeply integrated system, 
                  where each practice enhances the other, creating a powerful synergistic effect. 
                  Work happens simultaneously on all levels: physical, energetic, 
                  emotional and spiritual.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  {[
                    { label: "Esotericism", emoji: "🔮" },
                    { label: "Parapsychology", emoji: "🧠" },
                    { label: "Tarot", emoji: "🃏" },
                    { label: "Bioenergetics", emoji: "⚡" }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-purple-100 to-teal-100 p-4 rounded-2xl"
                    >
                      <p className="text-3xl mb-2">{item.emoji}</p>
                      <p className="text-sm text-gray-700 font-medium">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
