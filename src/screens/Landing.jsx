import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import AboutMe from "../components/Sections/AboutMe";
import Footer from "../components/Sections/Footer"
import Treatments from "../components/Sections/Treatments";
import Expertise from "../components/Sections/Expertise";
import Questions from "../components/Sections/Questions";
import Maps from "../components/Sections/Maps";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <AboutMe/>
      {/*<Treatments/>
      <Expertise/>
      <Questions/>
      <Contact />
      <Maps/>*/}
      <Footer />
    </>
  );
}


