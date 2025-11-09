import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Check, Star, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Light",
    subtitle: "Group format",
    price: "15€",
    oldPrice: "12€",
    popular: false,
    gradient: "from-gray-100 to-gray-200",
    borderColor: "border-gray-300",
    features: [
      "4 group sessions",
      "Work in unified group field",
      "Access to basic materials",
      "General support chat",
      "Recording of all sessions",
      "Completion certificate"
    ]
  },
  {
    name: "VIP",
    subtitle: "Optimal format",
    price: "45€",
    oldPrice: "35€",
    popular: true,
    gradient: "from-purple-500 to-teal-500",
    borderColor: "border-purple-500",
    features: [
      "Everything from Light package",
      "6 individual sessions",
      "Personal tarot card work",
      "Individual energy correction",
      "Personal practices and meditations",
      "24/7 personal support chat",
      "Access to closed materials",
      "Bonus: neurographics video course"
    ]
  },
  {
    name: "Platinum",
    subtitle: "Maximum results",
    price: "79€",
    oldPrice: "65€",
    installment: "Installment: 30€ every 3 weeks",
    popular: false,
    gradient: "from-orange-500 to-purple-600",
    borderColor: "border-orange-500",
    features: [
      "Everything from VIP package",
      "8 individual sessions",
      "Annual support (12 months)",
      "Monthly group sessions",
      "Access to elite student chat",
      "Priority master support",
      "Lifetime access to all materials",
      "Bonus: meditation series and magic course",
      "Individual master session 90 minutes"
    ]
  }
];

export function PricingSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-teal-50" />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
            Choose Your Package
          </h2>
          <p className="text-gray-600 text-lg">
            Start your transformation today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${pkg.popular ? 'lg:scale-105' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-purple-600 to-teal-600 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">Bestseller</span>
                  </div>
                </div>
              )}

              <div className={`relative bg-white rounded-3xl overflow-hidden border-2 ${pkg.borderColor} ${pkg.popular ? 'shadow-2xl' : 'shadow-lg'} h-full`}>
                {/* Header */}
                <div className={`bg-gradient-to-r ${pkg.gradient} ${pkg.popular ? 'p-8' : 'p-6'} text-white text-center`}>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-sm opacity-90 mb-4">{pkg.subtitle}</p>
                  <div className="flex items-end justify-center gap-2 mb-2">
                    <span className="text-lg line-through opacity-75">{pkg.oldPrice}</span>
                    <span className="text-5xl font-bold">{pkg.price}</span>
                  </div>
                  {pkg.installment && (
                    <p className="text-sm opacity-90">{pkg.installment}</p>
                  )}
                </div>

                {/* Features */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-purple-600' : 'text-teal-600'}`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full py-6 text-lg rounded-full ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 shadow-xl' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    Choose Package
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonuses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-100 via-teal-100 to-orange-100 rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h3 className="text-2xl font-bold text-gray-900">Additional Bonuses</h3>
            <Sparkles className="w-8 h-8 text-purple-600" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "20% discount for full payment",
              "Video materials: meditation series",
              "Neurographics lessons",
              "Access to closed chat",
              "Checklist «Quick Money»",
              "Access to time bank"
            ].map((bonus, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl"
              >
                <div className="w-2 h-2 bg-purple-600 rounded-full" />
                <p className="text-gray-700">{bonus}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-white p-8 rounded-3xl shadow-lg border-2 border-purple-200">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">💯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              100% Result Guarantee
            </h3>
            <p className="text-gray-600 max-w-2xl">
              If after the first session you don't feel changes — we'll refund your money. 
              No questions or conditions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
