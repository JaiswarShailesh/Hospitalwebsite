import AboutUsSection from "../../components/aboutUsSection";
import React from "react";
import HeroBanner from "../../components/heroBanner";
import MissionVisionSection from "../../components/missionVisionSection";
import PresidentJointPresidentSection from "../../components/presidentJointPresident";
import OurTrusteesSection from "../../components/ourTrusteesSection";
import ManagementTeamSection from "../../components/managementTeamSection";
import WhyChooseUsSection from "../../components/whyChooseUsSection";
import ImageGallarySection from "../../components/imageGallarySection";
import ContactSection from "../../components/contactSection";

export default function AboutPage() {
  return (
    <>
      <HeroBanner images={["/images/about_us_banner.png"]} />
      <AboutUsSection />
      <MissionVisionSection />
      <PresidentJointPresidentSection />
      <OurTrusteesSection />
      <ManagementTeamSection />
      <WhyChooseUsSection />
      <ImageGallarySection />
      <ContactSection />
    </>
  );
}
