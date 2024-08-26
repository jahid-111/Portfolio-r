import AboutMe from "../components/AboutMe";
import IntroCard from "../components/IntroCard";
import Reval from "../components/reval/Reval";
import SkillOn from "../components/SkillOn";

const Home = () => {
  return (
    <div className=" px-4  mt-28  ">
      <Reval>
        <IntroCard />
      </Reval>
      <Reval>
        <AboutMe />
      </Reval>
      <Reval>
        <SkillOn />
      </Reval>
    </div>
  );
};

export default Home;
