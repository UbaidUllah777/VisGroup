import React from "react";
import { Link } from "react-router-dom";
// logo icon

const blogContent = [
  {
    id: 11,
    tag: "Network Benchmarking11",
    title: "Aliquip commodo excepteur proident irure..",
    meta: "New",
    date: "18 Sep 23",
    img: "",
  },
  {
    id: 1,
    tag: "Network Benchmarking",
    title: "Aliquip commodo excepteur proident irure..",
    meta: "New",
    date: "01 Aug 23",
    img: "",
  },
  {
    id: 2,
    tag: " Information & Technology",
    title: "Laboris cupidatae occaecat incididunt consectetur adipisicing.",
    meta: "New",
    date: "02 Aug 23",
    img: "",
  },
  {
    id: 3,
    tag: "Infotainment",
    title: "Incididunt laborum aliquip labore dolore.",
    meta: "Featured",
    date: "18 July 22",
    img: "",
  },
  
  {
    id: 33,
    tag: "Last Blog",
    title: "Incididunt laborum aliquip labore dolore.",
    meta: "Featured",
    date: "18 July 22",
    img: "",
  },
];


const Blog = ({ className = "" }) => {
 

  return (
    <>
      {blogContent.map((item) => (
          <div className="col-lg-4 col-md-6 mb-20 d-flex" key={item.id}>
          <article className={`blog-meta-one feature-post ${className}`}>
            <Link to="/blog-details-v1" className="tag">
              {item.tag}
            </Link>
            <Link to="/blog-details-v1" className="title">
              {item.title}
            </Link>
            <div className="post-info">
               <span className="date">{item.date}</span>
            </div>
           
            {/* <!-- /.post-footer --> */}
          </article>
          {/* <!-- /.blog-meta-one --> */}
        </div>
      ))}
    </>
  );
};


export const LatestThreeBlogs = ({ className = "" }) => {
 
   // Sort the blog content array by date in descending order
   const sortedBlogs = [...blogContent].sort((a, b) => new Date(b.date) - new Date(a.date));

   // Select the latest three blogs
   const latestThreeBlogs = sortedBlogs.slice(0, 3);
  return (
    <>
      {latestThreeBlogs.map((item) => (
        <div className="col-lg-4 col-md-6 d-flex" key={item.id}>
          <article className={`blog-meta-one feature-post ${className}`}>
            <Link to="/blog-details-v1" className="tag">
              {item.tag}
            </Link>
            <Link to="/blog-details-v1" className="title">
              {item.title}
            </Link>
            <div className="post-info">
              {item.meta} - <span className="date">{item.date}</span>
            </div>
           
            {/* <!-- /.post-footer --> */}
          </article>
          {/* <!-- /.blog-meta-one --> */}
        </div>
      ))}
    </>
  );
};


export default Blog;
