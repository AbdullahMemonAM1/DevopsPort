import React from "react";
import Navbar from "../Components/Navbar";
import HeroImg2 from "../Components/HeroImg2";
import Footer from "../Components/Footer";
import AboutContent from "../Components/AboutContent";
import EducationContent from "../Components/EducationContent";
const Education = () => {
  return (
    <>
      <div>
        <Navbar />
        <HeroImg2 heading="Education" text="My Academic Journey" />
        <EducationContent />
        <Footer />
      </div>
    </>
  );
};

export default Education;
