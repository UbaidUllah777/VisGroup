// Libraries
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Components
import Sidebar from "../components/common/header/sidebar/Sidebar";
import Header from "../components/common/header/Header";
import Seo from "../components/common/seo/Seo";
import FooterMenuList from "../components/common/footer/FooterMenuList";
import CopyrightFooter from "../components/common/footer/CopyrightFooter";

// css
import classes from "../components/blogs/blogDetail.module.css";

// Data
import { blogContent } from "../components/blogs/Blog";

const BlogDetail = () => {
  const { id } = useParams(); // Get the id parameter from the URL

  // Find the blog with the matching id from your blogContent array
  const blog = blogContent.find((item) => item.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Sort the blog content array by date in descending order
  const sortedBlogs = [...blogContent].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Select the latest Five blogs
  const latestFiveBlogs = sortedBlogs.slice(0, 5);
  return (
    <div className="main-page-wrapper">
      <Seo title={blog.title} />

      <Sidebar />

      <Header />

      {/* Banner:start */}
      <div className="inside-hero-three">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-12">
              <h2 className="page-title font-recoleta">{blog.title}</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Banner : End */}

      {/* About Us: start */}
      <div className="vcamp-text-block-one mt-20 lg-mt-120">
        <div className="container">
          <div className="row align-items-center" style={{ marginTop: "20px" }}>
            <div className="col-md-8 col-12">
              <div
                className={classes.BlogImageWrapper}
                style={{ paddingTop: "10px" }}
              >
                <img src={blog.img} alt={blog.title} />
              </div>
            </div>

            {/* Latest Blogs On SIde: Start */}
            <div className="col-md-4 col-12">
              <h5 className={classes.LatestBlogsHeading}>Latest Blogs</h5>
              {latestFiveBlogs.map((item) => (
                <li className={classes.LatestBlogsList} key={item.id}>
                  <Link to={`/blogs/${item.id}`} className="title">
                    {item.title}
                  </Link>
                </li>
              ))}
            </div>
            {/* Latest Blogs On SIde: End */}
          </div>
          <div className="row mt-50">
            <div className="col-12">
              <p className={classes.blogDate}>{blog.date}</p>
              {blog.paragraphs.map((paragraph, index) => (
                <div key={index}>
                  <h4 className={classes.blogDetailParaHeading}>
                    {paragraph.paragraphHeading}
                  </h4>
                  <p className={classes.blogDetailParagragh}>
                    {paragraph.paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* About Us : ENd */}

      {/* Footer : start */}
      <footer className="vcamp-footer-two pt-150 lg-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-2 mb-40 d-flex align-items-center justify-content-center">
              <div className="logo">
                <Link to="/">
                  <img
                    src={require("../assets/images/logo/visLogo.png")}
                    alt="Vis Logo"
                    style={{ maxWidth: "200px", height: "auto" }}
                  />
                </Link>
                <p style={{ fontFamily: "Recoleta" }}>
                  We offer digital services in network benchmarking, software
                  development, and mobile network testing. Contact us for
                  details.
                </p>
              </div>
            </div>
            {/* End .col */}
            <FooterMenuList />
          </div>
        </div>
        {/* End .container */}

        <div className="container">
          <div className="bottom-footer">
            <CopyrightFooter />
          </div>
        </div>
        {/* End .container */}
      </footer>
      {/* Footer : End */}
    </div>
  );
};

export default BlogDetail;
