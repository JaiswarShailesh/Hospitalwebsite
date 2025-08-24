import React from "react";

export default function MissionVisionSection() {
  return (
    <>
      {/* <!-- Stats Section --> */}
      <section
        id="stats"
        className="stats mission-vision section light-background"
      >
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
              <i className="fa-solid fa-user-doctor"></i>
              <div className="stats-item">
                <span>Vision</span>
                <p>
                  To be a trusted leader in delivering exceptional healthcare,
                  known for patient-centric care, clinical excellence, and
                  continuous progress.
                </p>
              </div>
            </div>
            {/* <!-- End Stats Item --> */}

            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
              <i className="fa-solid fa-arrows-up-down-left-right"></i>
              <div className="stats-item">
                <span>Mission</span>
                <p>
                  To provide advanced, compassionate, and safe healthcare
                  services through cutting-edge technology and a patient-first
                  approach.
                </p>
              </div>
            </div>
            {/* <!-- End Stats Item --> */}

            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
              <i className="fa-solid fa-hand-holding-heart"></i>
              <div className="stats-item">
                <span>Value</span>
                <p>
                  Integrity, compassion, fairness, transparency, quality care,
                  ethical practice, and a commitment to continuous improvement.
                </p>
              </div>
            </div>
            {/* <!-- End Stats Item --> */}
          </div>
        </div>
      </section>
      {/* <!-- /Stats Section --> */}
    </>
  );
}
