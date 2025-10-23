import { motion } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    id: 1,
    name: "Елена М.",
    result: "Нашла свое предназначение и удвоила доход за 2 месяца",
    text: "После работы с Наталией моя жизнь кардинально изменилась. Я наконец-то поняла, чем хочу заниматься, и уже через месяц открыла свое дело. Сейчас зарабатываю в 2 раза больше, чем на прежней работе, и получаю огромное удовольствие!",
    duration: "Программа VIP"
  },
  {
    id: 2,
    name: "Дмитрий К.",
    result: "Восстановил отношения с семьей и избавился от страхов",
    text: "Я пришел в программу с разрушенными отношениями и глубокими страхами. Наталия помогла мне увидеть корень проблем, идущий из детства. Сейчас я восстановил отношения с родителями и женой, чувствую уверенность и спокойствие.",
    duration: "Программа Platinum"
  },
  {
    id: 3,
    name: "Анна В.",
    result: "Развила интуицию и научилась управлять энергией",
    text: "Практики Наталии открыли во мне невероятные способности. Я стала чувствовать энергии, научилась работать с картами таро и теперь помогаю другим людям. Это полностью изменило мое восприятие мира!",
    duration: "Программа Light"
  },
  {
    id: 4,
    name: "Сергей Л.",
    result: "Избавился от хронической усталости и нашел смысл жизни",
    text: "До программы я чувствовал себя выжатым лимоном, ничего не радовало. Наталия нашла и устранила энергетические блоки, научила восстанавливаться. Сейчас полон сил, энергии и знаю, для чего живу.",
    duration: "Программа VIP"
  },
  {
    id: 5,
    name: "Мария П.",
    result: "Привлекла любовь мечты и вышла замуж",
    text: "Я долгие годы не могла встретить подходящего партнера. После работы с Наталией освободилась от страхов и блоков на отношения. Через 3 месяца встретила любовь всей жизни, сейчас мы женаты и счастливы!",
    duration: "Программа Platinum"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-teal-50" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
            Что говорят участники
          </h2>
          <p className="text-gray-600 text-lg">
            Реальные истории трансформации людей
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-100 relative overflow-hidden"
          >
            {/* Quote decoration */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-purple-200" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].duration}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-purple-100 p-4 rounded-xl mb-6">
                <p className="text-lg font-semibold text-gray-900">
                  ✨ {testimonials[currentIndex].result}
                </p>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                {testimonials[currentIndex].text}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-purple-300 hover:bg-purple-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-purple-600"
                      : "bg-purple-300 hover:bg-purple-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-purple-300 hover:bg-purple-100"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { number: "250+", label: "Довольных участников" },
            { number: "95%", label: "Достигли своих целей" },
            { number: "100%", label: "Ощутили изменения" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-purple-100"
            >
              <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
