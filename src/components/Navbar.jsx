import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around p-7 rounded-lg shadow-lg">
      <Link to={`/`}>
        <GiKnifeFork className="text-2xl" />
      </Link>
      <div>
        <input type="text" name="" id="" className="bg-cyan-100" />
      </div>
    </div>
  );
};

export default Navbar;
