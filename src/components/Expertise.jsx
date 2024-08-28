import { FcServices } from "react-icons/fc";
import servicesImage from "../assets/image/service_card.jpg";
import borderImg from "../assets/image/border-img-.png";
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
    <div className="px-4 md:px-0 h-auto my-14 ">
      <div className="relative flex flex-col items-center mb-3">
        <h3 className="text-3xl font-semibold mb-4 relative z-10">Expertise</h3>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            className="w-30 h-10  md:w-40 object-cover opacity-60"
            src={borderImg}
            alt="Border"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5  rounded-md md:bg-[#181817]">
        <div className="w-full md:w-6/12 p-2  flex flex-col justify-center items-start ">
          {services?.map((service) => (
            <div
              key={service}
              className="flex justify-start items-center gap-3  text-xl md:mb-2"
            >
              <FcServices />
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
