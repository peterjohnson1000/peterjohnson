import { Link } from "react-router-dom";
import {
  BsFillMoonFill,
  BsSunFill,
  BsFillLightningChargeFill,
  BsFillShareFill,
  BsCheckCircleFill,
} from "react-icons/bs";
import "../App.css";
import DarkMode from "../hooks/DarkMode";
import { useState } from "react";

const Header = () => {
  const [setTheme, colorTheme] = DarkMode();
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="container flex items-center py-4 justify-between text-xl sm:text-lg px-5 dark:bg-dPrimary dark:text-primaryC">
      <div>
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
        <div
          className="ml-14 cursor-pointer sm:ml-10"
          onClick={() => {
            navigator.clipboard.writeText("https://peterjohnson.netlify.app/");
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 5000);
          }}
        >
          {/* {isCopied === true ? <BsCheckCircleFill /> : <BsFillShareFill />} */}
          {isCopied === true ? (
            <div className="font-light text-lg">Copied!</div>
          ) : (
            <BsFillShareFill />
          )}
        </div>
        <div
          className="ml-10 cursor-pointer"
          onClick={() => setTheme(colorTheme)}
        >
          {colorTheme === "light" ? <BsSunFill /> : <BsFillMoonFill />}
        </div>
      </div>
    </div>
  );
};

export default Header;
