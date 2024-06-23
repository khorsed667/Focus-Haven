import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authentication/Providers/AuthProvider";

const Nav = () => {
  const { logOut, user } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut()
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="flex justify-between text-white z-10 bg-black items-center ps-2 pe-3 w-full">
      <div className="text-center mb-4">
        <p className="text-5xl">FocusHaven</p>
        <p className="text-sm tracking-widest mt-2">PHOTOGRAPHY</p>
      </div>
      <div className="flex flex-wrap justify-center space-x-4">
        <Link to="/" href="#" className=" text-lg hover:text-gray-400">
          Home
        </Link>
        <Link to="#" className=" text-lg hover:text-gray-400">
          Gallery
        </Link>
        <Link to="/instractor" className=" text-lg hover:text-gray-400">
          Instructors
        </Link>
        <Link to="/classes" className=" text-lg hover:text-gray-400">
          Classes
        </Link>
        <Link to="/dashboard" className=" text-lg hover:text-gray-400">
          Deshboard
        </Link>
        {user ? (
          <button
            onClick={handelLogOut}
            className=" text-lg hover:text-gray-400"
          >
            LogOut
          </button>
        ) : (
          <Link to={"singIn"} href="#" className=" text-lg hover:text-gray-400">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
