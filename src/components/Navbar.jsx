export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="px-6 py-3 rounded-full
                      bg-black/40 backdrop-blur-xl
                      border border-white/10
                      shadow-lg">
        <ul className="flex gap-6 text-sm text-gray-300">
          {[
            ["Home", "home"],
            ["About", "about"],
            ["Skills", "skills"],
            ["Projects", "projects"],
            ["Experience", "experience"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="hover:text-white transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
