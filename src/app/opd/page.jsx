"use client";

import { useState } from "react";
import HeroBanner from "../../components/heroBanner";
import opdData from "../../data/opdData";
import ContactSection from "../../components/contactSection";

export default function OpdPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <HeroBanner images={["/images/general_hospital_banner.png"]} />
      <section id="opdSection" className="departments section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Outpatient Department</h2>
          <p>
            Your first step to quality healthcare — convenient and accessible
            OPD services.
          </p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            {/* Left Side Nav */}
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                {opdData.map((tab, index) => (
                  <li key={index} className="nav-item">
                    <a
                      className={`cursor-pointer nav-link ${
                        activeTab === index ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      {tab.section}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side Content */}
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                {opdData.map((tab, index) => (
                  <div
                    key={index}
                    className={`tab-pane fade ${
                      activeTab === index ? "active show" : ""
                    }`}
                  >
                    <div className="row">
                      <div
                        className={`col-lg-${
                          activeTab === opdData.length - 1 ? "12" : "8"
                        } details order-2 order-lg-1`}
                      >
                        <h3>{tab.section}</h3>
                        {/* <p className="fst-italic">{tab.intro}</p> */}
                        {Array.isArray(tab.description) ? (
                          tab.description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                          ))
                        ) : (
                          <p>{tab.description}</p>
                        )}
                        {tab.schedule && Array.isArray(tab.schedule) ? (
                          <div className="table-responsive mt-3">
                            <table className="table table-bordered opd-timetable table-striped mb-5">
                              <thead>
                                <tr>
                                  <th>Department</th>
                                  <th>Doctor Name</th>
                                  <th>Days</th>
                                  <th>Timings</th>
                                  <th>Room No.</th>
                                </tr>
                              </thead>
                              <tbody>
                                {tab.schedule.map((data, index) => (
                                  <tr key={index}>
                                    <td>{data.department}</td>
                                    <td>{data.doctor}</td>
                                    <td>{data.days}</td>
                                    <td>{data.timings}</td>
                                    <td>{data.room}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      {!tab.schedule && (
                        <div className="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={tab.image}
                            alt={tab.title}
                            className="img-fluid"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
