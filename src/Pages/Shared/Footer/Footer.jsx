import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10 p-8">
      <div className="max-w-screen-xl mx-auto flex justify-between items-start">
        <div>
          <div className="mx-auto text-center my-5">
            <p className="text-5xl">FocusHaven</p>
            <p className="text-sm tracking-widest mt-2">PHOTOGRAPHY</p>
          </div>
          <p className="text-gray-500">&copy;2024, All Right Reserved.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Main Office</h4>
          <p className="flex items-center mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            Austria 82 12th Street, Office 14, LA
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
            10001234567
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-500 hover:text-white">
                Our Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-500 hover:text-white">
                Our Team
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-500 hover:text-white">
                Portfolio
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-500 hover:text-white">
                Shortcodes
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-500 hover:text-white">
                Typography
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Socials</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
