function GenreTag({ genre, color }) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border-2 ${color}`}>
      {genre}
    </span>
  )
}

export default GenreTag