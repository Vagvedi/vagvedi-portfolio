import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center px-6 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />

      {/* SUBTLE GRID TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl w-full"
      >
        {/* TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Vagvedi
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Data & Machine Learning Engineer building intelligent,
            scalable, and real-world software solutions.
          </p>

          {/* TECH STACK */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            {[
              "Python",
              "Machine Learning",
              "Data Analytics",
              "React",
              "SQL",
              "Power BI",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-sm rounded-full
                           bg-white/5 border border-white/10
                           text-gray-300 backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-6 justify-center md:justify-start">
            <a
              href="https://github.com/Vagvedi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 flex items-center gap-2
                         bg-gradient-to-r from-violet-500 to-purple-600
                         rounded-xl font-semibold shadow-lg
                         hover:scale-105 transition"
            >
              <FaGithub /> View GitHub
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-3 border border-white/20 rounded-xl
                         hover:bg-white/10 transition"
            >
              Download Resume
            </a>
          </div>

          {/* STATS */}
          <div className="mt-12 flex gap-10 justify-center md:justify-start text-sm text-gray-400">
            <div>
              <p className="text-white font-semibold text-lg">4+</p>
              <p>Major Projects</p>
            </div>
            <div>
              <p className="text-white font-semibold text-lg">3</p>
              <p>Internships</p>
            </div>
            <div>
              <p className="text-white font-semibold text-lg">2</p>
              <p>Core Domains</p>
            </div>
          </div>
        </div>
      </motion.div>

  
      {/* CURRENT FOCUS */}
<div
  className="absolute bottom-10 left-1/2 -translate-x-1/2
             flex items-center gap-3 px-5 py-2
             bg-white/5 border border-white/10
             rounded-full text-sm text-gray-300
             backdrop-blur-md"
>
  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
  Currently working on{" "}
  <span className="text-white font-medium">
    DigiTwin & ML Research
  </span>
</div>

    </section>
  )
}
