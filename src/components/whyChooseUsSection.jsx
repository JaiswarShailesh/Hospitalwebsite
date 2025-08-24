"use client";

import { useState } from "react";

export default function WhyChooseUsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Unique Selling Point",
      subtitle:
        "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      description:
        "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
      image: "images/departments-1.jpg",
    },
    {
      title: "Latest Technologies",
      subtitle:
        "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      description:
        "Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal",
      image: "images/departments-2.jpg",
    },
    {
      title: "Infrastructure",
      subtitle:
        "Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et.",
      description:
        "Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae",
      image: "images/departments-3.jpg",
    },
  ];

  return (
    <section id="departments" className="departments section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Why Choose Us?</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          {/* Left Side Nav */}
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              {tabs.map((tab, index) => (
                <li key={index} className="nav-item">
                  <a
                    className={`cursor-pointer nav-link ${
                      activeTab === index ? "active show" : ""
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Content */}
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`tab-pane fade ${
                    activeTab === index ? "active show" : ""
                  }`}
                >
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>{tab.title}</h3>
                      <p className="fst-italic">{tab.subtitle}</p>
                      <p>{tab.description}</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
