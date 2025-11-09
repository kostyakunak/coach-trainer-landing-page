import { motion } from "motion/react";
import { Video, MessageCircle, Calendar, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Personal Contact",
    description: "All sessions are conducted in a personal communication format — online or offline. A deep energetic connection is created for maximum effect.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "You choose the convenient time for sessions yourself. The program adapts to your life rhythm and personal circumstances.",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Video,
    title: "Session Recordings",
    description: "All sessions are recorded so you can review key moments and return to practices at any time.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Sparkles,
    title: "Constant Support",
    description: "Between sessions you receive support in a closed chat, additional materials and practices for independent work.",
    color: "from-purple-500 to-teal-500"
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-purple-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
            How Our Work Goes
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            The work format is designed for maximum comfort and results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-3xl border border-purple-200 hover:border-purple-400 transition-all duration-300 h-full hover:shadow-2xl">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-3xl border border-purple-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              💎 Individual Approach
            </h3>
            <p className="text-gray-700">
              The program adapts to your unique tasks and characteristics. 
              No templates — only work with your specific situation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-100 to-teal-50 p-8 rounded-3xl border border-teal-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🎯 Result Guarantee
            </h3>
            <p className="text-gray-700">
              If after the first session you don't feel changes — 
              we'll refund your money without questions. Your trust is our main value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
