"use client";

import { use } from "react";
import { doctors } from "../../../../data/doctors";
import { useTranslations } from "../../../../components/TranslationsProvider";

export default function DoctorProfile({ params }) {
  const { locale, id } = use(params);          // NEW Next.js 15 requirement
  const t = useTranslations();

  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="container my-5">
        <h2>{t("doctors.notFound")}</h2>
      </div>
    );
  }

  return (
    <section id="departments" className="services section">
      <div className="container">
        <div className="row gy-4">

          {/* LEFT SIDE — Photo + Button */}
          <div className="col-md-3">
            <div className="about-avatar">
              <div className="d-flex flex-column align-items-center doctors-card">
                
                <div className="mb-4 position-relative doctor-img-wrapper">
                  <img
                    className="img-fluid rounded-circle z-1 position-relative"
                    src={doctor.profilePhoto}
                    alt={doctor.name[locale]}
                  />
                </div>

                <a className="btn btn-accent-pill">
                  {t("doctors.bookAppointment")}
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Details */}
          <div className="col-md-9 doctor-info">
            <div className="about-text go-to">

              {/* Doctor Name + Tags */}
              <h2 className="dark-color">{doctor.name[locale]}</h2>
              <h6 className="theme-color lead">
                {doctor.tags[locale].join(" | ")}
              </h6>

              <div className="border border-top border-secondary my-4 opacity-3 line-divider"></div>

              {/* OPD TIMINGS */}
              <h6 className="theme-color lead">{t("doctors.opdTimings")}</h6>

              <table className="table table-bordered opd-timetable table-striped mb-5">
                <thead>
                  <tr>
                    <th>{t("doctors.days")}</th>
                    <th>{t("doctors.time")}</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(doctor.bio_data.opdTiming).map(([day, time]) => (
                    <tr key={day}>
                      <th>{t(`days.${day.toLowerCase()}`)}</th>
                      <td>{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* ABOUT DOCTOR */}
              {doctor.bio_data.aboutDoctor.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              {/* EDUCATION / EXPERIENCE / AWARDS / PUBLICATION */}
              <div className="row about-list">
                <div className="col">
                  <ul className="list-group list-group-flush">

                    {/* Education */}
                    <li className="list-group-item d-flex justify-content-between align-items-start px-0">
                      <div className="me-auto stats">
                        <div className="fw-bold">
                          <i className="fa-solid fa-school me-2"></i>
                          {t("doctors.education")}
                        </div>
                        <div className="my-2">
                          {doctor.bio_data.educationQualification.join(", ")}
                        </div>
                      </div>
                    </li>

                    {/* Experience */}
                    <li className="list-group-item d-flex justify-content-between align-items-start px-0">
                      <div className="me-auto stats">
                        <div className="fw-bold">
                          <i className="fa-solid fa-briefcase me-2"></i>
                          {t("doctors.experience")}
                        </div>
                        <div className="my-2">
                          {doctor.bio_data.experience?.length > 0
                            ? doctor.bio_data.experience.join(", ")
                            : t("doctors.noExperience")}
                        </div>
                      </div>
                    </li>

                    {/* Awards */}
                    <li className="list-group-item d-flex justify-content-between align-items-start px-0">
                      <div className="me-auto stats">
                        <div className="fw-bold">
                          <i className="fa-solid fa-award me-2"></i>
                          {t("doctors.awards")}
                        </div>
                        <ul className="my-2">
                          {doctor.bio_data.HonoursAndAwards.map((award, i) => (
                            <li key={i}>{award}</li>
                          ))}
                        </ul>
                      </div>
                    </li>

                    {/* Publications */}
                    <li className="list-group-item d-flex justify-content-between align-items-start px-0">
                      <div className="me-auto stats">
                        <div className="fw-bold">
                          <i className="fa-solid fa-book me-2"></i>
                          {t("doctors.publications")}
                        </div>

                        <ul className="my-2">
                          {doctor.bio_data.publication.length > 0
                            ? doctor.bio_data.publication.map((pub, i) => (
                                <li key={i}>{pub}</li>
                              ))
                            : t("doctors.noPublications")}
                        </ul>

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
  );
}
