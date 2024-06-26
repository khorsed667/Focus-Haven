import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authentication/Providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [open, setOpen] = useState(false);
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
    <nav className="flex justify-between text-white bg-black items-center ps-2 pe-3 w-full">
      <div className="lg:text-center mb-4">
        <p className="text-2xl md:text-3xl lg:text-5xl">FocusHaven</p>
        <p className="xsm:text-xs xsm:tracking-wider md:text-sm md:tracking-widest md:mt-2">PHOTOGRAPHY</p>
      </div>
      <div onClick={()=>setOpen(!open)} className="text-2xl absolute right-6 md:hidden">
          {
            open ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />
          }
        </div> 
      <ul className={`flex text-center xsm:flex-col xsm:bg-white p-7 md:p-0 xsm:bg-opacity-80 xsm:text-black md:bg-black md:text-white md:bg-opacity-100 md:flex-row xsm:right-5 transition-all duration-500 ease-in absolute md:static ${!open ? 'top-20' : '-top-96'}`}>
        <Link to="/" href="#" className="md:px-2 px-5 text-lg cursor-pointer hover:text-slate-400 duration-500">
          Home
        </Link>
        <a href="#gallery" className="md:px-2 px-5 text-lg cursor-pointer hover:text-slate-400 duration-500">
          Gallery
        </a>
        <Link to="/instractor" className="md:px-2 px-5 text-lg cursor-pointer hover:text-slate-400 duration-500">
          Instructors
        </Link>
        <Link to="/classes" className="md:px-2 px-5 text-lg cursor-pointer hover:text-slate-400 duration-500">
          Classes
        </Link>
        <Link to="/dashboard" className="md:px-2 px-5 text-lg cursor-pointer hover:text-slate-400 duration-500">
          Deshboard
        </Link>
        {user ? (
          <button
            onClick={handelLogOut}
            className="md:px-2 px-5 text-lg cursor-pointer hover:text-slate-400 duration-500"
          >
            LogOut
          </button>
        ) : (
          <Link to={"signIn"} href="#" className="md:px-2 px-5 text-lg cursor-pointer hover:text-slate-400 duration-500">
            Login
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
