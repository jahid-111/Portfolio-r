import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

const LinkContact = () => {
  return (
    <div>
      <div className="my-5  flex flex-wrap justify-start items-center gap-2">
        <Link
          className=" button-primary color  rounded-md py-2 px-4 flex justify-start items-center"
          to={""}
        >
          <FaGithub className="me-2" />
          Github
        </Link>

        <Link
          className=" button-primary color rounded-md py-2 px-4 flex items-center"
          to={""}
        >
          <FaLinkedin className="me-2" />
          Linkedin
        </Link>
        <Link
          className=" button-primary color rounded-md py-2 px-4 flex items-center"
          to={""}
        >
          <IoMail className="me-2" />
          Email
        </Link>
      </div>
    </div>
  );
};

export default LinkContact;
