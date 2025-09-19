"use client";

import { useState } from "react";
import HeroBanner from "../../components/heroBanner";
import dayCareData from "../../data/dayCareData";
import TabbedContentComponent from "../../components/tabbedContentComponent";
import ContactSection from "../../components/contactSection";

export default function DayCarePage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <HeroBanner images={["/images/general_hospital_banner.png"]} />
      <section id="opdSection" className="departments section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Day Care</h2>
          <p>Comprehensive care and comfort throughout your hospital stay.</p>
        </div>
        <TabbedContentComponent data={dayCareData} />
      </section>
      <ContactSection />
    </>
  );
}
