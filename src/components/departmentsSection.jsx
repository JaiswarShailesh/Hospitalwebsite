"use client";

import AOS from "aos";
import { useEffect } from "react";
import { departments } from "../data/departments";
import Link from "next/link";

export default function DepartmentsSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="departments" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Departments</h2>
        <p>
          Explore our wide range of specialized departments dedicated to quality
          care and innovation
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          {departments[0].items.slice(0, 6).map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100 * (itemIndex + 1)}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <Link
                  href={`/departments/${
                    item.slug
                      ? item.slug
                      : item.title.toLowerCase().replace(/\s+/g, "-")
                  }`}
                  className="stretched-link"
                >
                  <h3>{item.title}</h3>
                </Link>

                <p>{item.description}</p>
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-center">
            <Link
              href="/departments"
              className="btn btn-accent btn-accent-pill"
            >
              View all
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
