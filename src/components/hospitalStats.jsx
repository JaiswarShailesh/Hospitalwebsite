"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HospitalStats() {
  useEffect(() => {
    // Initialize AOS
    AOS.init();

    // Dynamically import PureCounter only on client
    import("@srexi/purecounterjs").then((module) => {
      new module.default();
    });
  }, []);

  return (
    <section id="stats" className="stats section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Doctors */}
          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="fa-solid fa-user-doctor"></i>
            <div className="stats-item">
              <span
                data-purecounter-start="0"
                data-purecounter-end="85"
                data-purecounter-duration="2"
                className="purecounter"
              />
              <p>Doctors</p>
            </div>
          </div>

          {/* Departments */}
          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="fa-regular fa-hospital"></i>
            <div className="stats-item">
              <span
                data-purecounter-start="0"
                data-purecounter-end="18"
                data-purecounter-duration="2"
                className="purecounter"
              />
              <p>Departments</p>
            </div>
          </div>

          {/* Labs */}
          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="fas fa-flask"></i>
            <div className="stats-item">
              <span
                data-purecounter-start="0"
                data-purecounter-end="12"
                data-purecounter-duration="2"
                className="purecounter"
              />
              <p>Research Labs</p>
            </div>
          </div>

          {/* Awards */}
          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="fas fa-award"></i>
            <div className="stats-item">
              <span
                data-purecounter-start="0"
                data-purecounter-end="150"
                data-purecounter-duration="2"
                className="purecounter"
              />
              <p>Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
