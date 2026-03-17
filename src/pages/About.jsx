import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import TextWithHeader from "../components/TextWithHeader";

function About() {
  return (
    <>
      <Header title="About Beats4Me" subtitle="Meet the creator" />

      <div className="grid grid-cols-2 gap-4">
        <ProfileCard
          cardEmoji="🎧"
          cardHeader="Noah"
          cardSubtitle="Creator / Developer"
          cardBlurb="I created Beats4Me as a platform for producers to discover, rate, and get inspired by beats."
        />

        <ProfileCard
          cardEmoji="🥁"
          cardHeader="My Music Side"
          cardSubtitle="Drummer / Producer"
          cardBlurb="I’m passionate about drumming, beat-making, and learning how music and technology connect."
        />
      </div>

      <TextWithHeader
        mySubtitle="Our mission"
        myText="Beats4Me is made to help producers scroll through beats, rate what they like, and find inspiration for their own sound."
      />
    </>
  );
}

export default About;