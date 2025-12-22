import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-5xl font-bold mb-6">
          Let’s Connect
        </h2>

        <p className="text-gray-300 text-lg mb-12">
          I’m open to internships, research opportunities, and
          meaningful collaborations.  
          Feel free to reach out.
        </p>

        <div className="flex justify-center gap-8 text-gray-400 text-2xl">
          <a
            href="mailto:vagvedikinikar@gmail.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/Vagvedi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vagvedi-kinikar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
