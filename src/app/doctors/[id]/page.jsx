"use client";

import { doctors } from "../../../data/doctors";
import { useParams } from "next/navigation";

export default function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="container my-5">
        <h2>Doctor not found</h2>
      </div>
    );
  }

  return (
    <>
      <section id="departments" className="services section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-3">
              <div className="about-avatar">
                <div className="d-flex flex-column align-items-center doctors-card">
                  <div className="mb-4 position-relative doctor-img-wrapper">
                    <img
                      className="img-fluid rounded-circle z-1 position-relative"
                      src={doctor.profilePhoto}
                    />
                  </div>
                  <a className="btn btn-accent-pill" href="">
                    Book an appointment
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-9 doctor-info">
              <div className="about-text go-to">
                <h2 className="dark-color">{doctor.name}</h2>
                <h6 className="theme-color lead">{doctor.tags.join(" | ")}</h6>
                <div className="border border-top border-secondary my-4 opacity-3 line-divider"></div>
                <h6 className="theme-color lead">OPD Timings</h6>
                <table className="table table-bordered opd-timetable table-striped mb-5">
                  <thead>
                    <tr>
                      <th scope="col">Days</th>
                      <th scope="col">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Monday</th>
                      <td>{doctor.bio_data.opdTiming.monday}</td>
                    </tr>
                    <tr>
                      <th scope="row">Tuesday</th>
                      <td>{doctor.bio_data.opdTiming.Tuesday}</td>
                    </tr>
                    <tr>
                      <th scope="row">Wednesday</th>
                      <td>{doctor.bio_data.opdTiming.Wednesday}</td>
                    </tr>
                    <tr>
                      <th scope="row">Thursday</th>
                      <td>{doctor.bio_data.opdTiming.Thursday}</td>
                    </tr>
                    <tr>
                      <th scope="row">Friday</th>
                      <td>{doctor.bio_data.opdTiming.Friday}</td>
                    </tr>
                    <tr>
                      <th scope="row">Saturday</th>
                      <td>{doctor.bio_data.opdTiming.Saturday}</td>
                    </tr>
                  </tbody>
                </table>
                {doctor.bio_data.aboutDoctor.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}

                <div className="row about-list">
                  <div className="col">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-start px-0">
                        <div className="me-auto stats">
                          <div className="fw-bold">
                            <i className="fa-solid fa-school me-2"></i>
                            Educational Qualifications
                          </div>
                          <div className="my-2">
                            {doctor.bio_data.educationQualification.join(", ")}
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start px-0">
                        <div className="me-auto stats">
                          <div className="fw-bold">
                            <i className="fa-solid fa-briefcase me-2"></i>
                            Experience
                          </div>
                          <div className="my-2">Some content</div>
                        </div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start px-0">
                        <div className="me-auto stats">
                          <div className="fw-bold">
                            <i className="fa-solid fa-award me-2"></i>Honours
                            and Awards
                          </div>
                          <div className="my-2">
                            <ul>
                              {doctor.bio_data.HonoursAndAwards.map(
                                (content, index) => (
                                  <li key={index}>{content}</li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start px-0">
                        <div className="me-auto stats">
                          <div className="fw-bold">
                            <i className="fa-solid fa-book me-2"></i>
                            Publications
                          </div>
                          <div className="my-2">
                            {doctor.bio_data.publication}
                          </div>
                          <div className="my-2">
                            <ul>
                              {doctor.bio_data.publication.length > 0
                                ? doctor.bio_data.publication.map(
                                    (content, index) => (
                                      <li key={index}>{content}</li>
                                    )
                                  )
                                : "Some Content"}
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
