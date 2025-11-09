import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Award } from "lucide-react";

const sessions = [
  {
    id: "1",
    title: "Session 1: Introduction and Diagnosis",
    subtitle: "Identifying all areas of life – What needs attention and bio-correction",
    points: [
      "Deep introduction and creating an energetic connection",
      "Diagnosis of all areas of life: relationships, finances, health, purpose",
      "Identifying strengths and weaknesses",
      "Determining blocks and limiting beliefs",
      "Initial bioenergetic correction"
    ],
    result: "You'll determine what needs to be corrected first"
  },
  {
    id: "2",
    title: "Session 2: Deep Roots of Problems",
    subtitle: "What was inherited and how to get rid of it, what patterns and plans need to be changed",
    points: [
      "Working with ancestral programs and scenarios",
      "Identifying inherited behavioral patterns",
      "Liberation from others' beliefs and attitudes",
      "Transformation of negative programs through energy practices",
      "Creating new supportive life patterns"
    ],
    result: "You'll free yourself from the burden of the past and ancestral programs"
  },
  {
    id: "3",
    title: "Session 3: Major Breakthrough",
    subtitle: "Major breakthrough without limitations and karmic",
    points: [
      "Working with karmic knots and tasks",
      "Removing energetic blocks and tensions",
      "Activating internal resources and potential",
      "Breakthrough through limiting barriers",
      "Powerful transformation on all levels"
    ],
    result: "You'll feel a surge of energy and new opportunities"
  },
  {
    id: "4",
    title: "Session 4: Crises and Breakthroughs",
    subtitle: "Crises and conscious breakthrough – not just quality",
    points: [
      "Understanding the meaning of crisis situations",
      "Transforming crisis into a growth point",
      "Working with resistance to change",
      "Safe and conscious breakthrough",
      "Anchoring new states"
    ],
    result: "You'll learn to go through difficulties with benefit for growth"
  },
  {
    id: "5",
    title: "Session 5: Energetic Abundance",
    subtitle: "Clearing energy field and correction – making room for something new",
    points: [
      "Clearing the energy field from negativity",
      "Correcting energy channels",
      "Opening flows of abundance and success",
      "Working with chakras and energy centers",
      "Protecting the energy field"
    ],
    result: "You'll feel lightness, purity and an influx of energy"
  },
  {
    id: "6",
    title: "Session 6: Manifesting Desires",
    subtitle: "Following your true desires and attracting money – without expectations and attachments",
    points: [
      "Working with true soul desires",
      "Removing blocks on material abundance",
      "Techniques for manifesting desires into reality",
      "Liberation from expectations and attachments",
      "Creating a magnetic field to attract blessings"
    ],
    result: "You'll learn to materialize your desires"
  },
  {
    id: "7",
    title: "Final Master Session",
    subtitle: "Individual master session (90 minutes). Tarot or tarot 8 50€ – Online entry. More than 3 participants",
    points: [
      "Deep individual tarot work",
      "Answers to all important questions",
      "Future forecast and recommendations",
      "Completion of the transformational cycle",
      "Plan for further development"
    ],
    result: "You'll gain clarity of path and tools for further growth"
  },
  {
    id: "8",
    title: "Bonus: Annual Support",
    subtitle: "Closed chat for your own group 65-80 minutes – Where one doesn't succeed alone",
    points: [
      "Access to closed student chat",
      "Monthly group support sessions",
      "Answers to questions throughout the year",
      "Additional materials and practices",
      "Community of like-minded people"
    ],
    result: "Constant support on the transformation path throughout the year"
  }
];

export function ProgramSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
            "Growth Point" Program
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-4">
            All session details – each person is individual
          </p>
          <p className="text-sm text-gray-500 italic">
            The program is individually tailored for each participant
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {sessions.map((session, index) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={session.id}
                  className="bg-gradient-to-r from-purple-50 to-teal-50 border border-purple-200 rounded-2xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {session.title}
                      </h3>
                      <p className="text-sm text-gray-600">{session.subtitle}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mt-4">
                      <ul className="space-y-3 mb-6">
                        {session.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-gradient-to-r from-orange-100 to-purple-100 p-4 rounded-xl flex items-start gap-3">
                        <Award className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600 mb-1">💯 Result after session:</p>
                          <p className="text-gray-800 font-medium">{session.result}</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
