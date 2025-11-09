import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Natalia Sorokina
            </h3>
            <p className="text-gray-400">
              Transformation through synergy of esotericism, parapsychology, tarot and bioenergetics
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#program" className="hover:text-white transition-colors">Program</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Telegram: @mikhail_godin</li>
              <li>Email: info@godin-transform.ru</li>
              <li>Working hours: Daily 10:00-20:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 flex items-center justify-center gap-2"
          >
            Created with <Heart className="w-4 h-4 text-red-500 fill-current" /> for your transformation
          </motion.p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Natalia Sorokina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
