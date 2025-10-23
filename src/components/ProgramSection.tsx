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
    title: "Сессия 1: Знакомство и диагностика",
    subtitle: "Выявление всех сфер жизни – Что требует внимания и биокоррекция",
    points: [
      "Глубокое знакомство и создание энергетической связи",
      "Диагностика всех сфер жизни: отношения, финансы, здоровье, предназначение",
      "Выявление сильных и слабых сторон",
      "Определение блоков и ограничивающих убеждений",
      "Первичная биоэнергетическая коррекция"
    ],
    result: "Определишь, что необходимо корректировать в первую очередь"
  },
  {
    id: "2",
    title: "Сессия 2: Глубинные корни проблем",
    subtitle: "Кто что-переняли и как избавиться, что стоит поменять схемы и планы",
    points: [
      "Работа с родовыми программами и сценариями",
      "Выявление унаследованных паттернов поведения",
      "Освобождение от чужих убеждений и установок",
      "Трансформация негативных программ через энергопрактики",
      "Создание новых поддерживающих схем жизни"
    ],
    result: "Освободишься от груза прошлого и родовых программ"
  },
  {
    id: "3",
    title: "Сессия 3: Большой прорыв",
    subtitle: "Большой прорыв без ограничения и кармические",
    points: [
      "Работа с кармическими узлами и задачами",
      "Снятие энергетических блоков и зажимов",
      "Активация внутренних ресурсов и потенциала",
      "Прорыв через ограничивающие барьеры",
      "Мощная трансформация на всех уровнях"
    ],
    result: "Почувствуешь прилив энергии и новые возможности"
  },
  {
    id: "4",
    title: "Сессия 4: Кризисы и прорывы",
    subtitle: "Кризисы и разумный прорыв – а не вот качество",
    points: [
      "Понимание смысла кризисных ситуаций",
      "Трансформация кризиса в точку роста",
      "Работа с сопротивлением изменениям",
      "Безопасный и осознанный прорыв",
      "Закрепление новых состояний"
    ],
    result: "Научишься проходить через трудности с пользой для роста"
  },
  {
    id: "5",
    title: "Сессия 5: Энергетическое изобилие",
    subtitle: "Расчистка энергополе-корекция еб-об – давай место что-то не ошибетеся",
    points: [
      "Очистка энергетического поля от негатива",
      "Корректировка энергетических каналов",
      "Открытие потоков изобилия и успеха",
      "Работа с чакрами и энергоцентрами",
      "Защита энергетического поля"
    ],
    result: "Почувствуешь легкость, чистоту и приток энергии"
  },
  {
    id: "6",
    title: "Сессия 6: Проявление желаемого",
    subtitle: "Следуем своим желаниям завет деньги – без ожидание от и благо",
    points: [
      "Работа с истинными желаниями души",
      "Снятие блоков на материальное изобилие",
      "Техники проявления желаемого в реальность",
      "Освобождение от ожиданий и привязанностей",
      "Создание магнитного поля для привлечения благ"
    ],
    result: "Научишься материализовывать свои желания"
  },
  {
    id: "7",
    title: "Завершающая мастер-сессия",
    subtitle: "Индивидуальный мастер-сессии (90 минут). Таро или таро 8 5000₽ – Вход онлайн. более 3 вошников",
    points: [
      "Глубокая индивидуальная работа по таро",
      "Ответы на все важные вопросы",
      "Прогноз на будущее и рекомендации",
      "Завершение трансформационного цикла",
      "План дальнейшего развития"
    ],
    result: "Получишь ясность пути и инструменты для дальнейшего роста"
  },
  {
    id: "8",
    title: "Бонус: Годовое сопровождение",
    subtitle: "Закрытая чар Ваша-собства 65-80 минут – Где не везёт один",
    points: [
      "Доступ к закрытому чату учеников",
      "Ежемесячные групповые сессии поддержки",
      "Ответы на вопросы в течение года",
      "Дополнительные материалы и практики",
      "Сообщество единомышленников"
    ],
    result: "Постоянная поддержка на пути трансформации весь год"
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
            Программа «Точка Роста»
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-4">
            Все детали сессий – каждый человек индивидуален
          </p>
          <p className="text-sm text-gray-500 italic">
            Программа составляется индивидуально под каждого участника
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
                          <p className="text-sm text-gray-600 mb-1">💯 Результат после сессии:</p>
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
