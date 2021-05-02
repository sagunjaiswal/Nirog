import React from "react";
import { Link } from "react-router-dom";
import Accordion from "../../Components/faqs/Accordion";
import DoctorCategoryCard from "../../Components/Cards/DoctorCategoryCard";

const LandingPage = () => {
  return (
    <div>
      <Link to="/doctor-registration">
        <button>DOCTOR REGISTRATION FORM</button>
      </Link>
      <br />
      <Link to="/doctor-login">
        <button>DOCTOR LOGIN FORM</button>
      </Link>
      <br />
      <Link to="/user-registration">
        <button>USER REGISTRATION FORM</button>
      </Link>
      <br />
      <Link to="/user-login">
        <button>USER LOGIN FORM</button>
      </Link>
      <DoctorCategoryCard />
      <Accordion />
    </div>
  );
};

export default LandingPage;
