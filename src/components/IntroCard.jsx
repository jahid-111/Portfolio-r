import LinkContact from "./LinkContact";

const IntroCard = () => {
  return (
    <div className=" sm:my-24 flex flex-col justify-start items-start ">
      <div>
        <div>
          <h6 className=" text-2xl my-2 md:text-[2rem] font-semibold">
            {"Hey there!, I'm-"}
          </h6>
          <h1 className=" mb-2 text-5xl xl:text-[6rem] text-wrap font-semibold">
            Mohd. Jahidul Islam
          </h1>

          <h4 className="text-xl my-5 tracking-tight  md:text-[1.7rem] leading-relaxed">
            <span className="font-semibold">Frontend Developer. </span>
            <span className="text-gray-400">
              - A self-taught developer with an
              <br className="hidden md:inline" />
              interest in Frontend Develope.
            </span>
          </h4>
        </div>

        <div className=" my-6 text-sm md:text-xl">
          <p>🚀 Currently specializing in Frontend (React)</p>
          {/* <p>🚀 Frontend Engineer at GGL </p> */}
        </div>
      </div>

      <LinkContact></LinkContact>
    </div>
  );
};

export default IntroCard;
