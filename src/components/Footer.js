import { BsFillHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-fC dark:bg-dPrimary dark:text-primaryC">
      <div className="text-primaryC p-10 w-screen flex justify-center text-center items-center ">
        <h1>Made with</h1>
        <div className="px-1 link link-underline link-underline-black">
          <BsFillHeartFill />
        </div>
        <h1>by Peter Johnson</h1>
      </div>
    </div>
  );
};

export default Footer;
