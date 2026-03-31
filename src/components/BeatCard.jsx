function BeatCard({ title, genre, producer, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-gray-500">Genre: {genre}</p>
      <p className="text-sm text-gray-500">Producer: {producer}</p>
    </div>
  )
}

export default BeatCard