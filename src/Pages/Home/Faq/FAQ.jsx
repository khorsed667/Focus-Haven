import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FAQ = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-5">
      <div className="text-3xl text-center my-16">
        <p>
          Do You Have any question?
          <br />
          Get Help From Us.
        </p>
      </div>
      <div className="w-2/3 mx-auto flex justify-between items-center my-5">
        <div className="ms-5">
          <a href="#"><FontAwesomeIcon icon={faUserShield} />  Chat live With our Support team</a>
        </div>
        <div className="me-5">
          <a href="#"><FontAwesomeIcon icon={faUserShield} />  Browsing Our FAQ</a>
        </div>
      </div>
      <div className="w-2/3 mx-auto my-5 flex justify-between items-center">
        <div className="w-2/3">
          <input className="w-2/3 bg-slate-300 text-xl px-5 py-2 outline-none mb-2" placeholder="Input your email" type="email" /><br />
          <input className="w-2/3 bg-slate-300 text-xl px-5 py-2 text-black outline-none mb-2" placeholder="Input your quries" type="text" />
        </div>
        <div className="1/3">
          <button className="bg-black text-white text-xl px-5 py-2">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
