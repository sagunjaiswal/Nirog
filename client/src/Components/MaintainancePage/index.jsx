import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
const UnderMaintaince = () => {
  const [imageName, setImageName] = useState("");
  console.log(
    "🚀 ~ file: index.jsx ~ line 5 ~ UnderMaintaince ~ imageName",
    imageName
  );
  const randomImageGenrator = () => {
    let imageIndex = Math.round(Math.random() * 3) + 1;
    let imgName = `/assets/WorkingOnIt${imageIndex}.svg`;
    setImageName(imgName);
  };
  useEffect(() => {
    randomImageGenrator();
  }, []);

  return (
    <div className={styles.container}>
      <img src={imageName} alt="Under-Maintaince" />
      <p>We are Working on it...</p>
    </div>
  );
};

export default UnderMaintaince;
