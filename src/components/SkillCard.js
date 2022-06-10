const SkillCard = () => {
  return (
    <div>
      <section className="container pb-10">
        <div className="">
          <div className="grid gap-10 grid-cols-3 grid-rows-2 text-primaryC px-5 sm:grid-cols-1 xll:grid-cols-2 md:grid-cols-1">
            <div className="bg-gradient-to-l from-green-500 to-green-700 p-5 rounded-lg md:h-52">
              <h2 className="text-2xl pb-5">Programming Languages</h2>
              <p>Java</p>
              <p>Python</p>
              <p>C/C++</p>
            </div>

            <div className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 p-5 rounded-lg">
              <h2 className="text-2xl pb-5">Development</h2>
              <p>React.js</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>Google Firebase</p>
              <p>Heroku</p>
            </div>

            <div className="bg-gradient-to-l from-red-500 to-red-800 p-5 rounded-lg md:h-52">
              <h2 className="text-2xl pb-5">Software & Tools</h2>
              <p>Git</p>
              <p>LaTex</p>
            </div>

            <div className="bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900 p-5 rounded-lg md:h-52">
              <h2 className="text-2xl pb-5">Wireframing & Designing</h2>
              <p>Figma</p>
              <p>Adobe XD</p>
            </div>

            <div className="bg-gradient-to-l from-gray-700 via-gray-900 to-black p-5 rounded-lg md:h-52 dark:bg-gradient-to-r dark:from-fuchsia-600 dark:to-pink-600">
              <h2 className="text-2xl pb-5">Operating Systems</h2>
              <p>Mac OS</p>
              <p>Windows</p>
              <p>Ubuntu</p>
            </div>

            <div className="bg-gradient-to-r from-rose-700 to-pink-600 p-5 rounded-lg md:h-52">
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
