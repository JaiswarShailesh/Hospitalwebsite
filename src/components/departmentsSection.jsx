"use client";

import AOS from "aos";
import { useEffect } from "react";

// In-memory departments data
const departments = [
  {
    title: "Radiology",
    description:
      "Advanced imaging services for accurate diagnosis and efficient treatment planning.",
    icon: "fa-solid fa-x-ray",
    link: "radiology.html",
    delay: 100,
  },
  {
    title: "Obstetrics & Gynecology",
    description:
      "Promoting public health through prevention, education, and outreach.",
    icon: "fas fa-person-pregnant",
    link: "gynecology.html",
    delay: 300,
  },
  {
    title: "Cardiology",
    description:
      "Advanced imaging services for accurate diagnosis and efficient treatment planning.",
    icon: "fa-solid fa-heart-pulse",
    link: "#",
    delay: 100,
  },
  {
    title: "Dermatology",
    description:
      "Empowering people and processes for seamless healthcare delivery.",
    icon: "fas fa-syringe",
    link: "#",
    delay: 600,
  },
  {
    title: "Neurology",
    description:
      "Comprehensive care for women’s health across all life stages.",
    icon: "fa-solid fa-brain",
    link: "#",
    delay: 200,
  },
  {
    title: "Pediatrics",
    description:
      "Safe and timely blood collection, storage, and transfusion services.",
    icon: "fas fa-baby",
    link: "#",
    delay: 400,
  },
];

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
          {departments.map((dept, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={dept.delay}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className={dept.icon}></i>
                </div>
                <a href={dept.link} className="stretched-link">
                  <h3>{dept.title}</h3>
                </a>
                <p>{dept.description}</p>
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-center">
            <a
              href="departments.html"
              className="btn btn-accent btn-accent-pill"
            >
              View all
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
