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
    <div className="container flex items-center my-4 justify-between">
      <div>
        <BsFillLightningChargeFill />
      </div>
      <div className="flex items-center">
        <a>Writing</a>
        <a className="pl-10">About</a>
        <div className="pl-20">
          <BsFillMoonFill />
        </div>
      </div>
    </div>
  );
};

export default Header;
