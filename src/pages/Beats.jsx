import { useState } from "react"
import BeatCard from "../components/BeatCard.jsx"
import GenreTag from "../components/GenreTag.jsx"

const beats = [
  { title: "Midnight Vibes", genre: "Lo-Fi", producer: "Noah Trammell", image: "https://picsum.photos/400/200" },
  { title: "Summer Wave", genre: "Trap", producer: "Noah Trammell", image: "https://picsum.photos/401/200" },
  { title: "Dark Hours", genre: "Drill", producer: "Noah Trammell", image: "https://picsum.photos/402/200" },
  { title: "City Nights", genre: "R&B", producer: "Noah Trammell", image: "https://picsum.photos/403/200" },
  { title: "Cloud 9", genre: "Lo-Fi", producer: "Noah Trammell", image: "https://picsum.photos/404/200" },
  { title: "Street Code", genre: "Trap", producer: "Noah Trammell", image: "https://picsum.photos/405/200" },
]

function Beats() {
  const [selectedGenre, setSelectedGenre] = useState("All")

  const filteredBeats = selectedGenre === "All"
    ? beats
    : beats.filter(beat => beat.genre === selectedGenre)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-2">Browse Beats</h1>
      <p className="text-center text-gray-500 mb-6">Find your next favorite beat</p>

      <div className="flex gap-3 justify-center mb-8">
        {["All", "Lo-Fi", "Trap", "Drill", "R&B"].map(genre => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-3 py-1 rounded-full text-sm font-semibold border-2 ${
              selectedGenre === genre
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-400 text-gray-600"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredBeats.map(beat => (
          <BeatCard
            key={beat.title}
            title={beat.title}
            genre={beat.genre}
            producer={beat.producer}
            image={beat.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Beats