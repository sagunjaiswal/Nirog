import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Default from "../Components/Default";
import Footer from "../Components/Footer/Footer";
import DoctorRegistrationForm from "../Components/forms/DoctorRegistrationForm/index";
import UserRegistrationForm from "../Components/forms/UserRegistrationForm/index";
import Navbar from "../Components/Header/Navbar";
import UnderMaintaince from "../Components/MaintainancePage/index";
import Application from "../Containers/App/Application";
import LoginPage from "../Containers/LoginPage/index";
import RegistrationPage from "../Containers/RegistrationPage/index";
import Axios from "axios";
import UserContext from "../UserContext";

const Routes = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  //check  for whether the user login data is  in the localStorage or not ,
  //even after refresh or closing and opening the tabs the details should be present in the localstorage
  useEffect(() => {
    const checkLoggenIn = async () => {
      //if token is present in the localstorage then get the token otherwise just set the token to empty string
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      //posting data to the backend at /isTokenValid
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });

        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggenIn();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Navbar />
        <Switch>
          <Route
            path="/register"
            component={userData.user ? Application : RegistrationPage}
          />
          <Route
            path="/login"
            component={userData.user ? Application : LoginPage}
          />
          <Route
            path="/doctor-registration"
            component={userData.user ? Application : DoctorRegistrationForm}
          />
          <Route
            path="/user-registration"
            component={userData.user ? Application : UserRegistrationForm}
          />
          <Route path="/maintainance" component={UnderMaintaince} />
          <Route path="/" exact component={Application} />
          <Route component={Default} />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </UserContext.Provider>
    </Router>
  );
};

export default Routes;
