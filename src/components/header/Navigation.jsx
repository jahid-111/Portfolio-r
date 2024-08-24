import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-around">
      <Link to={`/home`}> Home</Link>
      <Link to={`/project`}> Project</Link>
      <Link to={`/contacts`}> Contact</Link>
    </nav>
  );
};

export default Navigation;
