import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Accordion from "../../Components/faqs/Accordion";
// import styles from "./Application.module.css";
// import Routes from "../../Routes/Routes";

const Application = () => {
  return (
    <div>
      <Navbar />
      <Link to="/doctor-registration">
        <button>DOCTOR REGISTRATION FORM</button>
      </Link>
      <br />
      <Link to="/doctor-login">
        <button>DOCTOR LOGIN FORM</button>
      </Link>
      <Accordion />
      <Footer />
    </div>
  );
};

export default Application;
