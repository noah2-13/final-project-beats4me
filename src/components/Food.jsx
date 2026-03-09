function Food() {
  const food1 = "Pizza";
  const food2 = "Burgers";
  const food3 = "Tacos";

  return (
    <div>
      <h2>My Favorite Foods</h2>

      <ul>
        <li>{food1}</li>
        <li>{food2}</li>
        <li>{food3}</li>
      </ul>
    </div>
  );
}

export default Food;