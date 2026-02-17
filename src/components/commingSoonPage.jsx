"use client";

import React from "react";
import Link from "next/link";

const ComingSoonPage = () => {
  return (
    <div className="coming-wrapper d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <div className="card shadow-lg border-0 p-5 coming-card">

          {/* Logo */}
          <img
            src="/images/hospital_website_logo.png"
            alt="Hospital Logo"
            className="img-fluid mb-4"
            style={{ maxWidth: "180px" }}
          />

          {/* Hospital Name */}
          <h4 className="fw-bold text-primary mb-3">
            SVKM's Tapanbhai Mukeshbhai Patel Memorial Hospital & Research Centre
          </h4>

          {/* Icon */}
          <div className="icon-wrapper mb-4">
            <i className="bi bi-hospital pulse-icon"></i>
          </div>

          {/* Title */}
          <h1 className="display-5 fw-bold mb-3">We’re Coming Soon</h1>

          <p className="text-muted mb-4">
            Our website is currently under development.  
            We are working hard to bring you a better healthcare experience.
          </p>

          {/* Contact Section */}
          {/* <div className="row mt-4">
            <div className="col-md-4 mb-3">
              <div className="info-box p-3">
                <i className="bi bi-envelope-fill text-primary fs-4"></i>
                <p className="mb-0 mt-2">info@tmpmhospital.com</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="info-box p-3">
                <i className="bi bi-telephone-fill text-success fs-4"></i>
                <p className="mb-0 mt-2">Request Callback</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="info-box p-3 emergency-box">
                <i className="bi bi-heart-pulse-fill text-danger fs-4"></i>
                <p className="mb-0 mt-2 fw-bold">24/7 Emergency</p>
              </div>
            </div>
          </div> */}

          {/* Back to SVKM (Optional) */}
          {/* <div className="mt-4">
            <Link href="/" className="btn btn-primary px-4">
              Back to Home
            </Link>
          </div> */}

        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .coming-wrapper {
          min-height: 100vh;
          background: linear-gradient(135deg, #e3f2fd, #ffffff);
          padding: 20px;
        }

        .coming-card {
          border-radius: 20px;
          background: #ffffff;
        }

        .icon-wrapper {
          font-size: 60px;
          color: #0d6efd;
        }

        .pulse-icon {
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }

        .info-box {
          background: #f8f9fa;
          border-radius: 12px;
          transition: 0.3s ease;
        }

        .info-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .emergency-box {
          background: #fff5f5;
        }
      `}</style>
    </div>
  );
};

export default ComingSoonPage;
