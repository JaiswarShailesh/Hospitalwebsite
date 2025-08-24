"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import { useParams } from "next/navigation";
import { departments } from "../../../data/departments";
import HeroBanner from "../../../components/heroBanner";
import BlogsSection from "../../../components/blogsSection";
import ContactSection from "../../../components/contactSection";
import Link from "next/link";

export default function DepartmentPage() {
  const [activeTab, setActiveTab] = useState(0);
  const { slug } = useParams();

  // Flatten all items from all categories into one array
  const allItems = departments.flatMap((section) => section.items);

  // Find department by slug
  const department = allItems.find((item) => item.slug === slug);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  if (!department) {
    return <div className="container py-10">Department not found</div>;
  }

  return (
    <>
      <HeroBanner images={[department.banner_image]} />
      <section id="departments" className="departments section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{department.title}</h2>
          <p>{department.description}</p>
        </div>

        {department.tabs && (
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row">
              {/* Tabs Nav */}
              <div className="col-lg-3">
                <ul className="nav nav-tabs flex-column">
                  {department.tabs.map((tab, index) => (
                    <li key={index} className="nav-item">
                      <a
                        className={`cursor-pointer nav-link ${
                          activeTab === index ? "active show" : ""
                        }`}
                        onClick={() => setActiveTab(index)}
                      >
                        {tab.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tab Content */}
              <div className="col-lg-9 mt-4 mt-lg-0">
                <div className="tab-content">
                  {department.tabs.map((tab, index) => (
                    <div
                      key={index}
                      className={`tab-pane fade ${
                        activeTab === index ? "active show" : ""
                      }`}
                    >
                      <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1">
                          <h3>{tab.name}</h3>
                          <p className="fst-italic">{tab.intro}</p>
                          <p>{tab.details}</p>
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={tab.image}
                            alt={tab.name}
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* <!-- Consultants Section --> */}
      <section id="consultants" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Consultants</h2>
          <p>
            Experienced consultants offering expert care across various
            specialties
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {department.consultants.map((consultant, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="doctors-card text-center mb-3">
                  <div className="card-body p-0 pb-4">
                    <div className="mb-4 position-relative doctor-img-wrapper">
                      <img
                        className="img-fluid rounded-circle z-1 position-relative"
                        src={consultant.profilePhoto}
                      />
                    </div>
                    <h5 className="fw-bold">{consultant.name}</h5>
                    <p className="doctor-bio">{consultant.tags.join(" | ")}</p>
                    <div className="d-flex justify-content-center mt-4">
                      <Link
                        className="btn btn-accent-pill me-2"
                        href={`/doctors/${consultant.id}`}
                      >
                        View profile
                      </Link>
                      <a className="btn btn-accent-pill" href="">
                        Book an appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- /Consultants Section --> */}

      <BlogsSection />
      <ContactSection />
    </>
  );
}
