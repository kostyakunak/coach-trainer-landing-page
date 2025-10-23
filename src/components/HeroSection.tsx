import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Sparkles, Heart, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-teal-50 to-orange-50" />
      
      {/* Animated Orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-purple-200"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-900">Синергия эзотерики и парапсихологии</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-teal-600 to-orange-600 bg-clip-text text-transparent"
          >
            Личное сопровождение
            <br />
            Наталии Сорокиной
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Трансформация всех сфер жизни через глубокую работу с энергией, 
            картами таро и биоэнергетическими практиками
          </motion.p>

          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto"
          >
            {[
              { icon: Heart, text: "Чувствуете, что застряли и не можете двигаться дальше" },
              { icon: Sparkles, text: "Хотите раскрыть свой потенциал и найти свое предназначение" },
              { icon: TrendingUp, text: "Готовы к глубоким изменениям во всех сферах жизни" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-lg"
              >
                <item.icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Начать трансформацию
            </Button>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="relative aspect-video bg-gradient-to-br from-purple-200 via-teal-200 to-orange-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-purple-600 border-b-8 border-b-transparent ml-1" />
                  </div>
                  <p className="text-gray-700">Видео-презентация программы</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
