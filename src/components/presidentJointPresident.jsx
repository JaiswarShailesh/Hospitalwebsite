import React from "react";

export default function PresidentJointPresidentSection() {
  return (
    <>
      <section id="foundersLeaders">
        <div className="container section-title" data-aos="fade-up">
          <h2>President & Joint President</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-2 col-lg-2">
              <img
                alt="..."
                className="img-fluid rounded-circle shadow"
                src="images/Amrishbhai_patel.png"
              />
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="card-body ms-md-5 mt-3 mt-md-0">
                <div className="text-muted">President</div>
                <h3 className="fw-bold m-0 mb-4">Shri Amrishbhai Patel</h3>
                <p className="lead">
                  Shri Vile Parle Kelavani Mandal (SVKM), a Public Charitable
                  Trust & Society, born in 1934 with adoption of a school has
                  its existence over 85 years and has established a brand name
                  in education scenario.
                </p>
                <div className="d-flex mt-4">
                  <a
                    className="btn btn-accent rounded-pill me-2"
                    href="amrishbhaiPate.html"
                  >
                    Know More
                    <i
                      className="fa-solid fa-arrow-right ms-1"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <img
                alt="..."
                className="img-fluid rounded-circle shadow"
                src="images/Bhupeshbhai_Patel.png"
              />
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="card-body ms-md-5 mt-3 mt-md-0">
                <div className="text-muted">Joint President</div>
                <h3 className="fw-bold m-0 mb-4">Shri Bhupeshbhai Patel</h3>
                <p className="lead">
                  Shri Vile Parle Kelavani Mandal (SVKM), a Public Charitable
                  Trust & Society, born in 1934 with adoption of a school has
                  its existence over 85 years and has established a brand name
                  in education scenario.
                </p>
                <div className="d-flex mt-4">
                  <a className="btn btn-sm me-2" href=""></a>
                  <a className="btn btn-sm me-2" href=""></a>
                  <a className="btn btn-sm" href=""></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
