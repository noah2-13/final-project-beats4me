import Card from "../components/Card.jsx"

function About() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">About Beats4Me</h1>
        <p className="text-lg text-gray-700 mt-2">
          Get to know the creator behind Beats4Me
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        <Card
          name="Noah Trammell"
          title="Code Owner / Project Manager"
          blurb="I'm building Beats4Me because I love music and drumming."
          image="https://picsum.photos/200"
          extra="GitHub: github.com/noah2-13 | Skills: React, JavaScript, CSS"
        />
        <Card
          name="My Music Side"
          title="Drummer / Producer"
          blurb="I'm passionate about drumming, beat-making, and learning how music and technology connect."
          image="https://picsum.photos/210"
          extra="Fun fact: I produce beats in my free time 🥁"
        />
      </div>
    </div>
  )
}

export default About