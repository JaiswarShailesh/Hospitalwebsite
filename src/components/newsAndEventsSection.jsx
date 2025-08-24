"use client";

import Slider from "react-slick";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const newsData = [
  {
    img: "/images/newsImage1.webp",
    title: "State-of-the-Art Cath Lab Inaugurated",
    text: "SVKM’s TM Patel Hospital has launched a new Cath Lab equipped with the latest cardiac imaging technology to improve.",
  },
  {
    img: "/images/newsImage2.webp",
    title: "Blood Donation Drive Held Successfully",
    text: "Over 300 donors participated in our annual blood donation camp, helping replenish critical blood supplies across the region.",
  },
  {
    img: "/images/newsImage3.webp",
    title: "Hospital Achieves NABH Accreditation",
    text: "We are proud to be officially accredited by NABH, a mark of excellence in patient safety and hospital quality standards.",
  },
  {
    img: "/images/newsImage4.webp",
    title: "Advanced Radiology Wing Now Operational",
    text: "Our upgraded radiology department now features 3T MRI and low-dose CT scanners to support faster and more accurate diagnoses.",
  },
  {
    img: "/images/newsImage1.webp",
    title: "Another Event",
    text: "This is another event from the hospital's recent updates.",
  },
];

export default function NewsCarousel() {
  function NextArrow({ onClick }) {
    return (
      <div className="slick-arrow next wrapper shadow">
        <FaArrowRight className="slick-arrow next " onClick={onClick} />
      </div>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <div className="slick-arrow prev wrapper shadow">
        <FaArrowLeft className="slick-arrow prev " onClick={onClick} />
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container mx-auto px-4">
      {/* <!-- News and Events Section --> */}
      <section id="newsAndEvents" className="services section">
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>News & Events</h2>
          <p>
            Stay updated with the latest happenings, achievements, and community
            outreach from our hospital.
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container">
          <div className="row gy-4 slider-container">
            {/* <!-- Owl Carousel --> */}
            {/* <div className="col">
              <div className="generic-carousel owl-carousel owl-theme">
                <div className="item">
                  <a href="">
                    <div className="card custom-card">
                      <div className="clipped-image-wrapper mb-3">
                        <img
                          src="images/newsImage1.webp"
                          className="card-img-top clipped-img"
                          alt="..."
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="pb-2 custom-card-heading">
                          State-of-the-Art Cath Lab Inaugurated
                        </h5>
                        <p className="card-text">
                          SVKM’s TM Patel Hospital has launched a new Cath Lab
                          equipped with the latest cardiac imaging technology to
                          improve.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="card custom-card">
                      <div className="clipped-image-wrapper mb-3">
                        <img
                          src="images/newsImage2.webp"
                          className="card-img-top clipped-img"
                          alt="..."
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="pb-2 custom-card-heading">
                          Blood Donation Drive Held Successfully
                        </h5>
                        <p className="card-text">
                          Over 300 donors participated in our annual blood
                          donation camp, helping replenish critical blood
                          supplies across the region.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="card custom-card">
                      <div className="clipped-image-wrapper mb-3">
                        <img
                          src="images/newsImage3.webp"
                          className="card-img-top clipped-img"
                          alt="..."
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="pb-2 custom-card-heading">
                          Hospital Achieves NABH Accreditation
                        </h5>
                        <p className="card-text">
                          We are proud to be officially accredited by NABH, a
                          mark of excellence in patient safety and hospital
                          quality standards.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="card custom-card">
                      <div className="clipped-image-wrapper mb-3">
                        <img
                          src="images/newsImage4.webp"
                          className="card-img-top clipped-img"
                          alt="..."
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="pb-2 custom-card-heading">
                          Advanced Radiology Wing Now Operational
                        </h5>
                        <p className="card-text">
                          Our upgraded radiology department now features 3T MRI
                          and low-dose CT scanners to support faster and more
                          accurate diagnoses.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="card custom-card">
                      <div className="clipped-image-wrapper mb-3">
                        <img
                          src="images/newsImage1.webp"
                          className="card-img-top clipped-img"
                          alt="..."
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="pb-2 custom-card-heading">
                          State-of-the-Art Cath Lab Inaugurated
                        </h5>
                        <p className="card-text">
                          SVKM’s TM Patel Hospital has launched a new Cath Lab
                          equipped with the latest cardiac imaging technology to
                          improve.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="card custom-card">
                      <div className="clipped-image-wrapper mb-3">
                        <img
                          src="images/newsImage2.webp"
                          className="card-img-top clipped-img"
                          alt="..."
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="pb-2 custom-card-heading">
                          Blood Donation Drive Held Successfully
                        </h5>
                        <p className="card-text">
                          Over 300 donors participated in our annual blood
                          donation camp, helping replenish critical blood
                          supplies across the region.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="card custom-card">
                      <div className="clipped-image-wrapper mb-3">
                        <img
                          src="images/newsImage3.webp"
                          className="card-img-top clipped-img"
                          alt="..."
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="pb-2 custom-card-heading">
                          Hospital Achieves NABH Accreditation
                        </h5>
                        <p className="card-text">
                          We are proud to be officially accredited by NABH, a
                          mark of excellence in patient safety and hospital
                          quality standards.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="card custom-card">
                      <div className="clipped-image-wrapper mb-3">
                        <img
                          src="images/newsImage4.webp"
                          className="card-img-top clipped-img"
                          alt="..."
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="pb-2 custom-card-heading">
                          Advanced Radiology Wing Now Operational
                        </h5>
                        <p className="card-text">
                          Our upgraded radiology department now features 3T MRI
                          and low-dose CT scanners to support faster and more
                          accurate diagnoses.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div> */}

            <Slider {...settings}>
              {newsData.map((item, index) => (
                <div key={index} className="px-2 h-full">
                  <div className=" rounded-lg shadow-md overflow-hidden border card custom-card h-full flex flex-col">
                    <div className="clipped-image-wrapper mb-3">
                      <Image
                        width={0}
                        height={0}
                        sizes="100%"
                        src={item.img}
                        alt={item.title}
                        className="w-full h-48 object-cover card-img-top clipped-img"
                      />
                    </div>
                    <div className="card-body flex flex-col flex-grow">
                      <h5 className="pb-2 custom-card-heading">{item.title}</h5>
                      <p className="card-text flex-grow">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            {/* <!-- Owl Carousel End --> */}
            {/* <!-- End Service Item --> */}
          </div>
        </div>
      </section>
      {/* <!-- /News and Events Section --> */}
    </div>
  );
}
