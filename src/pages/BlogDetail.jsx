import React from "react";
import { useParams } from "react-router-dom";
import { blogContent } from "../components/blogs/Blog";

const BlogDetail = () => {
  const { id } = useParams(); // Get the id parameter from the URL

  // Find the blog with the matching id from your blogContent array
  const blog = blogContent.find((item) => item.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      {/* Display blog details */}
      <h1>{blog.title}</h1>
      <p>{blog.blogDescription}</p>
      {/* Add more elements to display other details */}
    </div>
  );
};

export default BlogDetail;
