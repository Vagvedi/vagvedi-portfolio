import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const projects = [
  {
    title: "CanteenConnect",
    type: "Full-Stack System",
    completed: true,
    github: "https://github.com/Vagvedi/CanteenConnect",
    repo: "Vagvedi/CanteenConnect",
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
    github: "https://github.com/Vagvedi/weather-analytics",
    repo: "Vagvedi/weather-analytics",
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
    type: "Full-Stack Application",
    completed: false,
    inProgress: true,
    desc: "A scalable Amazon-inspired e-commerce platform focusing on core shopping and checkout workflows.",
    points: [
      "Implemented product listing, cart, and order flow",
      "Designed responsive UI with reusable components",
      "Working on authentication, payments, and scalability",
    ],
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
  },
]

/* ⭐ GitHub stars hook */
function useGitHubStars(repo) {
  const [stars, setStars] = useState(null)

  useEffect(() => {
    if (!repo) return

    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          setStars(data.stargazers_count)
        }
      })
      .catch(() => {})
  }, [repo])

  return stars
}

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
                     bg-gradient-to-br from-purple-500/10 to-indigo-500/10"
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
            <li>• ML-based student behavior modeling</li>
            <li>• Academic risk and performance prediction</li>
            <li>• Scalable system design for real-time insights</li>
          </ul>

          <div className="flex flex-wrap gap-3">
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

          {/* In Progress Badge */}
          <div className="mt-6 inline-flex items-center gap-2
                          text-sm text-yellow-300">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            In Progress
          </div>
        </motion.div>
      </div>

      {/* OTHER PROJECTS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => {
          const stars = useGitHubStars(p.completed ? p.repo : null)

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10
                         rounded-2xl p-6 hover:-translate-y-2
                         transition-all duration-300"
            >
              {/* In Progress Badge */}
              {p.inProgress && (
                <span className="absolute top-4 right-4
                                 flex items-center gap-2
                                 text-xs px-3 py-1 rounded-full
                                 bg-yellow-500/20 text-yellow-300">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                  In Progress
                </span>
              )}

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

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-white/10 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub + Stars (completed only) */}
              {p.completed && p.github && (
                <div className="flex items-center gap-4 text-sm">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition"
                  >
                    View GitHub →
                  </a>

                  {stars !== null && (
                    <span className="text-gray-400">
                      ⭐ {stars}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
