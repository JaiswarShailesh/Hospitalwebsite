"use client";

import TabbedContentComponent from "../../components/tabbedContentComponent";
import tpaInsuracenCorporatedata from "../../data/tpaInsuranceCorporate";
import HeroBanner from "../../components/heroBanner";
import insuranceCompanies from "../../data/insuranceCompanies";

export default function TpaInsuranceCorporate() {
  return (
    <>
      <HeroBanner images={["/images/general_hospital_banner.png"]} />
      <section id="whyChooseUs" className="departments section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Medical Insurance & TPA Services</h2>
          <p>Your health secured with hassle-free insurance support.</p>
        </div>
        <TabbedContentComponent data={tpaInsuracenCorporatedata} />
      </section>
      <section id="whyChooseUs" className="doctors section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Empanelled TPAs and Insurance</h2>
          <p>
            We are partnered with leading TPAs and insurance providers to make
            quality healthcare accessible and stress-free
          </p>
        </div>
        <div className="container">
          <div className="row gy-4">
            {insuranceCompanies.map((company, index) => (
              <div
                key={index}
                className="col-lg-4 col-xl-3"
                data-aos="fade-up"
                data-aos-delay={company.delay}
              >
                <a href={company.docLink} target="_blank">
                  <div className="team-member d-flex flex-column align-items-center">
                    <div className="pic rounded-0">
                      <img
                        src={company.imageUrl}
                        className="img-fluid"
                        alt={company.name}
                      />
                    </div>
                    <div className="member-info">
                      <h4 className="text-center">{company.name}</h4>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
