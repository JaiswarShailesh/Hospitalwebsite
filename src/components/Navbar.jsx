"use client";

import AOS from "aos";
import Link from "next/link";
import { useEffect } from "react";
// import "../../public/assets/css/main.css";
import Image from "next/image";

export default function Navbar() {
  useEffect(() => {
    AOS.init();
  }, []);

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

    const dropdownIcons = document.querySelectorAll(
      "#navmenu .toggle-dropdown"
    );

    // Handle dropdown clicks
    dropdownIcons.forEach((icon) => {
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
        icon.replaceWith(icon.cloneNode(true)); // removes all attached listeners safely
      });
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
              style={{ maxHeight: "auto" }}
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
                    <Link href="/about#departments">Why Us?</Link>
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
                    <a href="departments.html#specialty">
                      <span>Speciality</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">General Medicine</a>
                      </li>
                      <li>
                        <a href="#">General Surgery</a>
                      </li>
                      <li>
                        <a href="gynecology.html">Obsterics & Gynocology</a>
                      </li>
                      <li>
                        <a href="#">Pediatrics</a>
                      </li>
                      <li>
                        <a href="#">Orthopedics</a>
                      </li>
                      <li>
                        <a href="#">Dermatology</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="departments.html#superSpecialty">
                      <span>Super Speciality</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Cardiology</a>
                      </li>
                      <li>
                        <a href="#">Neurology</a>
                      </li>
                      <li>
                        <a href="#">Nepharolgy</a>
                      </li>
                      <li>
                        <a href="#">Gastroenterolgy</a>
                      </li>
                      <li>
                        <a href="#">Oncology</a>
                      </li>
                      <li>
                        <a href="#">Urology</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="departments.html#centralClinic">
                      <span>
                        Central Clinical Laboratory / Laboratory Medicine
                      </span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Blood bank</a>
                      </li>
                      <li>
                        <a href="#">Clinical Biochemistry</a>
                      </li>
                      <li>
                        <a href="#">Hematology</a>
                      </li>
                      <li>
                        <a href="#">Microbiology</a>
                      </li>
                      <li>
                        <a href="#">Histopathology</a>
                      </li>
                      <li>
                        <a href="#">Molecular Diagnostics</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="departments.html#radiologyImaging">
                      <span>Radiology & Imaging</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Digital X-Ray</a>
                      </li>
                      <li>
                        <a href="#">Ultrasound/ Doppler</a>
                      </li>
                      <li>
                        <a href="#">CT Scan</a>
                      </li>
                      <li>
                        <a href="#">MRI</a>
                      </li>
                      <li>
                        <a href="#">Interventional Radiology</a>
                      </li>
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
                        <a href="opd.html">OPD</a>
                      </li>
                      <li>
                        <a href="ipd.html">IPD</a>
                      </li>
                      <li>
                        <a href="#">Day Care</a>
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
                        <a href="#">Tariff / Charges</a>
                      </li>
                      <li>
                        <a href="#">TPA, Insurance & Corporate</a>
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
