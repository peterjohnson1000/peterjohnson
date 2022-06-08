const BlogCard = ({ title, url }) => {
  return (
    <div className="bg-gradient-to-l from-green-500 to-green-700 p-5 rounded-lg md:h-52">
      <h2 className="text-2xl pb-5">{title}</h2>
      <h3 className="inline-block px-3 cursor-pointer mt-5 rounded-3xl uppercase bg-primaryC text-shC text-sm">
        <a href={url} target="_blank">
          Read More{" "}
        </a>
      </h3>
    </div>
  );
};

export default BlogCard;
