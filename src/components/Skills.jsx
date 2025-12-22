import { motion } from "framer-motion"
import { PieChart, Pie, Cell, Tooltip } from "recharts"
import { FaPython, FaDatabase, FaReact } from "react-icons/fa"
import { SiScikitlearn, SiPandas } from "react-icons/si"

const pieData = [
  { name: "Python & Data", value: 30 },
  { name: "ML & Analytics", value: 25 },
  { name: "Backend & DB", value: 20 },
  { name: "Frontend", value: 15 },
  { name: "Tools", value: 10 },
]

const COLORS = ["#7c3aed", "#22d3ee", "#10b981", "#6366f1", "#f59e0b"]

const bars = [
  {
    skill: "Python",
    level: 90,
    icon: <FaPython />,
    tip: "Data processing, automation, analytics, ML pipelines",
  },
  {
    skill: "Machine Learning",
    level: 85,
    icon: <SiScikitlearn />,
    tip: "Model training, evaluation, feature engineering",
  },
  {
    skill: "Data Analysis & Pandas",
    level: 85,
    icon: <SiPandas />,
    tip: "Cleaning, EDA, transformations, insights",
  },
  {
    skill: "SQL",
    level: 80,
    icon: <FaDatabase />,
    tip: "Queries, joins, aggregations, schema design",
  },
  {
    skill: "Data Visualization",
    level: 80,
    icon: <FaDatabase />,
    tip: "Matplotlib, Power BI, storytelling with data",
  },
  {
    skill: "React",
    level: 70,
    icon: <FaReact />,
    tip: "Dashboards, frontend for data products",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      {/* subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-white/10" />

      <h2 className="text-5xl font-bold text-center mb-4">
        Skills Breakdown
      </h2>
      <p className="text-gray-400 text-center mb-16">
        My technical strengths across data, machine learning, and engineering
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* DONUT */}
        <div className="bg-glass backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <div className="flex justify-center">
            <PieChart width={300} height={300}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={4}
                dataKey="value"
              >
                {pieData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>

          <div className="mt-6 space-y-2 text-sm">
            {pieData.map((item, i) => (
              <div key={i} className="flex justify-between">
                <span className="text-gray-300">{item.name}</span>
                <span className="text-gray-400">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* BARS */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">
            Technical Proficiency
          </h3>

          {bars.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative"
            >
              {/* label */}
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 text-gray-200">
                  <span className="text-lg">{b.icon}</span>
                  <span>{b.skill}</span>
                </div>
                <span className="text-gray-400">{b.level}%</span>
              </div>

              {/* tooltip */}
              <div className="absolute -top-8 left-0 hidden group-hover:block
                              bg-black/80 text-xs text-gray-200 px-3 py-1 rounded-lg">
                {b.tip}
              </div>

              {/* bar */}
              <div className="h-4 bg-white/20 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${b.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full
                             bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500
                             shadow-[0_0_25px_rgba(124,58,237,0.7)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
