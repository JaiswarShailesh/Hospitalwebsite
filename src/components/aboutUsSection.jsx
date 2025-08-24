"use client";

import AOS from "aos";
import { useEffect } from "react";

export default function AboutUsSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About Us</h2>
        <p>Where Compassion Meets Commitment: Right Where It’s Needed Most.</p>
      </div>
      <div className="container">
        <div className="row gy-4 gx-5">
          <div
            className="col-lg-6 position-relative align-self-start"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="images/aboutHospitalImage.png"
              className="img-fluid"
              alt=""
            />
            <a
              href="https://youtu.be/TgYY6cRazHM?si=-GJuPSzj8z4-jwRS"
              className="glightbox pulsating-play-btn"
            ></a>
          </div>

          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>
              SVKM’s Tapanbhai Mukeshbhai Patel Memorial Hospital, Medical
              College & Research Centre stands as a premier multispecialty
              medical centre in Shirpur. It is a 1200-bedded healthcare hub,
              blending compassionate care with advanced infrastructure. With
              multiple surgical & procedural suites, specialized ICUs for
              adults, children, and neonates, and a fully equipped obstetric
              unit, it stands as a beacon of healing and medical excellence;
              well supported by an attached Medical & Nursing College.
            </p>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <i className="fa-solid fa-chart-area"></i>
                      <div>
                        <h5>Area</h5>
                        <p>- sq.ft</p>
                      </div>
                    </li>
                    <li>
                      <i className="fa-solid fa-bed"></i>
                      <div>
                        <h5>Total Beds</h5>
                        <p>1200</p>
                      </div>
                    </li>
                    <li>
                      <i className="fa-solid fa-bed-pulse"></i>
                      <div>
                        <h5>Critical care beds</h5>
                        <p>120</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <i className="fa-solid fa-house-medical-circle-exclamation"></i>
                      <div>
                        <h5>Emergency Beds</h5>
                        <p>34</p>
                      </div>
                    </li>
                    <li>
                      <i className="fa-solid fa-scissors"></i>
                      <div>
                        <h5>Operation Room</h5>
                        <p>17</p>
                      </div>
                    </li>
                    <li>
                      <i className="fas fa-heart"></i>
                      <div>
                        <h5>Catheterization Laboratory</h5>
                        <p>1</p>
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
