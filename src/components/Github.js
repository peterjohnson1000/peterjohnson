import { BsArrowRight } from "react-icons/bs";

const Github = () => {
  return (
    <div className="bg-primaryC">
      <div className="container pb-20">
        <div className="flex justify-between">
          <div>
            <h3 className="inline-block px-5 rounded-3xl uppercase bg-secondaryC text-ghC mx-5 my-10">
              Projects
            </h3>
          </div>
          <div className="flex items-center pr-5">
            <h3 className="pr-2 cursor-pointer text-ghC link link-underline link-underline-black">
              <a href="https://github.com/peterjohnson1000" target="_blank">
                Github
              </a>
            </h3>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="pb-10 grid gap-4 grid-cols-3 grid-rows-1 text-primaryC px-5 sm:grid-cols-1 xll:grid-cols-2 md:grid-cols-1">
          <div className="bg-blue-500 p-5 rounded-lg col-span-2 md:h-52 xll:col-span-1 smm:h-72">
            <div className="flex justify-between">
              <h2 className="text-2xl pb-5">url-shortner-webapp</h2>
              <h2 className="inline-block h-6 px-4 pb-6 rounded-3xl cursor-pointer bg-primaryC text-shC mx-5">
                <a
                  href="https://smallurlmaker.herokuapp.com/app"
                  target="_blank"
                >
                  demo
                </a>
              </h2>
            </div>

            <p className="font-light">
              This web-app reads long URL from the user and then converts it to
              a short URL which can be copied by the user. React is used in the
              Front-End(Client), Python Flask as the Back-End(Server) and
              Firebase as the Database.
            </p>
          </div>

          <div className="bg-phC text-pcC p-5 rounded-lg md:h-52">
            <div className="flex justify-between">
              <h2 className="text-2xl pb-5">todoapp-react</h2>
              {/* <h2 className="inline-block h-6 px-5 pb-6 rounded-3xl uppercase bg-primaryC text-shC mx-5">
                demo
              </h2> */}
            </div>

            <p className="font-light">
              This todo app is implemented using React and state management is
              performed using context-api along with reducers and actions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;
