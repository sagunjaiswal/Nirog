import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Default from "../Components/Default";
import Footer from "../Components/Footer/Footer";
import DoctorRegistrationForm from "../Components/forms/Doctor/RegistrationForm/DoctorRegistrationForm.jsx";
import UserLoginForm from "../Components/forms/Users/LoginForm/UserLoginForm.jsx";
import UserRegistrationForm from "../Components/forms/Users/RegistrationForm/UserRegistrationForm.jsx";
import Navbar from "../Components/Header/Navbar";
import Application from "../Containers/App/Application";
import LoginPage from "../Containers/LoginPage/index";
import RegistrationPage from "../Containers/RegistrationPage/index";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/register" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/doctor-registration" component={DoctorRegistrationForm} />
        <Route path="/doctor-login" component={LoginPage} />
        <Route path="/user-registration" component={UserRegistrationForm} />
        <Route path="/user-login" component={UserLoginForm} />
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
