import GenreTag from "../components/GenreTag.jsx"
import RatingButton from "../components/RatingButton.jsx"
import BeatCard from "../components/BeatCard.jsx"

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://picsum.photos/100"
              alt="profile"
              className="w-20 h-20 rounded-full object-cover border-2"
            />
            <div>
              <h1 className="text-3xl font-bold">Noah Trammell</h1>
              <p className="text-gray-500">Producer · Drummer · Developer</p>
              <p className="text-sm text-gray-400">Member since 2024</p>
            </div>
          </div>
          <p className="text-gray-700 border-t pt-4">
            I create beats that blend lo-fi, trap, and drill. Beats4Me is my platform to share my sound with the world.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border">
          <h2 className="text-xl font-bold mb-3">Favorite Genres</h2>
          <div className="flex gap-3 flex-wrap">
            <GenreTag genre="Lo-Fi" color="border-blue-400 text-blue-600" />
            <GenreTag genre="Trap" color="border-red-400 text-red-600" />
            <GenreTag genre="Drill" color="border-purple-400 text-purple-600" />
            <GenreTag genre="R&B" color="border-green-400 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border">
          <h2 className="text-xl font-bold mb-3">My Beats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BeatCard title="Midnight Vibes" genre="Lo-Fi" producer="Noah Trammell" image="https://picsum.photos/400/200" />
            <BeatCard title="Dark Hours" genre="Drill" producer="Noah Trammell" image="https://picsum.photos/402/200" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border">
          <h2 className="text-xl font-bold mb-3">Rate My Work</h2>
          <div className="flex gap-4">
            <RatingButton emoji="🔥" label="Fire" />
            <RatingButton emoji="⭐" label="Stars" />
            <RatingButton emoji="👍" label="Likes" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile