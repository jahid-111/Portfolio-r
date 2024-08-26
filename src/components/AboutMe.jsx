const AboutMe = () => {
  return (
    <div className=" flex  flex-col py-4 px-1 justify-around items-center gap-5 md:flex-row mx-auto">
      <div className="w-full md:w-6/12">
        <h4 className=" text-3xl font-semibold">⚡ About Me</h4>
        <div className=" text-justify leading-relaxed tracking-tighter ">
          <p className=" my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            eveniet ipsum excepturi ea nihil repellendus possimus. Odio
            praesentium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam non
            aut excepturi ea, doloribus eum, fugiat accusamus nisi, aliquid odit
            exercitationem. Ipsum minimaem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam non aut excepturi ea, doloribus eum, fugiat
            exercitationem. Ipsum minimaem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam non aut excepturi ea, doloribus eum, fugiat
            accusamus nisi, aliquid odit exercitationem. Ipsum minima dicta
            eveniet laborum eum.
          </p>
        </div>
      </div>

      <div className="w-full flex items-center justify-center md:w-6/12">
        <img
          className="  h-80 w-80 rounded-full"
          src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutMe;
