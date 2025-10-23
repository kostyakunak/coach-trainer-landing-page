import { motion } from "motion/react";
import { Sparkles, Zap, Heart, Eye, Infinity } from "lucide-react";

const uniqueFeatures = [
  {
    icon: Sparkles,
    title: "Синергия практик",
    description: "Уникальное сочетание эзотерики, парапсихологии, карт таро и биоэнергетики создает мощный эффект трансформации"
  },
  {
    icon: Infinity,
    title: "Единое энергетическое поле",
    description: "Все сессии проходят в едином энергетическом поле, что усиливает эффект и создает непрерывный поток трансформации"
  },
  {
    icon: Eye,
    title: "Видение корня проблем",
    description: "Работа не только с симптомами, но и с истинными причинами ситуаций на уровне энергии и кармических программ"
  },
  {
    icon: Zap,
    title: "Мгновенные результаты",
    description: "Изменения ощущаются уже в процессе первой сессии благодаря глубокой энергетической работе"
  },
  {
    icon: Heart,
    title: "Холистический подход",
    description: "Трансформация затрагивает все сферы жизни одновременно: отношения, финансы, здоровье, предназначение"
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
            Уникальность формата
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Что делает эту программу особенной и эффективной
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
                  Синергия эзотерики, парапсихологии, таро и биоэнергетики
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Это не просто набор разных методик. Это глубоко интегрированная система, 
                  где каждая практика усиливает другую, создавая мощный синергетический эффект. 
                  Работа происходит одновременно на всех уровнях: физическом, энергетическом, 
                  эмоциональном и духовном.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  {[
                    { label: "Эзотерика", emoji: "🔮" },
                    { label: "Парапсихология", emoji: "🧠" },
                    { label: "Таро", emoji: "🃏" },
                    { label: "Биоэнергетика", emoji: "⚡" }
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
