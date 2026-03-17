function Card({ name, title, blurb, image }) {
  return (
    <div className="bg-white text-black rounded-2xl shadow-md p-6 w-72 text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-bold">{name}</h2>
      <h3 className="text-md text-gray-600 mb-2">{title}</h3>
      <p className="text-sm">{blurb}</p>
    </div>
  );
}

export default Card;