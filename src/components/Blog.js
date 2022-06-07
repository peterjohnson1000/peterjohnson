import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchDetails = async () => {
    const response = await axios.get(
      "https://dev.to/api/articles?username=peterjohnson"
    );
    const dataCollection = response.data;
    dataCollection.map((blog) => {
      //thumbnail: blog.cover_image,
      const title = blog.title;
      //   console.log(title);
      //   setBlogs([...blogs, title]);
      setBlogs([...blogs, { title: title }]);
      //   setBlogs(title);
      //   console.log(blogs);
    });
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  //   blogs.map((blog) => {
  //     console.log(blog.title);
  //   });

  return (
    <div>
      <BlogCard />
    </div>
  );
};

export default Blog;
