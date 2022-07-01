import { Link } from "react-router-dom";
import {
  BsFillMoonFill,
  BsSunFill,
  BsFillLightningChargeFill,
} from "react-icons/bs";
import "../App.css";
import DarkMode from "../hooks/DarkMode";

const Header = () => {
  const [setTheme, colorTheme] = DarkMode();

  return (
    <div className="container flex items-center py-4 justify-between text-xl sm:text-lg px-10 dark:bg-dPrimary dark:text-primaryC">
      <div>
        {/* <BsFillLightningChargeFill /> */}
        <Link to="/">
          <BsFillLightningChargeFill />
        </Link>
      </div>
      <div className="flex items-center">
        <a className="cursor-pointer link link-underline link-underline-black">
          Writing
        </a>
        <Link
          to="/about"
          className="ml-5 cursor-pointer link link-underline link-underline-black"
        >
          About
        </Link>
        <div className="pl-20 sm:pl-8" onClick={() => setTheme(colorTheme)}>
          {colorTheme === "light" ? <BsSunFill /> : <BsFillMoonFill />}
        </div>
      </div>
    </div>
  );
};

export default Header;
