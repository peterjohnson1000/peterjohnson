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
        <BsFillLightningChargeFill />
      </div>
      <div className="flex items-center">
        <a className="cursor-pointer link link-underline link-underline-black">
          Writing
        </a>
        <a className="ml-5 cursor-pointer link link-underline link-underline-black">
          About
        </a>
        <div className="pl-20 sm:pl-8" onClick={() => setTheme(colorTheme)}>
          {colorTheme === "light" ? <BsSunFill /> : <BsFillMoonFill />}
        </div>
      </div>
    </div>
  );
};

export default Header;
