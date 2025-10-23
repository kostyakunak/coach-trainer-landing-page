import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const painPoints = [
  "Чувствуете, что живете не своей жизнью и хотите найти свой путь",
  "Сталкиваетесь с повторяющимися проблемами в отношениях и финансах",
  "Хотите развить свою интуицию и энергетические способности",
  "Ищете глубокие и устойчивые изменения, а не временные решения",
  "Готовы работать над собой и открыты к трансформации",
  "Чувствуете внутренний потенциал, но не знаете, как его раскрыть"
];

export function ForYouSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            Это для тебя, если:
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 group"
            >
              <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-gray-700">{point}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-purple-100 via-teal-100 to-orange-100 p-8 rounded-3xl max-w-3xl mx-auto">
            <p className="text-xl text-gray-800 italic">
              "Если хотя бы один пункт откликается — эта программа для тебя"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
