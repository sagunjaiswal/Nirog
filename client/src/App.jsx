import React from "react";
import styles from "./App.module.css";
//module import begins
import Application from "./Containers/App/Application";
const App = () => {
  return (
    <div className={styles.AppContainer}>
      <Application />
    </div>
  );
};

export default App;
