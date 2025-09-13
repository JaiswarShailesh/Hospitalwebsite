import { useState } from "react";

export default function TabbedContentComponent({ data }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row">
        {/* Left Side Nav */}
        <div className="col-lg-3">
          <ul className="nav nav-tabs flex-column">
            {data.map((tab, index) => (
              <li key={index} className="nav-item">
                <a
                  className={`cursor-pointer nav-link ${
                    activeTab === index ? "active show" : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Content */}
        <div className="col-lg-9 mt-4 mt-lg-0">
          <div className="tab-content">
            {data.map((tab, index) => (
              <div
                key={index}
                className={`tab-pane fade ${
                  activeTab === index ? "active show" : ""
                }`}
              >
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>{tab.title}</h3>
                    <p className="fst-italic">{tab.intro}</p>
                    {Array.isArray(tab.description) ? (
                      tab.description.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))
                    ) : (
                      <p>{tab.description}</p>
                    )}
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src={tab.image}
                      alt={tab.title}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
