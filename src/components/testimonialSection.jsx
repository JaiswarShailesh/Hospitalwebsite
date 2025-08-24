"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function TestimonialsSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  const testimonials = [
    {
      name: "Mr. Ramesh Patel",
      role: "Patient’s Family Member",
      img: "images/male_user.png",
      text: "Our experience with the staff and doctors was exceptional. The care team was compassionate and kept us informed at every step. The cleanliness, transparency, and professionalism really stood out.",
    },
    {
      name: "Dr. Aarti Mehra",
      role: "Senior Consultant, Radiology Department",
      img: "images/female_user.png",
      text: "The hospital’s commitment to precision diagnostics and patient-centered care is unmatched. From cutting-edge imaging technology to seamless collaboration across departments, it’s a place where patients feel truly supported.",
    },
    {
      name: "Dr. Neha Suri",
      role: "Consultant – Community Medicine",
      img: "images/female_user.png",
      text: "What sets this hospital apart is its outreach into underserved areas. With mobile health camps and preventive awareness programs, they are transforming community health, not just treating illnesses.",
    },
    {
      name: "Mr. Arvind Deshmukh",
      role: "Patient – Cardiology Department",
      img: "images/male_user.png",
      text: "From admission to discharge, every step of my treatment was handled with care and precision. The doctors were highly knowledgeable, and the nursing staff made me feel safe and supported throughout. I’m grateful for the excellent service.",
    },
    {
      name: "Mr. Rajeev Sharma",
      role: "Son of a Patient – ICU Unit",
      img: "images/male_user.png",
      text: "When my father was admitted in a critical state, the hospital team responded immediately. Their coordination, regular updates, and emotional support made a tough time easier for our family. We truly felt we were in capable hands.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-5 info"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>Testimonials</h3>
            <p>
              Hear from our patients, families, and experts who have experienced
              compassionate care, clinical excellence, and dedicated support
              across all departments.
            </p>
          </div>

          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              speed={600}
              autoplay={{ delay: 5000 }}
              slidesPerView="auto"
              pagination={{ clickable: true }}
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item">
                    <div className="d-flex">
                      <img
                        src={t.img}
                        className="testimonial-img flex-shrink-0"
                        alt={t.name}
                      />
                      <div>
                        <h3>{t.name}</h3>
                        <h4>{t.role}</h4>
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="bi bi-star-fill"></i>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>{t.text}</span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
