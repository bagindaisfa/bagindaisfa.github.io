import { motion } from "framer-motion";

const experiences = [
  {
    company: "Appen",
    title: "Full Stack Engineer",
    period: "Jan 2024 – Present",
    bullets: [
      "Developing CrowdGen platform for crowd data generation workflows.",
      "Responsible for frontend architecture, component design, and UI flows.",
      "Collaborating closely with backend engineers on API integration and performance.",
    ],
  },
  {
    company: "Quadrant Global Pte Ltd",
    title: "Full Stack Engineer",
    period: "Dec 2022 – 2023",
    bullets: [
      "Developed backend for Geolancer, a global POI collection mobile app.",
      "Designed APIs for submission flow, scoring, validations, and POI operations.",
      "Built Geolancer Admin Panel for daily verification of thousands of POIs.",
    ],
  },
  {
    company: "Tokopedia",
    title: "Software Engineer (Performance Engineering)",
    period: "May 2022 – Nov 2022",
    bullets: [
      "Developed SCANS, a service health monitoring platform for internal services.",
      "Implemented gRPC-based profiling and performance tracing.",
      "Performed backend performance optimization, reducing API latency.",
    ],
  },
  {
    company: "Elistec Informatika Utama",
    title: "Full Stack Web Developer",
    period: "Nov 2019 – May 2022",
    bullets: [
      "Developed ERP systems for enterprise logistics and manufacturing clients.",
      "Acted as Team Lead for ERP project at PT Kabelindo Murni Tbk.",
      "Designed workflows and automations to streamline operations.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-16 px-4 md:py-20 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-6">Experience</h2>

      <p className="text-gray-700 dark:text-gray-300 mb-8 text-sm md:text-base max-w-3xl">
        Full Stack Engineer with 5+ years of experience building enterprise
        systems, data platforms, frontend architectures, and high-performance
        APIs at Appen, Quadrant, Tokopedia, and large enterprise clients.
      </p>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.company}
            className="border border-gray-200 dark:border-gray-800 rounded-2xl p-4 md:p-5 bg-white/60 dark:bg-gray-900/60 backdrop-blur"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.06 }}
            whileHover={{ y: -3 }}
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <h3 className="text-lg md:text-xl font-semibold">
                {exp.title} — {exp.company}
              </h3>
              <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                {exp.period}
              </span>
            </div>

            <ul className="mt-3 list-disc ml-5 space-y-1 text-sm md:text-base text-gray-700 dark:text-gray-300">
              {exp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
