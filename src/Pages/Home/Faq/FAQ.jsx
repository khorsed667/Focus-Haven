import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FAQ = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-5 px-4 sm:px-6 lg:px-8 mb-10">
      <div className="text-3xl text-center my-16">
        <p>
          Do You Have any question?
          <br />
          Get Help From Us.
        </p>
      </div>
      <div className="w-full md:w-2/3 mx-auto flex flex-col md:flex-row justify-between items-center my-5 space-y-4 md:space-y-0">
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
          <a href="#" className="flex items-center space-x-2 text-lg">
            <FontAwesomeIcon icon={faUserShield} />
            <span>Chat live With our Support team</span>
          </a>
        </div>
        <div className="flex items-center justify-center md:justify-end w-full md:w-auto">
          <a href="#" className="flex items-center space-x-2 text-lg">
            <FontAwesomeIcon icon={faUserShield} />
            <span>Browsing Our FAQ</span>
          </a>
        </div>
      </div>
      <div className="w-full md:w-2/3 mx-auto my-5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-2/3">
          <input
            className="w-full md:w-2/3 bg-slate-300 text-xl px-5 py-2 outline-none mb-2"
            placeholder="Input your email"
            type="email"
          />
          <input
            className="w-full md:w-2/3 bg-slate-300 text-xl px-5 py-2 text-black outline-none mb-2 md:mb-0"
            placeholder="Input your queries"
            type="text"
          />
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <button className="bg-black text-white text-xl px-5 py-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
