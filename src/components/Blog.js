import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

const Blog = () => {
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
    <div className="bg-secondaryC dark:bg-dSecondary dark:text-primaryC">
      <div className="container">
        <h3 className="inline-block px-5 rounded-3xl uppercase bg-primaryC text-shC mx-5 my-10 dark:bg-dHeading dark:text-dHeadingC">
          {/* Blogs */}
          {articles == "" ? "Fetching data" : "Blogs"}
        </h3>
        <div className=" pb-10 grid gap-10 grid-cols-3 grid-rows-1 text-primaryC px-5 sm:grid-cols-1 xll:grid-cols-2 md:grid-cols-1">
          {articles.map((article) => {
            return <BlogCard title={article.title} url={article.url} />;
          })}
        </div>
      </div>
    </div>

    // <div className="articles">
    //   {articles.map((article) => {
    //     return (
    //       <div key={article.id} className="article">
    //         <a href={article.url} className="title">
    //           {article.title}
    //         </a>
    //         <img src={article.social_image} alt={article.title}></img>
    //         <p>
    //           {article.description} <a href={article.url}>Read More.</a>
    //         </p>
    //         <p>
    //           {article.readable_publish_date} | {article.tags}{" "}
    //         </p>
    //         <p> {article.public_reactions_count} reactions</p>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default Blog;
