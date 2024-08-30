import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

const LinkContact = () => {
  return (
    <div>
      <div className="my-5 flex flex-wrap justify-start items-center gap-2 md:gap-4">
        <Link
          target="_blank"
          className=" button-primary color  rounded-md py-2 px-4 flex justify-start items-center"
          to={"https://github.com/jahid-111"}
        >
          <FaGithub className="me-2" />
          Github
        </Link>

        <Link
          target="_blank"
          className=" button-primary color rounded-md py-2 px-4 flex items-center"
          to={"https://www.linkedin.com/in/mohd-jahidul-2622a7176/"}
        >
          <FaLinkedin className="me-2" />
          Linkedin
        </Link>
        <Link
          className=" button-primary color rounded-md py-2 px-4 flex items-center"
          to={"mailto:jahidjo5@outlook.com"}
        >
          <IoMail className="me-2" />
          Email
        </Link>
      </div>
    </div>
  );
};

export default LinkContact;
