import React, { useState } from "react";
import styles from "./Footer.module.css";
import SocialButtonsContainer from "react-social-media-buttons";

export default function Footer() {
  const [contactUsEmail, setContactusEmail] = useState("");
  const [contactUsMessage, setContactUsMessage] = useState("");
  const [contactUsStatus, setContactUsStatus] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "contactUsEmail") setContactusEmail(value);
    else if (name === "contactUsMessage") setContactUsMessage(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const contactUsObjToBeSent = {
      email: contactUsEmail,
      message: contactUsMessage,
    };
    console.log(contactUsObjToBeSent);
  };

  return (
    <>
      <div className={styles.mainFooter}>
        <div className={styles.subFooter}>
          <h2>ABOUT US</h2>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quia aperiam ullam accusamus, architecto illo natus. Error
            consequuntur odio, a placeat nostrum doloribus qui voluptas iste
            veniam obcaecati sapiente explicabo, repellat ex minus perspiciatis
            dolor, laborum nobis distinctio illum velit.
          </p>
          <SocialButtonsContainer
            links={[
              "https://www.facebook.com/facebook",
              "https://twitter.com/Twitter",
              "https://www.instagram.com/instagram/",
              "https://www.linkedin.com/company/linkedin/",
            ]}
            buttonStyle={{
              width: "38px",
              height: "38px",
              margin: "0px 5px",
              backgroundColor: "#000000",
              borderRadius: "40%",
              border: "0px solid #000000",
            }}
            iconStyle={{ color: "#6691b7" }}
            openNewTab={true}
          />
        </div>
        <div className={styles.subFooter}>
          <h2>Address</h2>
          <div class="content">
            <div class="place">
              <span class="fas fa-map-marker-alt"></span>
              <span class="text">Adisaptagram</span>
            </div>
            <div class="phone">
              <span class="fas fa-phone-alt"></span>
              <span class="text">1234-5678</span>
            </div>
            <div class="email">
              <span class="fas fa-envelope"></span>
              <span class="text">abc@aot.edu.in</span>
            </div>
          </div>
        </div>
        <div className={styles.subFooter}>
          <h2>Contact Us</h2>
          <div className={styles.content}>
            <form onSubmit={(e) => onSubmitHandler(e)}>
              <div className={styles.email}>
                <div className={styles.text}>Email *</div>
                <input
                  type="email"
                  name="contactUsEmail"
                  value={contactUsEmail}
                  onChange={(e) => onChangeHandler(e)}
                  required
                />
              </div>
              <div className={styles.msg}>
                <div className={styles.text}>Message*</div>
                <textarea
                  name="contactUsMessage"
                  value={contactUsMessage}
                  onChange={(e) => onChangeHandler(e)}
                  rows="2"
                  cols="25"
                  required
                />
              </div>
              <div className={styles.btn}>
                <button type="submit">
                  {contactUsStatus ? <p>Sent</p> : <p>Send Email</p>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <center>
          <span className={styles.credit}>Credited by DocTalk |</span>
          <span>&copy;</span>
          <span id="date"></span>
          <span>All rights reserved</span>
        </center>
      </div>
    </>
  );
}
