import React from "react";
import styles from "./App.module.css";
import Routes from "./Routes/Routes";

const App = () => {
  return (
    <div className={styles.AppContainer}>
      <Routes />
    </div>
  );
};

export default App;
