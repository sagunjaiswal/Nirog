import React from "react";
import styles from "./App.module.css";
//module import begins
import Application from "./Containers/App/Application";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
const App = () => {
  return (
    <Router>
    <div className={styles.AppContainer}>
      <Application />
    </div>
    <Switch>
      {/* <Route path="/" exact component={Application} /> */}
     </Switch>
    </Router>
  );
};

export default App;
