import Card from "./Card.jsx";

function AboutMe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">About Me</h1>
        <p className="text-lg text-gray-700 mt-2">
          Get to know the creator behind Beats4Me
        </p>
      </header>

      <div className="flex justify-center gap-6 mb-8">
        <img
          src="https://picsum.photos/200/150"
          alt="placeholder 1"
          className="rounded-xl shadow-md"
        />
        <img
          src="https://picsum.photos/201/150"
          alt="placeholder 2"
          className="rounded-xl shadow-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        <Card
          name="Noah Trammell"
          title="Code Owner / Project Manager"
          blurb="I’m building Beats4Me because I love music, drumming, and production, and I want a platform made for producers."
          image="https://picsum.photos/200"
        />

        <Card
          name="Noah Trammell"
          title="Creative Director"
          blurb="I want the app to feel clean, modern, and inspired by music platforms and social media feeds."
          image="https://picsum.photos/210"
        />
      </div>
    </div>
  );
}

export default AboutMe;