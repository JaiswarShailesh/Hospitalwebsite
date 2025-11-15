import React from "react";
import { missionVisionData } from "../data/visionMission";

export default function MissionVisionSection() {
  const { vision, mission } = missionVisionData;

  return (
    <>
      <section
        id="stats"
        className="stats mission-vision section light-background"
      >
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Vision */}
            <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center">
              <i className={vision.icon}></i>
              <div className="stats-item">
                <span>{vision.title}</span>
                <p>{vision.text}</p>
              </div>
            </div>

            {/* Mission */}
            <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center">
              <i className={mission.icon}></i>
              <div className="stats-item">
                <span>{mission.title}</span>

                <div
                  style={{
                    fontSize: "14px",
                    fontFamily: "var(--heading-font)",
                    color: "var(--bs-body-color)",
                    width: "100%",
                    marginTop: "10px",
                  }}

                  className="text-start"
                >
                  {mission.points.map((item, index) => (
                    <div key={index} className="d-flex align-items-start mb-3">
                      <i
                        className={`fa-solid fa-angles-right me-2 shadow-none border-0 px-2 py-1 bg-white`}
                        style={{ height: "auto", width: "auto", fontSize: "15px", color: "var(--accent-color)"}}
                      ></i>
                      <p className="m-0">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
