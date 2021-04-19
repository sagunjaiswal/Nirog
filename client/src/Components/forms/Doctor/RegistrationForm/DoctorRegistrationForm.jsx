import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./DoctorRegistrationForm.module.css";

const DoctorRegistrationForm = () => {
  const [doctorName, setDoctorName] = useState("");
  const [highestDegree, setHighestDegree] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [number, setNumber] = useState("");
  //experience
  const [experienceMonth, setExperienceMonth] = useState("");
  const [experienceYear, setExperienceYear] = useState("");

  // const [rating, setRating] = useState(0);

  const [description, setDescription] = useState("");

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

  //timings
  const [mondayMorningSlot, setMondayMorningSlot] = useState("");
  const [mondayEveningSlot, setMorningEveningSlot] = useState("");
  const [tuesdayMorningSlot, setTuesdayMorningSlot] = useState("");
  const [tuesdayEveningSlot, setTuesdayEveningSlot] = useState("");
  const [wednesdayMorningSlot, setWednesdayMorningSlot] = useState("");
  const [wednesdayEveningSlot, setWednesdayEveningSlot] = useState("");
  const [thursdayMorningSlot, setThursdayMorningSlot] = useState("");
  const [thursdayEveningSlot, setThursdayEveningSlot] = useState("");
  const [fridayMorningSlot, setFridayMorningSlot] = useState("");
  const [fridayEveningSlot, setFridayEveningSlot] = useState("");
  const [saturdayMorningSlot, setSaturdayMorningSlot] = useState("");
  const [saturdayEveningSlot, setSaturdayEveningSlot] = useState("");
  const [sundayMorningSlot, setSundayMorningSlot] = useState("");
  const [sundayEveningSlot, setSundayEveningSlot] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //errors
  const [passwordError, setPasswordError] = useState(false);
  const [numberError, setNumberError] = useState("");
  const [experienceError, setExperienceError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [mondayMorningError, setMondayMorningError] = useState("");
  const [mondayEveningError, setMondayEveningError] = useState("");
  const [tuesdayMorningError, setTuesdayMorningError] = useState("");
  const [tuesdayEveningError, setTuesdayEveningError] = useState("");
  const [wednesdayMorningError, setWednesdayMorningError] = useState("");
  const [wednesdayEveningError, setWednesdayEveningError] = useState("");
  const [thursdayMorningError, setThursdayMorningError] = useState("");
  const [thursdayEveningError, setThursdayEveningError] = useState("");
  const [fridayMorningError, setFridayMorningError] = useState("");
  const [fridayEveningError, setFridayEveningError] = useState("");
  const [saturdayMorningError, setSaturdayMorningError] = useState("");
  const [saturdayEveningError, setSaturdayEveningError] = useState("");
  const [sundayMorningError, setSundayMorningError] = useState("");
  const [sundayEveningError, setSundayEveningError] = useState("");

  // useEffect(() => {
  // }, [number]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trimLeft();
    if (name === "doctorName") setDoctorName(trimmedValue);
    else if (name === "highestDegree") setHighestDegree(trimmedValue);
    else if (name === "speciality") setSpeciality(trimmedValue);
    else if (name === "number") {
      console.log(value);
      if (isNaN(value)) {
        setNumberError("please enter numbers only");
      } else if (number.length > 10) {
        setNumberError("the number has to be of 10 digits only");
      } else {
        let numStr = "";
        for (var i = 0; i < trimmedValue.length; i++) {
          if (
            trimmedValue.charAt(i) >= "0".charAt(0) &&
            trimmedValue.charAt(i) <= "9".charAt(0)
          ) {
            numStr += trimmedValue.charAt(i);
            console.log(true);
          }
        }
        let num = Number(numStr);
        setNumber(num);
        console.log("Number -> " + number);
      }
    } else if (name === "experienceMonth") {
      setExperienceMonth(trimmedValue);
      let expMnth = Number(trimmedValue);
      if (expMnth > 11) {
        setExperienceError(true);
      } else {
        setExperienceError(false);
      }
    } else if (name === "experienceYear") {
      if (trimmedValue.length) {
        let expYr = Number(trimmedValue);
        setExperienceYear(expYr);
      }
    } else if (name === "description") {
      setDescription(trimmedValue);
      if (description.length >= 150) {
        setDescriptionError(true);
      } else setDescriptionError(false);
    } else if (name === "clinicName") setClinicName(trimmedValue);
    else if (name === "streetName") setStreetName(trimmedValue);
    else if (name === "locality") setLocality(trimmedValue);
    else if (name === "landmark") setLandmark(trimmedValue);
    else if (name === "postOffice") setPostOffice(trimmedValue);
    else if (name === "pinCode") setPinCode(trimmedValue);
    else if (name === "city") setCity(trimmedValue);
    else if (name === "district") setDistrict(trimmedValue);
    else if (name === "state") setState(trimmedValue);
    else if (name === "mondayMorningSlot") {
      setMondayMorningSlot(trimmedValue);
      var str = trimmedValue.toLowerCase();
      if (
        (str.length !== 15 && str.length > 0) ||
        (str.charAt(5) !== "a" && str.charAt(5) !== "p") ||
        str.charAt(6) !== "m"
      ) {
        setMondayMorningError("Please follow the format eg. 08:00AM-10:00AM");
      } else {
        setMondayMorningError("");
      }
    } else if (name === "mondayEveningSlot") {
      setMorningEveningSlot(trimmedValue);
      str = trimmedValue.toLowerCase();
      if (
        (str.length !== 15 && str.length > 0) ||
        (str.charAt(5) !== "a" && str.charAt(5) !== "p") ||
        str.charAt(6) !== "m"
      ) {
        setMondayEveningError("Please follow the format eg. 08:00AM-10:00AM");
      } else {
        setMondayEveningError("");
      }
    } else if (name === "tuesdayMorningSlot") {
      setTuesdayMorningSlot(trimmedValue);
      str = trimmedValue.toLowerCase();
      if (
        (str.length !== 15 && str.length > 0) ||
        (str.charAt(5) !== "a" && str.charAt(5) !== "p") ||
        str.charAt(6) !== "m"
      ) {
        setTuesdayMorningError("Please follow the format eg. 08:00AM-10:00AM");
      } else {
        setTuesdayMorningError("");
      }
    } else if (name === "tuesdayEveningSlot") {
      setTuesdayEveningSlot(trimmedValue);
      str = trimmedValue.toLowerCase();
      if (
        (str.length !== 15 && str.length > 0) ||
        (str.charAt(5) !== "a" && str.charAt(5) !== "p") ||
        str.charAt(6) !== "m"
      ) {
        setTuesdayEveningError("Please follow the format eg. 08:00AM-10:00AM");
      } else {
        setTuesdayEveningError("");
      }
    } else if (name === "wednesdayMorningSlot") {
      setWednesdayMorningSlot(trimmedValue);
      str = trimmedValue.toLowerCase();
      if (
        (str.length !== 15 && str.length > 0) ||
        (str.charAt(5) !== "a" && str.charAt(5) !== "p") ||
        str.charAt(6) !== "m"
      ) {
        setWednesdayMorningError(
          "Please follow the format eg. 08:00AM-10:00AM"
        );
      } else {
        setWednesdayMorningError("");
      }
    } else if (name === "wednesdayEveningSlot") {
      setWednesdayEveningSlot(trimmedValue);
      str = trimmedValue.toLowerCase();
      if (
        (str.length !== 15 && str.length > 0) ||
        (str.charAt(5) !== "a" && str.charAt(5) !== "p") ||
        str.charAt(6) !== "m"
      ) {
        setWednesdayEveningError(
          "Please follow the format eg. 08:00AM-10:00AM"
        );
      } else {
        setWednesdayEveningError("");
      }
    } else if (name === "thursdayMorningSlot") {
      setThursdayMorningSlot(trimmedValue);
      str = trimmedValue.toLowerCase();
      if (
        (str.length !== 15 && str.length > 0) ||
        (str.charAt(5) !== "a" && str.charAt(5) !== "p") ||
        str.charAt(6) !== "m"
      ) {
        setThursdayMorningError("Please follow the format eg. 08:00AM-10:00AM");
      } else {
        setThursdayMorningError("");
      }
    } else if (name === "thursdayEveningSlot") {
      setThursdayEveningSlot(trimmedValue);
      str = trimmedValue.toLowerCase();
      if (
        (str.length !== 15 && str.length > 0) ||
        (str.charAt(5) !== "a" && str.charAt(5) !== "p") ||
        str.charAt(6) !== "m"
      ) {
        setThursdayEveningError("Please follow the format eg. 08:00AM-10:00AM");
      } else {
        setThursdayEveningError("");
      }
    } else if (name === "fridayMorningSlot") {
      setFridayMorningSlot(trimmedValue);
      str = trimmedValue.toLowerCase();
      if (
        (str.length !== 15 && str.length > 0) ||
        (str.charAt(5) !== "a" && str.charAt(5) !== "p") ||
        str.charAt(6) !== "m"
      ) {
        setFridayMorningError("Please follow the format eg. 08:00AM-10:00AM");
      } else {
        setFridayMorningError("");
      }
    } else if (name === "fridayEveningSlot") {
      setFridayEveningSlot(trimmedValue);
      str = trimmedValue.toLowerCase();
      if (
        (str.length !== 15 && str.length > 0) ||
        (str.charAt(5) !== "a" && str.charAt(5) !== "p") ||
        str.charAt(6) !== "m"
      ) {
        setFridayEveningError("Please follow the format eg. 08:00AM-10:00AM");
      } else {
        setFridayEveningError("");
      }
    } else if (name === "saturdayMorningSlot") {
      setSaturdayMorningSlot(trimmedValue);
      str = trimmedValue.toLowerCase();
      if (
        (str.length !== 15 && str.length > 0) ||
        (str.charAt(5) !== "a" && str.charAt(5) !== "p") ||
        str.charAt(6) !== "m"
      ) {
        setSaturdayMorningError("Please follow the format eg. 08:00AM-10:00AM");
      } else {
        setSaturdayMorningError("");
      }
    } else if (name === "saturdayEveningSlot") {
      setSaturdayEveningSlot(trimmedValue);
      str = trimmedValue.toLowerCase();
      if (
        (str.length !== 15 && str.length > 0) ||
        (str.charAt(5) !== "a" && str.charAt(5) !== "p") ||
        str.charAt(6) !== "m"
      ) {
        setSaturdayEveningError("Please follow the format eg. 08:00AM-10:00AM");
      } else {
        setSaturdayEveningError("");
      }
    } else if (name === "sundayMorningSlot") {
      setSundayMorningSlot(trimmedValue);
      str = trimmedValue.toLowerCase();
      if (
        (str.length !== 15 && str.length > 0) ||
        (str.charAt(5) !== "a" && str.charAt(5) !== "p") ||
        str.charAt(6) !== "m"
      ) {
        setSundayMorningError("Please follow the format eg. 08:00AM-10:00AM");
      } else {
        setSundayMorningError("");
      }
    } else if (name === "sundayEveningSlot") {
      setSundayEveningSlot(trimmedValue);
      str = trimmedValue.toLowerCase();
      if (
        (str.length !== 15 && str.length > 0) ||
        (str.charAt(5) !== "a" && str.charAt(5) !== "p") ||
        str.charAt(6) !== "m"
      ) {
        setSundayEveningError("Please follow the format eg. 08:00AM-10:00AM");
      } else {
        setSundayEveningError("");
      }
    }
    //credentials
    else if (name === "email") setEmail(trimmedValue);
    else if (name === "password") setPassword(trimmedValue);
    else if (name === "confirmPassword") {
      setConfirmPassword(value);
      // isValidate();
    }
  };

  // const isValidate = () => {
  //   // if(confirmPassword.length === 0)
  //   password.length === confirmPassword.length && password === confirmPassword
  //     ? setPasswordError(false)
  //     : setPasswordError(true);
  // };

  // const onChange = (e) => {
  //   onChangeHandler(e);
  //   // isValidate(e);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const exp = experienceYear + "yrs" + experienceMonth + "mnths";
    const objToSend = {
      name: doctorName,
      highestDegree: highestDegree,
      speciality: speciality,
      // number: number,
      experience: exp,
      description: description,
      // location: {
      //   clinicName: clinicName,
      //   streetName: streetName,
      //   locality: locality,
      //   landmark: landmark,
      //   postOffice: postOffice,
      //   pinCode: pinCode,
      //   city: city,
      //   district: district,
      //   state: state,
      //   time: {
      //     mondayMorningSlot: mondayMorningSlot,
      //     mondayEveningSlot: mondayEveningSlot,
      //     tuesdayMorningSlot: tuesdayMorningSlot,
      //     tuesdayEveningSlot: tuesdayEveningSlot,
      //     wednesdayMorningSlot: wednesdayMorningSlot,
      //     wednesdayEveningSlot: wednesdayEveningSlot,
      //     thursdayMorningSlot: thursdayMorningSlot,
      //     thursdayEveningSlot: thursdayEveningSlot,
      //     fridayMorningSlot: fridayMorningSlot,
      //     fridayEveningSlot: fridayEveningSlot,
      //     saturdayMorningSlot: saturdayMorningSlot,
      //     saturdayEveningSlot: saturdayEveningSlot,
      //     sundayMorningSlot: sundayMorningSlot,
      //     sundayEveningSlot: sundayEveningSlot,
      //   },
      // },
    };
    // if (isValidate(objToSend)) {
    axios
      .post("http://localhost:5000/doctor/register", objToSend)
      .then((res) => {
        console.log(res.data);
        console.log(objToSend);
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  };

  return (
    <div className="container">
      <form
        className={styles.form}
        id={styles.form}
        onSubmit={(e) => submitHandler(e)}
      >
        <div className={styles.formControl}>
          <label>Name * : </label>
          <input
            type="text"
            value={doctorName}
            name="doctorName"
            placeholder="Name"
            onChange={(e) => onChangeHandler(e)}
            required
          />
        </div>
        <div className={styles.formControl}>
          <label>Highest Degree * : </label>
          <input
            type="text"
            value={highestDegree}
            name="highestDegree"
            placeholder="Highest Degree"
            onChange={(e) => onChangeHandler(e)}
            required
          />
        </div>
        <div className={styles.formControl}>
          <label>Speciality : </label>
          <select
            className="custom-select"
            name="speciality"
            onChange={(e) => onChangeHandler(e)}
          >
            <option value="default" selected>
              Choose...
            </option>
            <option value="allergist">Allergist</option>
            <option value="anesthesiologist">Anesthesiologist</option>
            <option value="cardiologist">Cardiologist</option>
            <option value="dentist">Dentist</option>
            <option value="dermatologist">Dermatologist</option>
            <option value="endocrinologist">Endocrinologist</option>
            <option value="gastroenterologist">Gastroenterologist</option>
            <option value="gynecologist">Gynecologist</option>
            <option value="nephrologist">Nephrologist</option>
            <option value="neurologist">Neurologist</option>
            <option value="oncologist">Oncologist</option>
            <option value="ophthalmologist">Ophthalmologist</option>
            <option value="otolaryngologist">Otolaryngologist</option>
            <option value="orthopedist">Orthopedist</option>
            <option value="pediatrician">Pediatrician</option>
            <option value="physician">Physician</option>
            <option value="podiatrist">Podiatrist</option>
            <option value="psychiatrist">Psychiatrist</option>
            <option value="pulmonologist">Pulmonologist</option>
            <option value="radiologist">Radiologist</option>
            <option value="rheumatologist">Rheumatologist</option>
            <option value="surgeon">Surgeon</option>
            <option value="urologist">Urologist</option>
          </select>
          {/* 
          <input
            type="text"
            value={speciality}
            name="speciality"
            placeholder="Speciality"
            onChange={(e) => onChangeHandler(e)}
            required
          /> */}
        </div>
        <div className={styles.formControl}>
          <label>Contact Number * : </label>
          <input
            type="text"
            value={number}
            name="number"
            // pattern="[1-9]{1}[0-9]{9}"
            placeholder="Contact Number"
            onChange={(e) => onChangeHandler(e)}
            required
          />
          {numberError.length ? (
            <div style={{ color: "red" }}>{numberError}</div>
          ) : null}
        </div>
        <div className={styles.formInput}>
          <label>Experience * : </label>
          <input
            type="text"
            value={experienceYear}
            name="experienceYear"
            placeholder="Years"
            onChange={(e) => onChangeHandler(e)}
            required
          />
          <input
            type="text"
            value={experienceMonth}
            name="experienceMonth"
            placeholder="Months"
            onChange={(e) => onChangeHandler(e)}
            required
          />
          {experienceError ? (
            <div style={{ color: "red" }}>
              Experience month should be less than 12
            </div>
          ) : null}
        </div>
        <div className={styles.formInput}>
          <label>Description : </label>
          <textarea
            type="text"
            value={description}
            name="description"
            placeholder="Write something about yourself..."
            onChange={(e) => onChangeHandler(e)}
          />
          {descriptionError ? (
            <div style={{ color: "red" }}>Less than 150 characters allowed</div>
          ) : null}
        </div>
        <div className={styles.formInput}>
          <h2>Address : </h2>
          <lable>Clinic Name * : </lable>
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
        <div className={styles.formInput}>
          <h1>Timings : </h1>
          <h4>Monday : </h4>
          <label>Morning Slot : </label>
          <input
            type="text"
            value={mondayMorningSlot}
            name="mondayMorningSlot"
            placeholder="Mon Morning Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          {mondayMorningError.length ? (
            <div style={{ color: "red" }}>{mondayMorningError}</div>
          ) : null}
          <label>Evening Slot : </label>
          <input
            type="text"
            value={mondayEveningSlot}
            name="mondayEveningSlot"
            placeholder="Mon Evening Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          {mondayEveningError.length ? (
            <div style={{ color: "red" }}>{mondayEveningError}</div>
          ) : null}
          <h4>Tuesday : </h4>
          <label>Morning Slot : </label>
          <input
            type="text"
            value={tuesdayMorningSlot}
            name="tuesdayMorningSlot"
            placeholder="tues Morning Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          {tuesdayMorningError.length ? (
            <div style={{ color: "red" }}>{tuesdayMorningError}</div>
          ) : null}
          <label>Evening Slot : </label>
          <input
            type="text"
            value={tuesdayEveningSlot}
            name="tuesdayEveningSlot"
            placeholder="tues Evening Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          {tuesdayEveningError.length ? (
            <div style={{ color: "red" }}>{tuesdayEveningError}</div>
          ) : null}
          <h4>Wednesday : </h4>
          <label>Morning Slot : </label>
          <input
            type="text"
            value={wednesdayMorningSlot}
            name="wednesdayMorningSlot"
            placeholder="wednesday Morning Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          {wednesdayMorningError.length ? (
            <div style={{ color: "red" }}>{wednesdayMorningError}</div>
          ) : null}
          <label>Evening Slot : </label>
          <input
            type="text"
            value={wednesdayEveningSlot}
            name="wednesdayEveningSlot"
            placeholder="wednesday Evening Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          {wednesdayEveningError.length ? (
            <div style={{ color: "red" }}>{wednesdayEveningError}</div>
          ) : null}
          <h4>Thursday : </h4>
          <label>Morning Slot : </label>
          <input
            type="text"
            value={thursdayMorningSlot}
            name="thursdayMorningSlot"
            placeholder="Thursday Morning Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          {thursdayMorningError.length ? (
            <div style={{ color: "red" }}>{thursdayMorningError}</div>
          ) : null}
          <label>Evening Slot : </label>
          <input
            type="text"
            value={thursdayEveningSlot}
            name="thursdayEveningSlot"
            placeholder="Thursday Evening Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          {thursdayEveningError.length ? (
            <div style={{ color: "red" }}>{thursdayEveningError}</div>
          ) : null}
          <h4>Friday : </h4>
          <label>Morning Slot : </label>
          <input
            type="text"
            value={fridayMorningSlot}
            name="fridayMorningSlot"
            placeholder="fri Morning Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          {fridayMorningError.length ? (
            <div style={{ color: "red" }}>{fridayMorningError}</div>
          ) : null}
          <label>Evening Slot : </label>
          <input
            type="text"
            value={fridayEveningSlot}
            name="fridayEveningSlot"
            placeholder="fri Evening Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          {fridayEveningError.length ? (
            <div style={{ color: "red" }}>{fridayEveningError}</div>
          ) : null}
          <h4>Saturday : </h4>
          <label>Morning Slot : </label>
          <input
            type="text"
            value={saturdayMorningSlot}
            name="saturdayMorningSlot"
            placeholder="Satur Morning Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          {saturdayMorningError.length ? (
            <div style={{ color: "red" }}>{saturdayMorningError}</div>
          ) : null}
          <label>Evening Slot : </label>
          <input
            type="text"
            value={saturdayEveningSlot}
            name="saturdayEveningSlot"
            placeholder="Satur Evening Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          {saturdayEveningError.length ? (
            <div style={{ color: "red" }}>{saturdayEveningError}</div>
          ) : null}
          <h4>Sunday : </h4>
          <label>Morning Slot : </label>
          <input
            type="text"
            value={sundayMorningSlot}
            name="sundayMorningSlot"
            placeholder="Sun Morning Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          {sundayMorningError.length ? (
            <div style={{ color: "red" }}>{sundayMorningError}</div>
          ) : null}
          <label>Evening Slot : </label>
          <input
            type="text"
            value={sundayEveningSlot}
            name="sundayEveningSlot"
            placeholder="Sun Evening Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          {sundayEveningError.length ? (
            <div style={{ color: "red" }}>{sundayEveningError}</div>
          ) : null}
        </div>
        <div className={styles.formInput}>
          <label>Email Id * : </label>
          <input
            type="email"
            value={email}
            name="email"
            placeholder="Email Address"
            onChange={(e) => onChangeHandler(e)}
            required
          />
        </div>
        <div className={styles.formInput}>
          <label>Password * : </label>
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={(e) => onChangeHandler(e)}
            required
          />
        </div>
        <div className={styles.formInput}>
          <label>Confirm Password * : </label>
          <input
            type="confirmPassword"
            value={confirmPassword}
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e) => onChangeHandler(e)}
            required
          />
        </div>
        {passwordError ? (
          <div style={{ color: "red" }}>Passwords dont match</div>
        ) : null}
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
export default DoctorRegistrationForm;
