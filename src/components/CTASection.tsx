import { motion } from "motion/react";
import { Button } from "./ui/button";
import { CheckCircle2, Send } from "lucide-react";

const results = [
  "Increase your energy level and vitality",
  "Find your true purpose",
  "Improve relationships with loved ones",
  "Increase income and attract abundance",
  "Get rid of fears and limitations",
  "Develop intuition and energetic abilities"
];

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-teal-600 to-orange-600" />
      
      {/* Animated Orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            As a result you will:
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <CheckCircle2 className="w-6 h-6 text-orange-300 flex-shrink-0 mt-1" />
              <p className="text-white text-lg">{result}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We Start Working Immediately After Payment
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            No waiting and long preparations. 
            Tomorrow you can start your transformation!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-10 py-7 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <span>Choose Myself</span>
              <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-10 py-7 text-xl rounded-full"
            >
              Start Transformation
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            By clicking the button you will be redirected to Telegram to contact Natalia
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: "🔒", text: "Secure payment" },
            { icon: "💯", text: "Money-back guarantee" },
            { icon: "⚡", text: "Quick start" }
          ].map((badge, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20"
            >
              <span className="text-3xl">{badge.icon}</span>
              <span className="text-white font-medium">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
