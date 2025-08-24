"use client";

import { useEffect } from "react";
import AOS from "aos";
import dynamic from "next/dynamic";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";

// Dynamically import GLightbox only on client
const GLightbox = dynamic(() => import("glightbox"), { ssr: false });

export default function ImageGallarySection() {
  const galleryImages = [
    "gallery-1.jpg",
    "gallery-2.jpg",
    "gallery-3.jpg",
    "gallery-4.jpg",
    "gallery-5.jpg",
    "gallery-6.jpg",
    "gallery-7.jpg",
    "gallery-8.jpg",
  ];

  useEffect(() => {
    AOS.init();

    let lightbox;
    (async () => {
      const GLightboxModule = (await import("glightbox")).default;
      lightbox = GLightboxModule({
        selector: ".glightbox",
        touchNavigation: true,
        loop: true,
        closeButton: true, // ✅ Enable close button
        keyboardNavigation: true, // ✅ Allow arrow keys
        draggable: true,
        autoplayVideos: false,
      });
    })();

    return () => {
      if (lightbox) lightbox.destroy();
    };
  }, []);

  return (
    <section id="gallery" className="gallery section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Gallery</h2>
        <p>A glimpse into our hospital, events, and patient care moments.</p>
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="gallery-item">
                <a
                  href={`/images/gallery/${image}`}
                  className="glightbox"
                  data-gallery="images-gallery"
                >
                  <img
                    src={`/images/gallery/${image}`}
                    alt={`Gallery ${index + 1}`}
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
