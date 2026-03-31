import BeatCard from "../components/BeatCard.jsx"
import RatingButton from "../components/RatingButton.jsx"
import GenreTag from "../components/GenreTag.jsx"

function Components() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Components</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <BeatCard
          title="Midnight Vibes"
          genre="Lo-Fi"
          producer="Noah Trammell"
          image="https://picsum.photos/400/200"
        />
        <BeatCard
          title="Summer Wave"
          genre="Trap"
          producer="Noah Trammell"
          image="https://picsum.photos/401/200"
        />
        <BeatCard
          title="Dark Hours"
          genre="Drill"
          producer="Noah Trammell"
          image="https://picsum.photos/402/200"
        />
      </div>

      <div className="flex gap-4 mb-8">
        <RatingButton emoji="🔥" label="Fire" />
        <RatingButton emoji="⭐" label="Stars" />
        <RatingButton emoji="👍" label="Likes" />
      </div>

      <div className="flex gap-3 flex-wrap">
        <GenreTag genre="Lo-Fi" color="border-blue-400 text-blue-600" />
        <GenreTag genre="Trap" color="border-red-400 text-red-600" />
        <GenreTag genre="Drill" color="border-purple-400 text-purple-600" />
        <GenreTag genre="R&B" color="border-green-400 text-green-600" />
      </div>
    </div>
  )
}

export default Components