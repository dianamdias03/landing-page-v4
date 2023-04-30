import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import Treatments from "../components/Sections/Treatments";
import Expertise from "../components/Sections/Expertise";
import Questions from "../components/Sections/Questions";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Treatments/>
      <Expertise/>
      <Questions/>
      {/*<Blog />
      <Projects />
      <Pricing />*/}
      <Contact />
      <Footer />
    </>
  );
}


