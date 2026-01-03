import { motion } from "framer-motion"

const projects = [
  {
    title: "CanteenConnect",
    type: "Full-Stack System",
    completed: true,
    github: "https://github.com/Vagvedi/CanteenConnect",
    desc: "A full-stack canteen management system for digital food ordering with authentication and role-based access.",
    points: [
      "Designed student & admin roles with secure authentication",
      "Built responsive UI for real-world usage",
      "Structured scalable APIs with database integration",
    ],
    tech: ["React", "Node.js", "MySQL"],
  },
  {
    title: "Laura Larsen Research",
    type: "Research Project",
    completed: false,
    desc: "A research-focused project involving structured data analysis and interpretation with academic rigor.",
    points: [
      "Conducted systematic data collection and preprocessing",
      "Applied analytical methods to extract meaningful patterns",
      "Documented insights following research best practices",
    ],
    tech: ["Python", "Research", "Data Analysis"],
  },
  {
    title: "Weather & Data Analytics Dashboard",
    type: "Analytics Dashboard",
    completed: true,
    github: "https://github.com/Vagvedi/Weather-Analytics",
    desc: "A data analytics project focused on collecting, cleaning, and visualizing weather and time-series data.",
    points: [
      "Processed real-world datasets using Pandas and NumPy",
      "Visualized trends using Matplotlib and Power BI",
      "Derived insights through statistical and exploratory analysis",
    ],
    tech: ["Python", "Pandas", "Matplotlib", "Power BI"],
  },
  {
    title: "Amazon Clone",
    type: "Full-Stack Application (In Progress)",
    completed: true,
    github: "https://github.com/Vagvedi/Amazon-Clone",
    desc: "A scalable Amazon-inspired e-commerce platform focusing on core shopping and checkout workflows.",
    points: [
      "Implemented product listing, cart, and order flow",
      "Designed responsive UI with reusable components",
      "Working on authentication, payments, and scalability",
    ],
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <h2 className="text-5xl font-bold text-center mb-20">
        Projects
      </h2>

      {/* FEATURED PROJECT */}
      <div className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 rounded-2xl border border-white/10
                     bg-gradient-to-br from-purple-500/10 to-indigo-500/10
                     hover:from-purple-500/15 hover:to-indigo-500/15
                     transition-all"
        >
          <span className="absolute top-4 right-4 text-xs px-3 py-1
                           rounded-full bg-purple-500/20 text-purple-300">
            Featured Project
          </span>

          <p className="text-sm text-purple-400 mb-2">
            AI / Machine Learning System
          </p>

          <h3 className="text-3xl font-semibold mb-4">
            DigiTwin
          </h3>

          <p className="text-gray-300 max-w-4xl mb-6">
            An AI-powered digital twin of a student that predicts burnout,
            attendance risk, and academic performance using real-world data,
            machine learning models, and a modern full-stack cloud architecture.
          </p>

          <ul className="space-y-2 text-gray-400 mb-6">
            <li>• Modeled student behavior using ML-driven predictive logic</li>
            <li>• Identified academic risk patterns from attendance and performance data</li>
            <li>• Designed scalable architecture for real-time insights</li>
          </ul>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "Python",
              "Machine Learning",
              "Predictive Analytics",
              "Data Modeling",
              "Full-Stack Architecture",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full
                           bg-white/5 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 🔥 FEATURED PROJECT VIEW BUTTON (ADDED) */}
          <a
            href="https://github.com/Vagvedi/DigiTwin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm text-purple-400
                       hover:text-purple-300 transition"
          >
            View GitHub →
          </a>
        </motion.div>
      </div>

      {/* OTHER PROJECTS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10
                       rounded-2xl p-6
                       hover:-translate-y-2 hover:shadow-2xl
                       transition-all duration-300"
          >
            <p className="text-xs text-purple-400 mb-2">
              {p.type}
            </p>

            <h3 className="text-2xl font-semibold mb-3">
              {p.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {p.desc}
            </p>

            <ul className="list-disc list-inside text-gray-400 space-y-1 mb-5">
              {p.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 bg-white/10 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* GitHub button ONLY for completed projects */}
            {p.completed && p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-purple-400
                           hover:text-purple-300 transition"
              >
                View GitHub →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
