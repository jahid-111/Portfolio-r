import servicesImage from "../assets/image/service_card.jpg";
import borderImg from "../assets/image/border-img-.png";
import { IoPricetag } from "react-icons/io5";
const Expertise = () => {
  const services = [
    "Custom Website Design",
    "React Apps",
    "Reusable Components",
    "User Interface (UI) Design",
    "State Management",
    "Performance Boosting",
    "Testing",
    "API Connections",
    "Form Handling",
    "Consultation",
  ];

  return (
    <div className="px-4 md:px-0 h-auto my-14  mb-14  ">
      <div className=" left-2 md:left-0 relative flex flex-col md:items-center my-2 md:my-5">
        <h3 className="text-3xl ms-2 md:text-4xl font-semibold mb-4 relative z-10">
          Expertise
        </h3>
        <div className="absolute w-full inset-0 md:inset-1 flex items-center md:justify-center pointer-events-none">
          <img
            className="w-30 h-10  md:w-44 object-cover opacity-60"
            src={borderImg}
            alt="Border"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5  rounded-md md:bg-[#181817]">
        <div className="w-full md:w-6/12 p-4  flex flex-col justify-center items-start ">
          {services?.map((service) => (
            <div
              key={service}
              className="flex justify-start items-center gap-3  text-xl md:mb-2"
            >
              <IoPricetag className=" text-yellow-500" />
              <li className="list-none mx-auto text-xl ">{service}</li>
            </div>
          ))}
        </div>

        <div className="w-full md:w-6/12 hidden md:block">
          <img
            className="hidden md:block md:h-[400px] xl:h-auto shadow-left rounded-l-lg mx-auto"
            src={servicesImage}
            alt="Service-Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
