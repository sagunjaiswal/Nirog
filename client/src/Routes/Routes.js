import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Default from "../Components/Default";
import DoctorRegistrationForm from "../Components/DoctorRegistrationForm";
import DoctorLoginForm from "../Components/DoctorLoginForm";
import Application from "../Containers/App/Application";

const Routes = () => {
    return (
      <Router>        
        <Switch>
          <Route path="/doctor-registration" component={DoctorRegistrationForm}/>
          <Route path="/doctor-login" component={DoctorLoginForm}/>
          <Route path="/" exact component={Application} />
          <Route component={Default} />
        </Switch>        
      </Router>
    );
  };

  export default Routes;