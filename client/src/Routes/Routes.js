import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Default from "../Components/Default";
import Footer from "../Components/Footer/Footer";
import DoctorRegistrationForm from "../Components/forms/Doctor/RegistrationForm/DoctorRegistrationForm.jsx";
import Navbar from "../Components/Header/Navbar";
import Application from "../Containers/App/Application";
import LoginPage from "../Containers/LoginPage";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/doctor-registration" component={DoctorRegistrationForm} />
        <Route path="/doctor-login" component={LoginPage} />
        <Route path="/" exact component={Application} />
        <Route component={Default} />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
};

export default Routes;
