"use client";

import AOS from "aos";
import { useEffect, useState } from "react";
import vacancies from "../../data/jobOpenings";
import { ArrowDownUp, ArrowUp, ArrowDown } from "lucide-react"; // clean icons
import HeroBanner from "../../components/heroBanner";

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

  return (
    <>
      <HeroBanner images={["/images/about_us_banner.png"]} />
      <section id="careers" className="services section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Careers</h2>
          <p>
            Read expert insights, health tips, and stories from our medical
            professionals.
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
