function Card({ title, description, emoji }) {
  return (
    <div className="max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-2xl shadow-md text-center transition-all duration-300 hover:shadow-xl hover:bg-blue-50 hover:-translate-y-1">
      <span className="text-5xl block mb-4">{emoji}</span>
      <h3 className="text-2xl font-bold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-600 italic">{description}</p>
    </div>
  );
}

export default Card;