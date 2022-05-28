const Hero = () => {
  return (
    <div className="container hero">
      <div>
        <h1 className="myName">Hi, I'm Peter!</h1>
      </div>
      <div className="myBreifInfo">
        <p>
          <span style={{ fontWeight: 600 }}>Information Technology </span>
          student from Kerala, India. <br />
          I’m passionate about Web Technologies & <br />
          sharing the knowledge I possess.
        </p>
      </div>
      <div className="breifWhatIDo">
        <p>
          On the other side I make videos on my YouTube Channel
          <span style={{ fontWeight: 600 }}> Peter.in</span> & <br /> courses as
          a<span style={{ fontWeight: 600 }}> Skillshare Teacher </span> serving
          over 3500 Students.
        </p>
      </div>
    </div>
  );
};

export default Hero;
