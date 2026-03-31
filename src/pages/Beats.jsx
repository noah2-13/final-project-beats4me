import BeatCard from "../components/BeatCard.jsx"
import GenreTag from "../components/GenreTag.jsx"

function Beats() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-2">Browse Beats</h1>
      <p className="text-center text-gray-500 mb-6">Find your next favorite beat</p>

      <div className="flex gap-3 justify-center mb-8">
        <GenreTag genre="All" color="border-gray-400 text-gray-600" />
        <GenreTag genre="Lo-Fi" color="border-blue-400 text-blue-600" />
        <GenreTag genre="Trap" color="border-red-400 text-red-600" />
        <GenreTag genre="Drill" color="border-purple-400 text-purple-600" />
        <GenreTag genre="R&B" color="border-green-400 text-green-600" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BeatCard title="Midnight Vibes" genre="Lo-Fi" producer="Noah Trammell" image="https://picsum.photos/400/200" />
        <BeatCard title="Summer Wave" genre="Trap" producer="Noah Trammell" image="https://picsum.photos/401/200" />
        <BeatCard title="Dark Hours" genre="Drill" producer="Noah Trammell" image="https://picsum.photos/402/200" />
        <BeatCard title="City Nights" genre="R&B" producer="Noah Trammell" image="https://picsum.photos/403/200" />
        <BeatCard title="Cloud 9" genre="Lo-Fi" producer="Noah Trammell" image="https://picsum.photos/404/200" />
        <BeatCard title="Street Code" genre="Trap" producer="Noah Trammell" image="https://picsum.photos/405/200" />
      </div>
    </div>
  )
}

export default Beats