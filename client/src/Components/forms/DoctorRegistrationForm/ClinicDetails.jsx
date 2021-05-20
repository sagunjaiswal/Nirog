import React, { useState } from "react";
import styles from "./ClinicDetails.module.css";
import TimingForm from "./TimingForm";
const ClinicDetails = ({ clinicDataCollector }) => {
  //address
  const [clinicName, setClinicName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [locality, setLocality] = useState("");
  const [landmark, setLandmark] = useState("");
  const [postOffice, setPostOffice] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [timingDetails, setTimingDetails] = useState({});
  const [showTimingForm, setShowTimingForm] = useState(false);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trimLeft();
    if (name === "clinicName") setClinicName(trimmedValue);
    else if (name === "streetName") setStreetName(trimmedValue);
    else if (name === "locality") setLocality(trimmedValue);
    else if (name === "landmark") setLandmark(trimmedValue);
    else if (name === "postOffice") setPostOffice(trimmedValue);
    else if (name === "pinCode") setPinCode(trimmedValue);
    else if (name === "city") setCity(trimmedValue);
    else if (name === "district") setDistrict(trimmedValue);
    else if (name === "state") setState(trimmedValue);
  };

  const _submitHandler = (e) => {
    e.preventDefault();
    let clinicDetails = {
      clinicName: clinicName,
      streetName: streetName,
      locality: locality,
      landmark: landmark,
      postOffice: postOffice,
      pinCode: pinCode,
      city: city,
      district: district,
      state: state,
      time: { ...timingDetails },
    };
    clinicDataCollector(clinicDetails);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.clinicDetailsForm}>
        {/* <h2>Address : </h2> */}
        <div className={styles.inputSection}>
          <label>Clinic Name* : </label>
          <input
            type="text"
            value={clinicName}
            name="clinicName"
            placeholder="clinic name"
            onChange={(e) => onChangeHandler(e)}
          />
          <label>Street Name * : </label>
          <input
            type="text"
            value={streetName}
            name="streetName"
            placeholder="Street Name"
            onChange={(e) => onChangeHandler(e)}
            required
          />
          <label>Locality * : </label>
          <input
            type="text"
            value={locality}
            name="locality"
            placeholder="Your Locality"
            onChange={(e) => onChangeHandler(e)}
            required
          />
          <label>Land Mark : </label>
          <input
            type="text"
            value={landmark}
            name="landmark"
            placeholder="Land Mark(if any)"
            onChange={(e) => onChangeHandler(e)}
          />
          <label>Post Office * : </label>
          <input
            type="text"
            value={postOffice}
            name="postOffice"
            placeholder="Post Office"
            onChange={(e) => onChangeHandler(e)}
            required
          />
          <label>Pin Code * : </label>
          <input
            type="text"
            value={pinCode}
            name="pinCode"
            placeholder="Pin Code"
            onChange={(e) => onChangeHandler(e)}
            required
          />
          <label>City/Town * : </label>
          <input
            type="text"
            value={city}
            name="city"
            placeholder="City/Town"
            onChange={(e) => onChangeHandler(e)}
            required
          />
          <label>District * : </label>
          <input
            type="text"
            value={district}
            name="district"
            placeholder="District"
            onChange={(e) => onChangeHandler(e)}
            required
          />
          <label>State * : </label>
          <input
            type="text"
            value={state}
            name="state"
            placeholder="state"
            onChange={(e) => onChangeHandler(e)}
            required
          />
        </div>
        <button
          className="btn btn-block btn-primary"
          style={{
            width: "85%",
            margin: "20px 0",
          }}
          onClick={() => setShowTimingForm(true)}
        >
          Ener Time Details
          <img
            src="/assets/add.svg"
            alt="open-form"
            className={styles.addNextImage}
          />
        </button>
      </form>
      {showTimingForm ? (
        <TimingForm setTimingDetails={setTimingDetails} />
      ) : null}
    </div>
  );
};

export default ClinicDetails;
