import greeting from "../assets/svg/greeting.svg";
import Reval from "../components/animation/Reval";

const Contact = () => {
  return (
    <div className="px-2 mt-24 flex justify-center items-center">
      <Reval>
        <img className=" h-96  w-96" src={greeting}></img>
      </Reval>
    </div>
  );
};

export default Contact;
