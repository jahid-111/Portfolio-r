import AboutMe from "../components/AboutMe";
import IntroCard from "../components/IntroCard";
import Reval from "../components/animation/Reval";
import SkillOn from "../components/SkillOn";
import Expertise from "../components/Expertise";

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
      <Reval slide={true} delay={0.4}>
        <Expertise />
      </Reval>
    </div>
  );
};

export default Home;
