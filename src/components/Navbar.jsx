"use client";

import AOS from "aos";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { departments } from "../data/departments";

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init();
  }, []);

  // ✅ Setup toggle & dropdown logic
  useEffect(() => {
    const body = document.querySelector("body");
    const toggleButton = document.querySelector(".mobile-nav-toggle");
    const dropdownLinks = document.querySelectorAll(
      "#navmenu .toggle-dropdown"
    );

    const handleToggle = () => {
      body.classList.toggle("mobile-nav-active");
      toggleButton.classList.toggle("bi-list");
      toggleButton.classList.toggle("bi-x");
    };

    if (toggleButton) {
      toggleButton.addEventListener("click", handleToggle);
    }

    // Handle dropdown clicks
    dropdownLinks.forEach((icon) => {
      icon.addEventListener("click", (e) => {
        e.preventDefault();
        const parentLi = icon.closest(".dropdown");
        const dropdownMenu = parentLi.querySelector("ul");

        dropdownMenu.classList.toggle("dropdown-active");
        icon.classList.toggle("bi-chevron-down");
        icon.classList.toggle("bi-chevron-up");
      });
    });

    return () => {
      if (toggleButton) {
        toggleButton.removeEventListener("click", handleToggle);
      }
      dropdownLinks.forEach((icon) => {
        icon.replaceWith(icon.cloneNode(true));
      });
    };
  }, []);

  useEffect(() => {
    const closeMobileMenu = () => {
      const body = document.querySelector("body");
      const toggleButton = document.querySelector(".mobile-nav-toggle");

      if (body.classList.contains("mobile-nav-active")) {
        body.classList.remove("mobile-nav-active");
      }
      if (toggleButton) {
        toggleButton.classList.remove("bi-x");
        toggleButton.classList.add("bi-list");
      }
    };

    closeMobileMenu();

    window.addEventListener("hashchange", closeMobileMenu);
    return () => {
      window.removeEventListener("hashchange", closeMobileMenu);
    };
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const body = document.querySelector("body");
      if (window.scrollY > 0) {
        body.classList.add("scrolled");
      } else {
        body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className="header sticky-top">
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <a href="" className="d-none d-md-block">
              <i className="bi bi-envelope d-flex align-items-center ms-4">
                <span>contact@tmpmhospital.com</span>
              </i>
            </a>
            <a href="" className="d-none d-md-block">
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>Request a Callback</span>
              </i>
            </a>
            <a href="">
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>Emergency Number: +1 5589 55488 55</span>
              </i>
            </a>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="#" className="twitter">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- End Top Bar --> */}

      <div className="branding d-flex align-items-center">
        <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
          <Link href="/" className="logo d-flex align-items-center me-auto">
            {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
            {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
            {/* <!-- <h1 className="sitename">
              SVKM's Tapanbhai Mukeshbhai Patel Memorial Hospital And Research
              Center
            </h1> --> */}

            <img
              src="/images/hospital_website_logo.png"
              alt="hospital website logo"
              className="img-fluid"
              // style={{ maxHeight: "auto" }}
            />
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link href="/" className="active">
                  Home
                  <br />
                </Link>
              </li>
              <li className="dropdown">
                <Link href="/about">
                  <span>About Us</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li>
                    <Link href="/about#about">Overview</Link>
                  </li>
                  <li>
                    <Link href="/about#stats">Vision & Mission</Link>
                  </li>
                  <li>
                    <Link href="/about#foundersLeaders">
                      Founders & Leadership
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#whyChooseUs">Why Us?</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link href="/departments">
                  <span>Departments & Services</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li>
                    <Link href="/departments">All Departments</Link>
                  </li>
                  <li className="dropdown">
                    <Link href="/departments#speciality">
                      <span>Speciality</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </Link>
                    <ul>
                      {departments[0].items.map((item, index) => (
                        <li key={index}>
                          <Link href={`/departments/${item.slug}`}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link href="/departments#super-specialty">
                      <span>Super Speciality</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </Link>
                    <ul>
                      {departments[1].items.map((item, index) => (
                        <li key={index}>
                          <Link href={`/departments/${item.slug}`}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  {/* <li className="dropdown">
                    <Link href="/departments#central-clinical-laboratory-/-laboratory-medicine">
                      <span>
                        Central Clinical Laboratory / Laboratory Medicine
                      </span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </Link>
                    <ul>
                      {departments[2].items.map((item, index) => (
                        <li key={index}>
                          <Link href={`/departments/${item.slug}`}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li> */}
                  <li className="dropdown">
                    <a href="/departments#support-services">
                      <span>Support Services</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      {departments[3].items.map((item, index) => (
                        <li key={index}>
                          <Link href={`/departments/${item.slug}`}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="/departments#future-likely-developments/-divisions-in-existing-departments">
                      <span>
                        Future Likely Developments / Divisions in Existing
                        Departments
                      </span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      {departments[4].items.map((item, index) => (
                        <li key={index}>
                          <Link href={`/departments/${item.slug}`}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="/departments#future-likely-more-clinical-departments">
                      <span>Future Likely More Clinical Departments</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      {departments[4].items.map((item, index) => (
                        <li key={index}>
                          <Link href={`/departments/${item.slug}`}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/doctors">
                  Doctors
                  <br />
                </Link>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Patients & Visitors</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li className="dropdown">
                    <a href="departments.html#specialty">
                      <span>Services</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      <li>
                        <Link href="/opd">OPD</Link>
                      </li>
                      <li>
                        <Link href="/ipd">IPD</Link>
                      </li>
                      <li>
                        <Link href="/day-care">Day Care</Link>
                      </li>
                      <li>
                        <a href="#">Chemotherapy</a>
                      </li>
                      <li>
                        <a href="#">Home Visit / Doctor at Home</a>
                      </li>
                      <li>
                        <a href="#">Preventive Health Check-Up</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="departments.html#superSpecialty">
                      <span>Information</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Patient Education</a>
                      </li>
                      <li>
                        <a href="#">Health Tips</a>
                      </li>
                      <li>
                        <a href="#">Patient Rights & Responsibilities</a>
                      </li>
                      <li>
                        <a href="#">Patient Feedback</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="departments.html#centralClinic">
                      <span>Billing & Insurance</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      <li>
                        <a
                          href="https://drive.google.com/file/d/1gSUJYhNeN7v6-uOkmAAZN5aL_Uak-Vuu/view?usp=sharing"
                          target="_blank"
                        >
                          Tariff / Charges
                        </a>
                      </li>
                      <li>
                        <Link href="/tpaInsuranceCorporate">
                          TPA, Insurance & Corporate
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="departments.html#centralClinic">
                      <span>Health Information / Library</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Diseases & Conditions</a>
                      </li>
                      <li>
                        <a href="#">Symptoms Guide</a>
                      </li>
                      <li>
                        <a href="#">Treatment / Procedure / Surgery</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Community</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li>
                    <Link href="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link href="newsAndEvents.html">News & Events</Link>
                  </li>
                  <li>
                    <Link href="/photoGallery">Photo Gallery</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/careers">
                  Careers
                  <br />
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact Us
                  <br />
                </Link>
              </li>
              {/* <!-- <li className="dropdown">
                <a href="#"
                  ><span>Dropdown</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i
                ></a>
                <ul>
                  <li><a href="#">Dropdown 1</a></li>
                  <li className="dropdown">
                    <a href="#"
                      ><span>Deep Dropdown</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i
                    ></a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li>
                </ul>
              </li> --> */}
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a
            className="cta-btn d-none d-sm-block text-nowrap"
            href="#appointment"
          >
            Make an Appointment
          </a>
        </div>
      </div>
    </header>
  );
}
