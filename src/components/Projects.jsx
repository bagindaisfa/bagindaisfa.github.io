import { motion } from "framer-motion";

const projects = [
  {
    title: "CrowdGen Platform – Appen",
    role: "Full Stack Engineer",
    bullets: [
      "Built the entire frontend from scratch for a crowd data generation workflow platform.",
      "Designed project architecture, component systems, and end-to-end UI flows.",
      "Collaborated with backend engineers to integrate APIs and optimize data-handling performance.",
    ],
    tech: "ReactJS, Java Spring Boot, PostgreSQL",
  },
  {
    title: "Geolancer Backend & Admin Panel – Quadrant",
    role: "Full Stack Engineer",
    bullets: [
      "Developed backend APIs for global POI submission, scoring, validation, and large-scale POI operations.",
      "Built Geolancer Admin Panel used to verify thousands of POIs daily.",
      "Key engineer for Attribute-Based Verification System for POI verification.",
    ],
    tech: "Node.js, ReactJS, DynamoDB, Amazon S3",
  },
  {
    title: "SCANS – Service Health Monitoring – Tokopedia",
    role: "Software Engineer (Performance Engineering)",
    bullets: [
      "Developed SCANS, a service-health monitoring web platform for internal Tokopedia services.",
      "Implemented gRPC modules for service profiling and performance tracing.",
      "Performed backend performance optimization using gprof to reduce API latency.",
    ],
    tech: "Go, AngularJS/ReactJS, PostgreSQL, gRPC, gprof",
  },
  {
    title: "ERP System – PT Kabelindo Murni Tbk",
    role: "Team Lead / Full Stack Web Developer",
    bullets: [
      "Led ERP project for manufacturing & logistics: requirements, business process design, and development.",
      "Mentored junior developers and coordinated with stakeholders.",
      "Designed workflows and automations to streamline operations.",
    ],
    tech: "C#, SQL Server, AngularJS, SharePoint, Nintex Workflow",
  },
  {
    title: "POS & Inventory Management – Rudy Project",
    role: "Independent Project",
    bullets: [
      "Built POS, inventory tracking, and Android cashier application.",
      "Developed backend, admin dashboard, and mobile POS system.",
    ],
    tech: "Java Spring Boot, ReactJS, MySQL, Android",
  },
  {
    title: "Attendance System – PT Garda Bangsa Securindo",
    role: "Independent Project",
    bullets: [
      "Developed full attendance system: backend, admin panel, and mobile app.",
      "Implemented real-time tracking, QR scanning, and reporting features.",
    ],
    tech: "Node.js, React TypeScript, MySQL",
  },
  {
    title: "AI Builder Platform (Dify-like)",
    role: "Independent Project",
    bullets: [
      "Built visual LLM workflow builder using React Flow.",
      "Implemented front-end orchestration for AI agent pipelines.",
    ],
    tech: "ReactJS, React Flow, Python Flask, PostgreSQL",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-16 px-4 md:py-20 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-10">Selected Projects</h2>

      <div className="space-y-8">
        {projects.map((p, index) => (
          <ProjectCard key={p.title} project={p} index={index} />
        ))}
      </div>
    </motion.section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="relative border border-gray-200 dark:border-gray-800 rounded-2xl p-4 md:p-5 overflow-hidden bg-white/60 dark:bg-gray-900/60 backdrop-blur"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ y: -4, boxShadow: "0 18px 45px rgba(0,0,0,0.35)" }}
    >
      <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent/15 blur-3xl" />

      <h3 className="text-xl md:text-2xl font-semibold relative">
        {project.title}
      </h3>
      <p className="text-accent text-sm md:text-base mt-1 relative">
        {project.role}
      </p>

      <ul className="mt-3 list-disc ml-5 space-y-1 text-sm md:text-base text-gray-700 dark:text-gray-300 relative">
        {project.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <p className="mt-3 text-xs md:text-sm text-gray-500 dark:text-gray-400 relative">
        Tech: {project.tech}
      </p>
    </motion.article>
  );
}
