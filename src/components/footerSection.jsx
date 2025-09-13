"use client";

import AOS from "aos";
import Link from "next/link";
import { useEffect } from "react";

export default function FooterSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">
                SVKM's Tapanbhai Mukeshbhai Patel Memorial Hospital And Research
                Center
              </span>
            </a>
            <div className="footer-contact pt-3">
              <p>SVKM's Tapanbhai Mukeshbhai Patel</p>
              <p>Memorial Hospital, Kharde, Budruk,</p>
              <p>Sirpur, Dhule - 425405</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+1 5589 55488 55</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@example.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/department">Departments & Services</Link>
              </li>
              <li>
                <Link href="/doctor">Doctors</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/careers">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/careers">Terms and Conditions</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Departments</h4>
            <ul>
              <li>
                <Link href="#">Speciality</Link>
              </li>
              <li>
                <Link href="#">Super Speciality</Link>
              </li>
              <li>
                <Link href="#">Central Clinical Laboratory</Link>
              </li>
              <li>
                <Link href="#">Radiology & Imaging</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Patient & Visitors</h4>
            <ul>
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="#">Information</Link>
              </li>
              <li>
                <Link href="#">Billing & Insurance</Link>
              </li>
              <li>
                <Link href="#">Health Information/ Library</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Community</h4>
            <ul>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">News & Events</Link>
              </li>
              <li>
                <Link href="#">Photo Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright 2025</span>
          <strong className="px-1 sitename">
            SVKM's Tapanbhai Mukeshbhai Patel Memorial Hospital And Research
            Center
          </strong>
          <span>All Rights Reserved</span>
        </p>
        {/* <!-- <div className="credits">
          Designed by
          <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by
          <a href=“https://themewagon.com>ThemeWagon
        </div> --> */}
      </div>
    </footer>
  );
}
