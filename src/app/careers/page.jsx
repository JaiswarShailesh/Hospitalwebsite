"use client";

import AOS from "aos";
import { useEffect, useState } from "react";
import vacancies from "../../data/jobOpenings";
import { ArrowDownUp, ArrowUp, ArrowDown } from "lucide-react"; // clean icons
import HeroBanner from "../../components/heroBanner";
import data from "../../data/whyWorkWithUs";

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // asc | desc
  const [filteredJobs, setFilteredJobs] = useState(vacancies);

  useEffect(() => {
    AOS.init();
  }, []);

  const parseDate = (dateStr) => new Date(dateStr);

  useEffect(() => {
    let jobs = [...vacancies];

    if (searchTerm.trim()) {
      jobs = jobs.filter((job) =>
        job.designation.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    jobs.sort((a, b) => {
      const dateA = parseDate(a.applicationStartDate);
      const dateB = parseDate(b.applicationStartDate);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    setFilteredJobs(jobs);
  }, [searchTerm, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const RenderWithOr = ({ items }) => (
    <>
      {items.map((item, idx) => (
        <div key={idx}>
          {typeof item === "string" ? (
            <div>{item}</div>
          ) : (
            <div>{item.description}</div>
          )}

          {idx < items.length - 1 && (
            <div className="d-flex align-items-center my-2">
              <hr className="flex-grow-1" />
              <span className="px-3 text-muted">OR</span>
              <hr className="flex-grow-1" />
            </div>
          )}
        </div>
      ))}
    </>
  );

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <HeroBanner images={["/images/careers_page_banner.png"]} />
      <section id="departments" className="departments section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Why Work with Us?</h2>
          <p>
            Join a hospital that values excellence, innovation, and people above
            all.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            {/* Left Side Nav */}
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                {data.map((tab, index) => (
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
                {data.map((d, index) => (
                  <div
                    key={index}
                    className={`tab-pane fade ${
                      activeTab === index ? "active show" : ""
                    }`}
                  >
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>{d.title}</h3>
                        <p className="fst-italic">{d.sub_title}</p>
                        <p>{d.description}</p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src={d.image}
                          alt={d.title}
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

      <section id="careers" className="services section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Current Openings</h2>
          <p>
            Explore exciting career opportunities and join our growing
            healthcare team.
          </p>
        </div>

        {/* Search + Sort Controls */}
        <div className="container mb-4 ">
          <div className="row d-flex gap-3  justify-content-between">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Search jobs by designation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-md-auto">
              <button
                className="btn btn-accent d-flex align-items-center gap-2 shadow-sm"
                onClick={toggleSortOrder}
                style={{ borderRadius: "20px" }}
              >
                {sortOrder === "asc" ? (
                  <>
                    <ArrowUp size={18} /> <span>Start Date ASC</span>
                  </>
                ) : (
                  <>
                    <ArrowDown size={18} /> <span>Start Date DESC</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row gy-4">
            {filteredJobs.map((vacancy) => (
              <div
                className="col-xl-4 d-flex align-items-stretch"
                key={vacancy.id}
              >
                <div
                  className="career-box shadow-sm p-3 rounded-4"
                  data-aos="zoom-out"
                  data-aos-delay="500"
                >
                  <i className="bi bi-person-workspace fs-2 text-accent"></i>
                  <h4 className="mt-2">{vacancy.designation}</h4>
                  <ul className="list-group list-group-flush list-group-numbered text-align-left">
                    {/* Positions */}
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">No. of Position</div>
                      </div>
                      <span className="badge custom-badge rounded-pill">
                        {vacancy.numberOfPost}
                      </span>
                    </li>

                    {/* Education */}
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Education Qualification</div>
                        <RenderWithOr items={vacancy.educationQualification} />
                      </div>
                    </li>

                    {/* Experience */}
                    {vacancy.yearsOfExperience &&
                      vacancy.yearsOfExperience.length > 0 && (
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Experience</div>
                            <RenderWithOr items={vacancy.yearsOfExperience} />
                          </div>
                        </li>
                      )}

                    {/* Start Date */}
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Application Start Date</div>
                      </div>
                      <span className="badge rounded-pill custom-badge">
                        {vacancy.applicationStartDate}
                      </span>
                    </li>

                    {/* End Date */}
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Application End Date</div>
                      </div>
                      <span className="badge rounded-pill custom-badge">
                        {vacancy.applicationEndDate}
                      </span>
                    </li>
                  </ul>

                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <a
                      href="departments.html"
                      className="btn btn-accent btn-accent-pill"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
