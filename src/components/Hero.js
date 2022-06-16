const Hero = () => {
  return (
    <div className="w-screen flex justify-center text-center dark:bg-dPrimary dark:text-primaryC">
      <div className=" my-40 w-128 sm:mb-10 sm:mt-20">
        <div className="pb-10">
          <h1 className="text-5xl sm:text-4xl">Hi, I'm Peter!</h1>
        </div>
        <div className="text-xl font-light pb-5 sm:text-lg px-3">
          <p>
            <span className="font-normal">Information Technology </span>
            student from Kerala, India. I’m passionate about Web Technologies &
            sharing the knowledge I possess.
          </p>
        </div>
        <div className="text-xl font-light sm:text-lg px-3">
          <p>
            On the other side I make videos on my YouTube Channel
            <span className="font-normal"> Peter.in</span> & courses as a
            <span className="font-normal"> Skillshare Teacher </span> serving
            over 3500 Students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
