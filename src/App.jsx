import Header from "./components/Header.jsx";
import Food from "./components/Food.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <h1 className="text-4xl font-bold text-black-700
	bg-green-100 p-8 rounded-xl">
  Tailwind is working!
</h1>

<Card
  title="About Me"
  description="I'm Noah. I play basketball and I'm learning React."
  emoji="🏀"
/>

<Card
  title="My Interest"
  description="I love basketball and music."
  emoji="🎵"
/>

<Card
  title="Dream Job"
  description="Pro basketball player, drummer, and entrepreneur."
  emoji="🚀"
/>
      <Food />
      <Footer />
    </div>
  );
}

export default App;