import { motion } from "motion/react";
import { CheckCircle2, Award, Users, Star } from "lucide-react";

const credentials = [
  "More than 10 years of experience in esoteric practices",
  "Certified tarot reader and bioenergeticist",
  "Trained with the best masters of Russia and the world",
  "Author of own transformation methodologies",
  "Helped more than 250 people change their lives",
  "Worked with top managers and entrepreneurs"
];

const achievements = [
  {
    icon: Users,
    number: "250+",
    label: "Students"
  },
  {
    icon: Award,
    number: "10+",
    label: "Years of experience"
  },
  {
    icon: Star,
    number: "100%",
    label: "Effectiveness"
  }
];

export function MentorSection() {
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            Why More Than 250 People Trusted Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/pexels-enginakyurt-3148937.jpg"
                alt="Natalia Sorokina"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-purple-600 text-white p-6 rounded-2xl shadow-2xl"
            >
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm">years of practice</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Natalia Sorokina
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Master of synergy of esotericism, parapsychology, tarot and bioenergetics
            </p>

            <div className="space-y-4 mb-8">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{credential}</p>
                </motion.div>
              ))}
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-purple-100 to-teal-100 p-4 rounded-xl text-center"
                >
                  <achievement.icon className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900 mb-1">
                    {achievement.number}
                  </p>
                  <p className="text-sm text-gray-600">{achievement.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-purple-100 via-teal-100 to-orange-100 p-8 md:p-12 rounded-3xl"
        >
          <p className="text-2xl text-gray-800 italic text-center">
            "My mission is to help every person unlock their true potential 
            and start living the life they dreamed of. I use the synergy of ancient 
            knowledge and modern methodologies to create a unique transformation path 
            for each student."
          </p>
          <p className="text-right mt-4 text-gray-700 font-semibold">
            — Natalia Sorokina
          </p>
        </motion.div>
      </div>
    </section>
  );
}
