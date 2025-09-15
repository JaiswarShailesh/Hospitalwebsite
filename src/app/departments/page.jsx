"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBanner from "../../components/heroBanner";
import Link from "next/link";
import { departments } from "../../data/departments";

// Departments Data
// const departments = [
//   {
//     category: "Specialty",
//     items: [
//       {
//         title: "General Medicine",
//         description:
//           "Medicine including Infectious Diseases, Endocrinology, Rheumatology.",
//         icon: "fa-stethoscope",
//       },
//       {
//         title: "General Surgery",
//         description:
//           "Comprehensive care for women’s health across all life stages.",
//         icon: "fa-user-md",
//       },
//       {
//         slug: "obstetrics-gynecology",
//         title: "Obstetrics & Gynaecology",
//         description:
//           "Comprehensive care for women's reproductive health, pregnancy, and childbirth through all stages of life.",
//         tabs: [
//           {
//             name: "Overview",
//             image: "/images/gynocology_overview.png",
//             intro:
//               "Gynecology focuses on the health and wellbeing of the female reproductive system across all stages of life.",
//             details:
//               "It encompasses a wide range of services from routine examinations and screenings to managing complex reproductive disorders...",
//           },
//           {
//             name: "Technology",
//             image: "/images/gynocology_technology.png",
//             intro:
//               "We utilize advanced technologies to ensure accurate diagnosis and safe, minimally invasive treatments.",
//             details:
//               "This includes ultrasound imaging, colposcopy, hysteroscopy, laparoscopic equipment, and integration with EMR...",
//           },
//           {
//             name: "Procedure",
//             image: "/images/gynocology_procedure.png",
//             intro:
//               "Every procedure is performed with utmost sensitivity, patient dignity, and clinical excellence.",
//             details:
//               "Outpatient procedures include pap smears, contraceptive insertions... Pre-procedure counseling & follow-up ensure complete support.",
//           },
//         ],
//         icon: "fa-person-pregnant",
//       },
//       {
//         title: "Pediatrics",
//         description:
//           "Safe and timely blood collection, storage, and transfusion services.",
//         icon: "fa-baby",
//       },
//       {
//         title: "Orthopedics",
//         description:
//           "Precision lab diagnostics to support clinical decision-making.",
//         icon: "fa-bone",
//       },
//       {
//         title: "Otorhinolaryngology",
//         description:
//           "Physician-led diagnostics to support clinical decision-making.",
//         icon: "fa-ear-listen",
//       },
//       {
//         title: "Dermatology",
//         description:
//           "Physician-led diagnostics to support clinical decision-making.",
//         icon: "fa-allergies",
//       },
//       {
//         title: "Ophthalmology",
//         description:
//           "Physician-led diagnostics to support clinical decision-making.",
//         icon: "fa-eye",
//       },
//     ],
//   },
//   {
//     category: "Super Specialty",
//     items: [
//       {
//         title: "Cardiology",
//         description:
//           "Advanced imaging services for accurate diagnosis and efficient treatment planning.",
//         icon: "fa-heartbeat",
//       },
//       {
//         title: "Neurology",
//         description:
//           "Comprehensive care for women’s health across all life stages.",
//         icon: "fa-brain",
//       },
//       {
//         title: "Nephrology",
//         description:
//           "Promoting public health through prevention, education, and outreach.",
//         icon: "fa-tint",
//       },
//       {
//         title: "Gastroenterology",
//         description:
//           "Safe and timely blood collection, storage, and transfusion services.",
//         icon: "fa-utensils",
//       },
//       {
//         title: "Oncology",
//         description:
//           "Physician-led diagnostics to support clinical decision-making.",
//         icon: "fa-ribbon",
//       },
//       {
//         title: "Urology",
//         description:
//           "Empowering people and processes for seamless healthcare delivery.",
//         icon: "fa-toilet",
//       },
//     ],
//   },
//   {
//     category: "Central Clinical Laboratory / Laboratory Medicine",
//     items: [
//       {
//         title: "Blood Bank",
//         description:
//           "Advanced imaging services for accurate diagnosis and efficient treatment planning.",
//         icon: "fa-tint",
//       },
//       {
//         title: "Pathology",
//         description:
//           "Physician-led diagnostics to support clinical decision-making.",
//         icon: "fa-vials",
//       },
//       {
//         title: "Clinical Biochemistry",
//         description:
//           "Comprehensive care for women’s health across all life stages.",
//         icon: "fa-flask",
//       },
//       {
//         title: "Hematology",
//         description:
//           "Promoting public health through prevention, education, and outreach.",
//         icon: "fa-syringe",
//       },
//       {
//         title: "Microbiology",
//         description:
//           "Safe and timely blood collection, storage, and transfusion services.",
//         icon: "fa-bacteria",
//       },
//       {
//         title: "Molecular Diagnostics",
//         description:
//           "Empowering people and processes for seamless healthcare delivery.",
//         icon: "fa-dna",
//       },
//     ],
//   },
//   {
//     category: "Radiology / Imaging",
//     items: [
//       {
//         title: "Digital X-Ray",
//         description:
//           "Advanced imaging services for accurate diagnosis and efficient treatment planning.",
//         icon: "fa-x-ray",
//       },
//       {
//         title: "Ultrasound / Doppler",
//         description:
//           "Comprehensive care for women’s health across all life stages.",
//         icon: "fa-wave-square",
//       },
//       {
//         title: "CT Scan",
//         description:
//           "Promoting public health through prevention, education, and outreach.",
//         icon: "fa-laptop-medical",
//       },
//       {
//         title: "MRI",
//         description:
//           "Safe and timely blood collection, storage, and transfusion services.",
//         icon: "fa-magnet",
//       },
//       {
//         title: "Interventional Radiology",
//         description:
//           "Precision lab diagnostics to support clinical decision-making.",
//         icon: "fa-crosshairs",
//       },
//     ],
//   },
// ];

const displaydepartments = () => {
  for (const department of departments[5].items) {
    console.log(department.title);
  }
};
displaydepartments();
export default function DepartmentsPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <HeroBanner images={["/images/departments_banner.png"]} />
      {departments.map((department, deptIndex) => (
        <section
          key={deptIndex}
          id={department.category.toLowerCase().replace(/\s+/g, "-")}
          className="services section"
        >
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>{department.category}</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* End Section Title */}

          <div className="container">
            <div className="row gy-4">
              {department.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100 * (itemIndex + 1)}
                >
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <Link
                      href={`/departments/${
                        item.slug
                          ? item.slug
                          : item.title.toLowerCase().replace(/\s+/g, "-")
                      }`}
                      className="stretched-link"
                    >
                      <h3>{item.title}</h3>
                    </Link>

                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
