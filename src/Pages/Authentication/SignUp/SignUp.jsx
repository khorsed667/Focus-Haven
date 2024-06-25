import { useContext } from "react";
import signJpg from "./../../../assets/auth.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
  const { signUp, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const url = "user.demo.png";
    const password = event.target.password.value;
    const user = {
      name: username,
      email: email,
      photo: url,
      role: "student",
    };
    // console.log("User Information:", { username, email, password });
    signUp(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(username, url);
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
      });
  };

  return (
    <div
      className="flex flex-col md:flex-row w-full bg-cover px-4 md:px-24"
      style={{ backgroundImage: `url(${signJpg})` }}
    >
      <div className="flex-1 flex flex-col justify-center items-center bg-cover bg-center p-4 md:p-0">
        <h1 className="text-4xl font-bold text-black">FocusHaven</h1>
        <p className="mt-4 text-lg text-black">
          Welcome to FocusHaven! We're glad to see you.
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-8 mb-10 mt-10 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-black hover:bg-slate-500 transition-all duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mb-4 w-full">
          <p className="text-gray-600 text-center mb-2">Or sign up with</p>
          <div className="flex justify-between space-x-2">
            <button className="border border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-bold py-2 px-4 rounded-full flex items-center justify-center w-1/3">
              <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 mr-2" />{" "}
              Facebook
            </button>
            <button className="border border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-bold py-2 px-4 rounded-full flex items-center justify-center w-1/3">
              <FontAwesomeIcon icon={faGoogle} className="w-6 h-6 mr-2" />{" "}
              Google
            </button>
            <button className="border border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-bold py-2 px-4 rounded-full flex items-center justify-center w-1/3">
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 mr-2" />{" "}
              Twitter
            </button>
          </div>
        </div>
        <div className="text-gray-600">
          Already have an account?{" "}
          <Link to="/signIn" className="text-black hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
