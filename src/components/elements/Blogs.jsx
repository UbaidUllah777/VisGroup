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
    blogDescription:
      "UAliquip non irure eiusmod ex culpa laborum reprehenderit. Aliqua ex in non anim ex id dolor in in consectetur elit officia. Ad labore dolor veniam id non officia non. Eu exercitation nostrud duis quis sint do deserunt laboris aute aliquip. Enim occaecat ex laboris consectetur tempor sint consequat non officia anim nisi esse. Proident proident eu eiusmod occaecat proident ex sit duis occaecat. Ad sunt officia ut id velit consequat eu aliquip nisi nostrud enim aute dolor.t tempor commodo anim amet elit incididunt et consequat deserunt cillum pariatur sit esse. Do ad ut sint esse ut duis deserunt adipisicing consequat. Proident proident voluptate voluptate ipsum voluptate id eiusmod ullamco officia aliqua deserunt voluptate ipsum nulla. Sunt ex culpa velit in enim pariatur adipisicing est.",
  },
  {
    id: 1,
    tag: "Network Benchmarking",
    title: "Aliquip commodo excepteur proident irure..",
    meta: "New",
    date: "01 Aug 23",
    img: "",
    blogDescription:
      "UAliquip non irure eiusmod ex culpa laborum reprehenderit. Aliqua ex in non anim ex id dolor in in consectetur elit officia. Ad labore dolor veniam id non officia non. Eu exercitation nostrud duis quis sint do deserunt laboris aute aliquip. Enim occaecat ex laboris consectetur tempor sint consequat non officia anim nisi esse. Proident proident eu eiusmod occaecat proident ex sit duis occaecat. Ad sunt officia ut id velit consequat eu aliquip nisi nostrud enim aute dolor.t tempor commodo anim amet elit incididunt et consequat deserunt cillum pariatur sit esse. Do ad ut sint esse ut duis deserunt adipisicing consequat. Proident proident voluptate voluptate ipsum voluptate id eiusmod ullamco officia aliqua deserunt voluptate ipsum nulla. Sunt ex culpa velit in enim pariatur adipisicing est.",
  },
  {
    id: 2,
    tag: " Information & Technology",
    title: "Laboris cupidatae occaecat incididunt consectetur adipisicing.",
    meta: "New",
    date: "02 Aug 23",
    img: "",
    blogDescription:
      "UAliquip non irure eiusmod ex culpa laborum reprehenderit. Aliqua ex in non anim ex id dolor in in consectetur elit officia. Ad labore dolor veniam id non officia non. Eu exercitation nostrud duis quis sint do deserunt laboris aute aliquip. Enim occaecat ex laboris consectetur tempor sint consequat non officia anim nisi esse. Proident proident eu eiusmod occaecat proident ex sit duis occaecat. Ad sunt officia ut id velit consequat eu aliquip nisi nostrud enim aute dolor.t tempor commodo anim amet elit incididunt et consequat deserunt cillum pariatur sit esse. Do ad ut sint esse ut duis deserunt adipisicing consequat. Proident proident voluptate voluptate ipsum voluptate id eiusmod ullamco officia aliqua deserunt voluptate ipsum nulla. Sunt ex culpa velit in enim pariatur adipisicing est.",
  },
  {
    id: 3,
    tag: "Infotainment",
    title: "Incididunt laborum aliquip labore dolore.",
    meta: "Featured",
    date: "18 July 22",
    img: "",
    blogDescription:
      "UAliquip non irure eiusmod ex culpa laborum reprehenderit. Aliqua ex in non anim ex id dolor in in consectetur elit officia. Ad labore dolor veniam id non officia non. Eu exercitation nostrud duis quis sint do deserunt laboris aute aliquip. Enim occaecat ex laboris consectetur tempor sint consequat non officia anim nisi esse. Proident proident eu eiusmod occaecat proident ex sit duis occaecat. Ad sunt officia ut id velit consequat eu aliquip nisi nostrud enim aute dolor.t tempor commodo anim amet elit incididunt et consequat deserunt cillum pariatur sit esse. Do ad ut sint esse ut duis deserunt adipisicing consequat. Proident proident voluptate voluptate ipsum voluptate id eiusmod ullamco officia aliqua deserunt voluptate ipsum nulla. Sunt ex culpa velit in enim pariatur adipisicing est.",
  },

  {
    id: 33,
    tag: "Last Blog",
    title: "Incididunt laborum aliquip labore dolore.",
    meta: "Featured",
    date: "18 July 22",
    img: "",
    blogDescription:
      "UAliquip non irure eiusmod ex culpa laborum reprehenderit. Aliqua ex in non anim ex id dolor in in consectetur elit officia. Ad labore dolor veniam id non officia non. Eu exercitation nostrud duis quis sint do deserunt laboris aute aliquip. Enim occaecat ex laboris consectetur tempor sint consequat non officia anim nisi esse. Proident proident eu eiusmod occaecat proident ex sit duis occaecat. Ad sunt officia ut id velit consequat eu aliquip nisi nostrud enim aute dolor.t tempor commodo anim amet elit incididunt et consequat deserunt cillum pariatur sit esse. Do ad ut sint esse ut duis deserunt adipisicing consequat. Proident proident voluptate voluptate ipsum voluptate id eiusmod ullamco officia aliqua deserunt voluptate ipsum nulla. Sunt ex culpa velit in enim pariatur adipisicing est.",
  },
];

const AllBlogs = ({ className = "" }) => {
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
  const sortedBlogs = [...blogContent].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

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

export default AllBlogs;
