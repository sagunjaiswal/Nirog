import React from "react";
import styles from "./App.module.css";
import Routes from "./Routes/Routes";
import Application from "./Containers/App/Application";

const App = () => {
  return (
    <div className={styles.pageContainer}>
      <Routes>
        <Application />
      </Routes>
    </div>
  );
};

export default App;
