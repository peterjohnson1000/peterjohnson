import Data from "./data.json";
const Hero = () => {
  return (
    <div className="w-screen flex justify-center text-center dark:bg-dPrimary dark:text-primaryC">
      <div className=" my-40 w-128 sm:mb-10 sm:mt-20">
        <div className="pb-10">
          <h1 className="text-5xl sm:text-4xl">{Data[0].name}</h1>
        </div>
        <div className="text-xl font-light pb-5 sm:text-lg px-3">
          <p>
            <span className="font-normal">{Data[0].intro1}</span>
            {Data[0].intro2}
          </p>
        </div>
        <div className="text-xl font-light sm:text-lg px-3">
          <p>
            {Data[0].other}
            <span className="font-normal">{Data[0].youtube}</span> {Data[0].as}
            <span className="font-normal">{Data[0].skillshare}</span>
            {Data[0].serving}
          </p>
        </div>
        <div className="text-xl mt-7 font-light sm:text-lg px-3">
          <p>
            Currently working on :
            <a
              className="font-bold cursor-pointer pl-1"
              href="https://gestify.netlify.app/"
              target="_blank"
            >
              Gestify.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
