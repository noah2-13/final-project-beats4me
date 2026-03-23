import { useState } from "react"

function Card({ name, title, blurb, image, extra }) {
  const [showMore, setShowMore] = useState(false)
  const [likes, setLikes] = useState(0)

  return (
    <div className="bg-white text-black rounded-2xl shadow-md p-6">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-bold">{name}</h2>
      <h3 className="text-md text-gray-600 mb-2">{title}</h3>
      <p className="text-sm">{blurb}</p>
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-3 text-blue-500"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
      {showMore && (
        <div className="mt-2 text-sm text-gray-700">
          <p>{extra}</p>
        </div>
      )}
      <button
        onClick={() => setLikes(likes + 1)}
        className="mt-3 ml-4 text-red-500"
      >
        heart {likes}
      </button>
    </div>
  )
}

export default Card