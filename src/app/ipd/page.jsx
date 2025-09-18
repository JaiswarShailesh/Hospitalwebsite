"use client";

import { useState } from "react";
import HeroBanner from "../../components/heroBanner";
import ipdData from "../../data/ipdData";
import TabbedContentComponent from "../../components/tabbedContentComponent";
import ContactSection from "../../components/contactSection";

export default function IpdPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <HeroBanner images={["/images/general_hospital_banner.png"]} />
      <section id="opdSection" className="departments section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>In-patient Department</h2>
          <p>Comprehensive care and comfort throughout your hospital stay.</p>
        </div>
        <TabbedContentComponent data={ipdData} />
      </section>
      <ContactSection />
    </>
  );
}
