import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import AboutMe from "../components/Sections/AboutMe";
import Footer from "../components/Sections/Footer"
import Expertise from "../components/Sections/Expertise";
import Questions from "../components/Sections/Questions";
import Maps from "../components/Sections/Maps";
import Contact from "../components/Sections/Contact";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <AboutMe/>
      <Expertise/>
      {/*<Treatments/>
      <Questions/>
      
      <Maps/>*/}
      <Contact />
      <Footer />
    </>
  );
}


