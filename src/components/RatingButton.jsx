import { useState } from "react"

function RatingButton({ label, emoji }) {
  const [count, setCount] = useState(0)
  const [rated, setRated] = useState(false)

  const handleClick = () => {
    setCount(count + 1)
    setRated(true)
  }

  return (
    <div className="flex items-center gap-2 p-4 border rounded-xl">
      <button
        onClick={handleClick}
        className={`text-2xl ${rated ? "opacity-100" : "opacity-50"}`}
      >
        {emoji}
      </button>
      <span className="text-lg font-bold">{count}</span>
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  )
}

export default RatingButton