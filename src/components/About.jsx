import { motion } from "framer-motion"
import profile from "../assets/profile.jpg"

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Vagvedi Kinikar"
            className="w-80 h-80 object-cover rounded-2xl
                       border border-white/10 shadow-xl"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a Computer Science undergraduate specializing in Big Data
            Analytics with hands-on experience in data science, machine
            learning, and full-stack development.
          </p>

          <p className="text-gray-400 text-lg mt-6">
            I enjoy working on real-world problems — building intelligent
            dashboards, scalable systems, and data-driven solutions that
            create measurable impact.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
