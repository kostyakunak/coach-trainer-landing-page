import { motion } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    id: 1,
    name: "Elena M.",
    result: "Found her purpose and doubled her income in 2 months",
    text: "After working with Natalia, my life changed dramatically. I finally understood what I want to do, and within a month I opened my own business. Now I earn 2 times more than at my previous job, and I get great pleasure!",
    duration: "VIP Program"
  },
  {
    id: 2,
    name: "Dmitry K.",
    result: "Restored family relationships and got rid of fears",
    text: "I came to the program with destroyed relationships and deep fears. Natalia helped me see the root of the problems coming from childhood. Now I've restored relationships with my parents and wife, I feel confidence and peace.",
    duration: "Platinum Program"
  },
  {
    id: 3,
    name: "Anna V.",
    result: "Developed intuition and learned to manage energy",
    text: "Natalia's practices revealed incredible abilities in me. I began to feel energies, learned to work with tarot cards and now help other people. This completely changed my perception of the world!",
    duration: "Light Program"
  },
  {
    id: 4,
    name: "Sergey L.",
    result: "Got rid of chronic fatigue and found meaning in life",
    text: "Before the program, I felt like a squeezed lemon, nothing pleased me. Natalia found and eliminated energetic blocks, taught me to recover. Now I'm full of strength, energy and know what I'm living for.",
    duration: "VIP Program"
  },
  {
    id: 5,
    name: "Maria P.",
    result: "Attracted the love of her dreams and got married",
    text: "For many years I couldn't meet the right partner. After working with Natalia, I freed myself from fears and blocks on relationships. After 3 months I met the love of my life, now we're married and happy!",
    duration: "Platinum Program"
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
            What Participants Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real stories of people's transformation
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
            { number: "250+", label: "Satisfied participants" },
            { number: "95%", label: "Achieved their goals" },
            { number: "100%", label: "Felt changes" }
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
