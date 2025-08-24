import React from "react";

// Trustee data array
const trusteesData = [
  {
    name: "Shree Bharat M. Sanghvi",
    title: "Vice President",
    image: "https://freefrontend.dev/assets/square.png",
    group: "top",
  },
  {
    name: "Shree Chintan A. Patel",
    title: "Vice President",
    image: "https://freefrontend.dev/assets/square.png",
    group: "top",
  },
  {
    name: "Shree Jayant P. Gandhi",
    title: "Secretary",
    image: "https://freefrontend.dev/assets/square.png",
    group: "top",
  },
  {
    name: "Shree Harshad H. Shah",
    title: "Treasurer",
    image: "https://freefrontend.dev/assets/square.png",
    group: "top",
  },
  {
    name: "Shree Shalin S. Divatia",
    title: "Jt. Secretary",
    image: "https://freefrontend.dev/assets/square.png",
    group: "bottom",
  },
  {
    name: "Shree Harit H. Chitalia",
    title: "Jt. Treasurer",
    image: "https://freefrontend.dev/assets/square.png",
    group: "bottom",
  },
  {
    name: "Shree Jagdish P. Parikh",
    title: "Jt. Treasurer",
    image: "https://freefrontend.dev/assets/square.png",
    group: "bottom",
  },
];

export default function OurTrusteesSection() {
  const topTrustees = trusteesData.filter((t) => t.group === "top");
  const bottomTrustees = trusteesData.filter((t) => t.group === "bottom");

  const renderTrustees = (list, colSize = "col-sm-6") =>
    list.map((trustee, index) => (
      <div className={colSize} key={index}>
        <div className="card text-center border-0 bg-light">
          <div className="card-body px-4 py-4">
            <div className="mb-4 mx-2 mx-md-5">
              <img
                className="img-fluid rounded-circle"
                src={trustee.image}
                alt={trustee.name}
              />
            </div>
            <h5 className="fw-bold">{trustee.name}</h5>
            <div className="text-muted">{trustee.title}</div>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      {/* <!-- Our Trustees  --> */}
      <section id="trustees" className="section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Trustees</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Left Column with Cards */}
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="row g-3">{renderTrustees(topTrustees)}</div>
            </div>

            {/* Right Column with Description */}
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="ms-lg-5 mb-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta harum ipsum venenatis metus sem veniam eveniet aperiam
                  suscipit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta harum ipsum venenatis metus sem veniam eveniet aperiam
                  suscipit.
                </p>
              </div>
            </div>

            {/* Bottom Trustees */}
            <div className="col-lg-12 order-3 order-lg-3">
              <div className="row g-3">
                {renderTrustees(bottomTrustees, "col-sm-3")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
