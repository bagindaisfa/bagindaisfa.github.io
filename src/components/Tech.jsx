import { motion } from "framer-motion";

const primaryFrontend = [
  "ReactJS",
  "Next.js",
  "TypeScript",
  "AngularJS",
  "HTML5",
  "CSS3",
];

const backend = ["Node.js", "Java Spring Boot", "Express.js", "Go", "C#"];

const databases = ["PostgreSQL", "MySQL", "SQL Server", "DynamoDB"];

const devops = ["Docker", "Amazon S3"];

const tools = ["Git", "React Flow", "PgAdmin", "MySQL Workbench", "SharePoint"];

const groups = [
  { title: "Primary Frontend", items: primaryFrontend },
  { title: "Backend & Server", items: backend },
  { title: "Databases", items: databases },
  { title: "Cloud & DevOps", items: devops },
  { title: "Tools", items: tools },
];

export default function Tech() {
  return (
    <motion.section
      id="tech"
      className="py-16 px-4 md:py-20 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {groups.map((group, idx) => (
          <TechGroup key={group.title} group={group} index={idx} />
        ))}
      </div>
    </motion.section>
  );
}

function TechGroup({ group, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <h3 className="text-lg font-semibold text-accent mb-3">{group.title}</h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <motion.span
            key={item}
            whileHover={{ y: -2, scale: 1.03 }}
            className="px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700 text-xs md:text-sm bg-white/60 dark:bg-gray-900/60 backdrop-blur"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
