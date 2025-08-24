"use client";

import AOS from "aos";
import { useEffect, useState } from "react";
import blogs from "../../data/blogs";

export default function BlogsSection() {
  const [visibleBlogs, setVisibleBlogs] = useState(6); // Show 6 initially

  useEffect(() => {
    AOS.init();
  }, []);

  const handleViewMore = () => {
    setVisibleBlogs((prev) => prev + 6); // Show 6 more on click
  };

  return (
    <section id="blogs" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Blogs</h2>
        <p>
          Read expert insights, health tips, and stories from our medical
          professionals.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {blogs.slice(0, visibleBlogs).map((blog) => (
            <div key={blog.id} className="col-md-4" data-aos="fade-up">
              <a href={blog.link}>
                <div className="card border-0">
                  <div className="mb-3">
                    <img
                      src={blog.image}
                      className="card-img-top rounded-2"
                      alt={blog.title}
                    />
                  </div>
                  <div className="card-body p-0">
                    <span>{blog.category}</span>
                    <h5 className="pb-2">{blog.title}</h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleBlogs < blogs.length && (
          <div className="d-flex justify-content-center mt-4">
            <button
              onClick={handleViewMore}
              className="btn btn-accent btn-accent-pill"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
