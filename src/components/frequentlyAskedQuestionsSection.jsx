"use client";

import AOS from "aos";
import { useEffect, useState } from "react";

export default function FrequentlyAskedQuestionsSection() {
  const [openIndexes, setOpenIndexes] = useState([0]); // Default: first FAQ open

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // close if already open
          : [...prev, index] // add if not open
    );
  };

  const faqData = [
    {
      question: "What services does SVKM’s Hospital provide?",
      answer:
        "SVKM’s Hospital offers a full range of medical services, including general medicine, surgery, paediatrics, obstetrics and gynaecology, ICU, trauma care, radiology, laboratory diagnostics, dialysis, and specialty OPDs.",
    },
    {
      question: "Where is the hospital located?",
      answer:
        "The hospital is located at Kharde, Shirpur, in Dhule district, Maharashtra. It is easily accessible by road and serves patients from surrounding areas including Nandurbar and Jalgaon.",
    },
    {
      question: "Is the hospital affordable for rural patients?",
      answer:
        "Yes, the hospital operates on a “No Profit, No Loss” model, ensuring quality medical care at subsidized and affordable rates, especially for underserved communities.",
    },
    {
      question: "Are specialist doctors available at the hospital?",
      answer:
        "Yes, the hospital regularly hosts experienced consultants in various specialties such as cardiology, nephrology, orthopaedics, and general surgery through scheduled OPDs and camps.",
    },
    {
      question: "What diagnostic services are available on-site?",
      answer:
        "The hospital is equipped with advanced diagnostic facilities including digital X-ray, ultrasound, pathology lab, ECG, and CT/MRI.",
    },
    {
      question: "Does the hospital offer emergency care services?",
      answer:
        "Yes, a 24x7 emergency department is operational with trained medical and nursing staff, trauma support, ambulance services, and critical care beds.",
    },
    {
      question: "Are there any free or subsidized medical camps?",
      answer:
        "The hospital regularly conducts free health check-up camps, specialty consultations, and screening drives in rural areas as part of its outreach program.",
    },
    {
      question: "How can I get an appointment or admission?",
      answer:
        "Patients can walk in for OPD services or contact the reception via phone. For admissions, referrals, or ambulance services, call the hospital helpdesk directly.",
    },
  ];

  return (
    <section id="faq" className="faq section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>
          Find answers to commonly asked questions about our hospital and
          services.
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    openIndexes.includes(index) ? "faq-active" : ""
                  }`}
                >
                  <h3>{item.question}</h3>
                  <div className="faq-content">
                    <p>{item.answer}</p>
                  </div>
                  <i
                    className="faq-toggle bi bi-chevron-right"
                    onClick={() => toggleFAQ(index)}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
