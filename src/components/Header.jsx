import { useState } from "react"

function Header({ title, subtitle }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="m-6 p-3 border">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      <h3 className="text-xl">{subtitle}</h3>
      {isOpen && (
        <nav className="mt-2 flex flex-col gap-2">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/profile">Profile</a>
        </nav>
      )}
    </div>
  )
}

export default Header