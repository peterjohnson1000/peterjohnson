const Hero = () => {
  return (
    <div className="hero container">
      <div className="briefWrapper">
        <div>
          <h1 className="myName">Hi, I'm Peter!</h1>
        </div>
        <div className="myBreifInfo">
          <p>
            <span style={{ fontWeight: 600 }}>Information Technology </span>
            student from Kerala, India. I’m passionate about Web Technologies &
            sharing the knowledge I possess.
          </p>
        </div>
        <div className="breifWhatIDo">
          <p>
            On the other side I make videos on my YouTube Channel
            <span style={{ fontWeight: 600 }}> Peter.in</span> & courses as a
            <span style={{ fontWeight: 600 }}> Skillshare Teacher </span>{" "}
            serving over 3500 Students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
