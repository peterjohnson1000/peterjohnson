const SkillCard = () => {
  return (
    <div>
      <section className="container">
        <div className="">
          <div className="grid gap-10 grid-cols-3 grid-rows-2 text-primaryC">
            <div className=" p-5 rounded-lg">
              <h2 className="text-2xl pb-5">Programming Languages</h2>
              <p>Java</p>
              <p>Python</p>
              <p>C/C++</p>
            </div>

            <div className="bg-shC p-5 rounded-lg">
              <h2 className="text-2xl pb-5">Development</h2>
              <p>React.js</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>Google Firebase</p>
              <p>Heroku</p>
            </div>

            <div className="bg-shC p-5 rounded-lg">
              <h2 className="text-2xl pb-5">Software & Tools</h2>
              <p>Git</p>
              <p>LaTex</p>
            </div>

            <div className="bg-shC p-5 rounded-lg">
              <h2 className="text-2xl pb-5">Wireframing & Designing</h2>
              <p>Figma</p>
              <p>Adobe XD</p>
            </div>

            <div className="bg-shC p-5 rounded-lg">
              <h2 className="text-2xl pb-5">Operating Systems</h2>
              <p>Mac OS</p>
              <p>Windows</p>
              <p>Ubuntu</p>
            </div>

            <div className="bg-shC p-5 rounded-lg">
              <h2 className="text-2xl pb-5">Content Creation</h2>
              <p>Youtube @Peter.in</p>
              <p>Instructor @Udemy</p>
              <p>Teacher @Skillshare</p>
              <p>Writer @Dev.to</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillCard;
