import AboutMe from "../components/AboutMe";
import IntroCard from "../components/IntroCard";
import SkillOn from "../components/SkillOn";
import useData from "../hooks/useData";

const Home = () => {
  const { data } = useData();
  console.log(data);
  return (
    <div className=" px-4  mt-28 md:mt-36">
      <IntroCard />
      <AboutMe />
      <SkillOn />
    </div>
  );
};

export default Home;
