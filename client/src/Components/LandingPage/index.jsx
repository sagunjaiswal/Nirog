import React from "react";
import Accordion from "../../Components/faqs/Accordion";
import DoctorCategoryCard from "../../Components/Cards/DoctorCategoryCard";

const LandingPage = () => {
  return (
    <div>
      <DoctorCategoryCard />
      <Accordion />
    </div>
  );
};

export default LandingPage;
