import { useEffect, useRef, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import { BsArrowRight } from "react-icons/bs";

const Blog = () => {
  const blogSectionRef = useRef(null);
  const [articles, setarticles] = useState([]);

  const fetchDetails = async () => {
    const response = await axios.get(
      "https://dev.to/api/articles?username=peterjohnson&state=all"
    );
    setarticles(response.data);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div
      className="bg-secondaryC dark:bg-dSecondary dark:text-primaryC"
      ref={blogSectionRef}
    >
      <div className="container">
        <div className="flex justify-between">
          <div>
            <h3 className="inline-block px-5 rounded-3xl uppercase bg-primaryC text-shC mx-5 my-10 dark:bg-dHeading dark:text-dHeadingC">
              {articles == "" ? "Fetching data" : "Blogs"}
            </h3>
          </div>
          <div className="flex items-center pr-5">
            <h3 className="pr-2 cursor-pointer text-ghC link link-underline link-underline-black dark:text-dHeadingC">
              <a href="https://dev.to/peterjohnson" target="_blank">
                All Blogs
              </a>
            </h3>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>

        <div className=" pb-10 grid gap-10 grid-cols-3 grid-rows-1 text-primaryC px-5 sm:grid-cols-1 xll:grid-cols-2 md:grid-cols-1">
          {articles.map((article) => {
            return <BlogCard title={article.title} url={article.url} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
