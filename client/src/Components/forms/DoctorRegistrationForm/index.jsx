import React, { useState } from "react";
import styles from "./styles.module.css";
import DoctorDetails from "./DoctorDetails";
import ClinicDetails from "./ClinicDetails";
import { doctorRegistrationHandler } from "../../../helperMethods";

const DoctorRegistrationForm = () => {
  const [personalDetails, setPersonalDetails] = useState({});
  const [clinicData, setClinicData] = useState({});
  const [backendError, setBackendError] = useState("");
  const [showClinicForm, setShowClinicForm] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const objToSend = {
      ...personalDetails,
      ...clinicData,
    };
    doctorRegistrationHandler(objToSend);
  };
  return (
    <div className={styles.formContainer}>
      <DoctorDetails
        personalDataCollector={setPersonalDetails}
        showClinicForm={showClinicForm}
        setShowClinicForm={setShowClinicForm}
      />
      {showClinicForm || Object.keys(personalDetails).length ? (
        <ClinicDetails clinicDataCollector={setClinicData} />
      ) : null}
      <button
        type="submit"
        onClick={(e) => submitHandler(e)}
        className="btn btn-success"
        disabled={Object.keys(personalDetails).length ? false : true}
      >
        SUBMIT
      </button>
      {backendError.length ? (
        <p style={{ color: "red" }}>Error : {backendError}</p>
      ) : null}
    </div>
  );
};
export default DoctorRegistrationForm;
