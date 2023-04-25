import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import Treatments from "../components/Sections/Treatments";
import Expertise from "../components/Sections/Expertise";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Treatments/>
      <Expertise/>
      {/*<Blog />
      <Projects />
      <Pricing />*/}
      <Contact />
      <Footer />
    </>
  );
}


