import React from "react";
import styles from "./styles.module.css";

export default function AboutUs() {
  return (
    <>
      <h1>About Us</h1>
      <div className={styles.container}>
        <div className={styles.aboutUsImg}>
          <img src=".\assets\aboutUs.svg" alt="about us " />
        </div>
        <div className={styles.aboutUs}>
          DocTalk is on a goal to make doctor consulattaions accessible.It is
          quick easy to use. With the help of DocTalk you can book appointments
          of the best doctors and medical practitioners in a matter of seconds.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sequi
          expedita debitis. Facilis quam quos aut beatae velit voluptates
          praesentium repellat harum optio recusandae laudantium, soluta
          accusantium sed. Eos maiores officiis necessitatibus enim deserunt,
          similique.
        </div>
      </div>
    </>
  );
}
