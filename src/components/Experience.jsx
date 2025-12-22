import { motion } from "framer-motion"

const experiences = [
  {
    role: "Data Science Intern",
    company: "ShadowFox",
    duration: "Aug 2025 – Sept 2025",
    points: [
      "Worked on data preprocessing and exploratory data analysis",
      "Applied Python-based analytical and visualization techniques",
      "Analyzed datasets to extract meaningful patterns and insights",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "The Aditya Birla Group",
    duration: "May 2025 – Jul 2025",
    points: [
      "Developed internal web tools for Water Chemistry and Movie Booking systems",
      "Built responsive interfaces with real-time data integration",
      "Collaborated with cross-functional teams to deliver scalable solutions",
    ],
  },
  {
    role: "Content Writer Intern",
    company: "InAmigos",
    duration: "Jun 2025 – Jul 2025",
    points: [
      "Created technical and community-focused written content",
      "Assisted in content planning, editing, and research workflows",
      "Strengthened communication of technical concepts",
    ],
  },
  {
    role: "Data Analyst (Virtual Internship)",
    company: "Accenture",
    duration: "Oct 2024 – Nov 2024",
    points: [
      "Performed data cleaning, transformation, and analysis tasks",
      "Built dashboards using Power BI and Python",
      "Presented insights through structured data storytelling",
    ],
  },
  {
    role: "Software Engineer (Virtual Program)",
    company: "Goldman Sachs",
    duration: "Sept 2024 – Oct 2024",
    points: [
      "Worked on cybersecurity tasks including leaked password analysis",
      "Applied secure coding and vulnerability assessment techniques",
      "Developed system-level problem-solving skills",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <h2 className="text-5xl font-bold text-center mb-24">
        Experience
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* TIMELINE LINE */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 -translate-x-1/2" />

        <div className="space-y-24">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex ${
                i % 2 === 0 ? "justify-start pr-12" : "justify-end pl-12"
              }`}
            >
              {/* TIMELINE DOT */}
              <div
                className="absolute left-1/2 top-6 w-4 h-4 rounded-full
                           bg-purple-500 -translate-x-1/2 shadow-lg"
              />

              {/* CARD */}
              <div
                className="w-full md:w-[45%] p-6 rounded-2xl
                           bg-white/5 backdrop-blur-xl
                           border border-white/10
                           hover:-translate-y-2 hover:shadow-2xl
                           transition-all duration-300"
              >
                <h3 className="text-xl font-semibold">
                  {exp.role}
                </h3>

                <p className="text-purple-400 text-sm">
                  {exp.company}
                </p>

                <p className="text-gray-400 text-sm mt-1 mb-4">
                  {exp.duration}
                </p>

                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {exp.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
