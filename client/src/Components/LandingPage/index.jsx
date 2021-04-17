import React from "react";
import { Link } from "react-router-dom";
import Accordion from "../../Components/faqs/Accordion";

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
      <Accordion />
    </div>
  );
};

export default LandingPage;
