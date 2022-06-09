// import "bootstrap/dist/css/bootstrap.css";
// import { Nav, Navbar } from "react-bootstrap";
import {
  BsFillMoonFill,
  BsSunFill,
  BsFillLightningChargeFill,
} from "react-icons/bs";
import "../App.css";

const Header = () => {
  return (
    <div className="container flex items-center my-4 justify-between text-xl sm:text-lg px-10 ">
      <div>
        <BsFillLightningChargeFill />
      </div>
      <div className="flex items-center">
        <a className="cursor-pointer link link-underline link-underline-black">
          Writing
        </a>
        <a className="ml-5 cursor-pointer link link-underline link-underline-black">
          About
        </a>
        <div className="pl-20 sm:pl-8">
          <BsFillMoonFill />
        </div>
      </div>
    </div>
  );
};

export default Header;
