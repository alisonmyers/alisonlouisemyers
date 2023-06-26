import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Alison Myers' Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="interests" heading="Skills" />
        <ProjectsSection sectionId="portfolio" heading="Portfolio" />
        <ContactSection sectionId="contact" heading="Contact Me" />
      </Page>
    </>
  );
}
