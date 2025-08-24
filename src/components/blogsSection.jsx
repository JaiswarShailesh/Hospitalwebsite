"use client";

import AOS from "aos";
import Link from "next/link";
import { useEffect } from "react";

export default function BlogsSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  const blogs = [
    {
      id: 1,
      title: "Community Outreach",
      category: "Free Mega Health Camp in Shirpur",
      image: "/images/blogs/hospital_opening.png",
      link: "",
    },
    {
      id: 2,
      title: "Grand Opening of SVKM’s Hospital",
      category: "Hospital News",
      image: "/images/blogs/Hospital_beds.png",
      link: "",
    },
    {
      id: 3,
      title: "300-Bed Facility Begins Phase-1 Services",
      category: "Infrastructure Update",
      image: "/images/blogs/Health_camp.png",
      link: "",
    },
  ];

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
          {blogs.map((blog) => (
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

          {/* View All Button */}
          <div className="d-flex justify-content-center">
            <Link href="/blogs" className="btn btn-accent btn-accent-pill">
              View all
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
