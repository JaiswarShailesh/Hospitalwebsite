"use client";

import AOS from "aos";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { departments } from "../data/departments";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "./TranslationsProvider";

export default function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname?.split("/")[1] || "en";

  const localize = (path) => `/${currentLocale}${path}`;

  useEffect(() => {
    AOS.init();
  }, []);

  // Mobile toggle logic
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

    if (toggleButton) toggleButton.addEventListener("click", handleToggle);

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
      if (toggleButton) toggleButton.removeEventListener("click", handleToggle);
      dropdownLinks.forEach((icon) => {
        icon.replaceWith(icon.cloneNode(true));
      });
    };
  }, []);

  // Reset mobile menu when route changes
  useEffect(() => {
    const closeMobileMenu = () => {
      const body = document.querySelector("body");
      const toggleButton = document.querySelector(".mobile-nav-toggle");

      body.classList.remove("mobile-nav-active");
      if (toggleButton) {
        toggleButton.classList.remove("bi-x");
        toggleButton.classList.add("bi-list");
      }
    };

    closeMobileMenu();
    window.addEventListener("hashchange", closeMobileMenu);
    return () => window.removeEventListener("hashchange", closeMobileMenu);
  }, [pathname]);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      const body = document.querySelector("body");
      window.scrollY > 0
        ? body.classList.add("scrolled")
        : body.classList.remove("scrolled");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className="header sticky-top">
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <a className="d-none d-md-block">
              <i className="bi bi-envelope d-flex align-items-center ms-4">
                <span>contact@tmpmhospital.com</span>
              </i>
            </a>
            <a className="d-none d-md-block">
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>Request a Callback</span>
              </i>
            </a>
            <a>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>Emergency: +1 5589 55488 55</span>
              </i>
            </a>
          </div>

          <div className="d-flex">
            <div className="social-links d-none d-md-flex align-items-center">
              <a className="twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <LanguageSwitcher currentLocale={currentLocale} />
          </div>
        </div>
      </div>

      {/* BRANDING + LOGO */}
      <div className="branding d-flex align-items-center">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <Link
            href={localize("/")}
            className="logo d-flex align-items-center me-auto"
          >
            <img
              src="/images/hospital_website_logo.png"
              alt="hospital website logo"
              className="img-fluid"
            />
          </Link>

          {/* NAVIGATION MENU */}
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link href={localize("/")} className="active">
                  {t("navbar.home")}
                </Link>
              </li>

              <li className="dropdown">
                <Link href={localize("/about")}>
                  <span>{t("navbar.about")}</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li>
                    <Link href={localize("/about#about")}>
                      {t("navbar.overview")}
                    </Link>
                  </li>
                  <li>
                    <Link href={localize("/about#stats")}>
                      {t("navbar.visionMission")}
                    </Link>
                  </li>
                  <li>
                    <Link href={localize("/about#foundersLeaders")}>
                      {t("navbar.founders")}
                    </Link>
                  </li>
                  <li>
                    <Link href={localize("/about#whyChooseUs")}>
                      {t("navbar.whyUs")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <Link href={localize("/departments")}>
                  <span>{t("navbar.departments")}</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>

                <ul>
                  <li>
                    <Link href={localize("/departments")}>
                      {t("navbar.allDepartments")}
                    </Link>
                  </li>

                  {/* Speciality */}
                  <li className="dropdown">
                    <Link href={localize("/departments#speciality")}>
                      <span>{t("navbar.speciality")}</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </Link>
                    <ul>
                      {departments[0].items.map((item, index) => (
                        <li key={index}>
                          <Link href={localize(`/departments/${item.slug}`)}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* Super Speciality */}
                  <li className="dropdown">
                    <Link href={localize("/departments#super-specialty")}>
                      <span>{t("navbar.superSpeciality")}</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </Link>
                    <ul>
                      {departments[1].items.map((item, index) => (
                        <li key={index}>
                          <Link href={localize(`/departments/${item.slug}`)}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* Support Services */}
                  <li className="dropdown">
                    <Link href="#support-services">
                      <span>{t("navbar.supportServices")}</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </Link>
                    <ul>
                      {departments[3].items.map((item, index) => (
                        <li key={index}>
                          <Link href={localize(`/departments/${item.slug}`)}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <Link href={localize("/doctors")}>{t("navbar.doctors")}</Link>
              </li>

              <li className="dropdown">
                <a>
                  <span>{t("navbar.patientsVisitors")}</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li>
                    <Link href={localize("/opd")}>OPD</Link>
                  </li>
                  <li>
                    <Link href={localize("/ipd")}>IPD</Link>
                  </li>
                  <li>
                    <Link href={localize("/day-care")}>Day Care</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href={localize("/blogs")}>{t("navbar.blogs")}</Link>
              </li>
              <li>
                <Link href={localize("/careers")}>{t("navbar.careers")}</Link>
              </li>
              <li>
                <Link href={localize("/contact")}>{t("navbar.contact")}</Link>
              </li>
            </ul>

            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a
            className="cta-btn d-none d-sm-block"
            href={localize("/#appointment")}
          >
            {t("navbar.makeAppointment")}
          </a>
        </div>
      </div>
    </header>
  );
}
