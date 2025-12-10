"use client";
import { use } from "react";
import AboutUsSection from "../../components/aboutUsSection";
import BlogsSection from "../../components/blogsSection";
import ContactSection from "../../components/contactSection";
import DepartmentsSection from "../../components/departmentsSection";
import FrequentlyAskedQuestionsSection from "../../components/frequentlyAskedQuestionsSection";
import HeroBanner from "../../components/heroBanner";
import HospitalStats from "../../components/hospitalStats";
import ImageGallarySection from "../../components/imageGallarySection";
import NewsAndEventsSection from "../../components/newsAndEventsSection";
import TestimonialSection from "../../components/testimonialSection";

export default function LocaleHome({ params }) {
  return (
    <>
      {/* <div>
        <h1>{t("home.title")}</h1>
        <p>Locale: {locale}</p>
      </div> */}
      {/* <h1>Home Page ({locale})</h1> */}
      <HeroBanner images={["/images/hospital_banner_image1.png"]} />
      <AboutUsSection />
      <HospitalStats />
      <DepartmentsSection />
      <NewsAndEventsSection />
      <BlogsSection />
      <FrequentlyAskedQuestionsSection />
      <TestimonialSection />
      <ImageGallarySection />
      <ContactSection />
    </>
  );
}
