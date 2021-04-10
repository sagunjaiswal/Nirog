import React from "react";
import styles from "./App.module.css";
import Application from "./Containers/App/Application";
import Routes from "./Routes/Routes";

const App = () => {
  return (   
    <div className={styles.AppContainer}>
      <Routes/>
      
    </div>    
  );
};

export default App;
