const About = () => {
  return (
    <div className="container px-10">
      <h1 className="text-5xl py-10 font-semibold">About</h1>
      <div className="flex xll:flex-col">
        <div className="pr-5 max-w-xs">
          <img
            src="./image/myPhoto.JPG"
            alt="myphoto"
            className="w-80 rounded-2xl"
          />
        </div>
        <div className="p-5 max-w-2xl sm:p-0 xll:max-w-5xl xll:p-0 xll:pt-5">
          <h2 className="text-3xl font-semibold pb-5 sm:pt-5">
            Hi, I'm Peter!
          </h2>
          <p className="text-2xl font-light">
            I'm a Information Technology undergraduate from Kerala, India. I’m
            passionate about Web Technologies & sharing the knowledge I possess.
            Currently polishing my front-end skills by building tons of projects
            mainly using React.js
          </p>
        </div>
      </div>
      <div className="text-2xl font-light pt-10 max-w-5xl">
        <p className="pb-5">
          Through Skillshare as a platform, I share my knowledge on Web & Mobile
          Development, Software deep-dives and Videography in the form of
          detailed videos. Currently serving a community of over 3500 Students
          and has a total watch time of over 66000 minutes.
        </p>
        <p className="pb-10">
          Creating videos on Web Development, Cloud and other latest
          technologies through my YouTube Channel "Peter.in". This channel
          serves a community of individuals who are passionate about technology,
          now with over 11000 subscribers.
        </p>
      </div>
    </div>
  );
};

export default About;
