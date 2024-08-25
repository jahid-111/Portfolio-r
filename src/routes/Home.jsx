import AboutMe from "../components/AboutMe";
import IntroCard from "../components/IntroCard";
import SkillOn from "../components/SkillOn";

const Home = () => {
  return (
    <div className=" px-2">
      <IntroCard />
      <AboutMe />
      <SkillOn />
    </div>
  );
};

export default Home;
