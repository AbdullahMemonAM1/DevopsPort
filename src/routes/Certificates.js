import React from "react";
import CertificateContent from "../Components/CertificatesContent";
import Navbar from "../Components/Navbar";
import HeroImg2 from "../Components/HeroImg2";
import Footer from "../Components/Footer";

const Certificates = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Certificates" text="My Certificates Include" />
      <CertificateContent />
      <Footer />
    </div>
  );
};

export default Certificates;
