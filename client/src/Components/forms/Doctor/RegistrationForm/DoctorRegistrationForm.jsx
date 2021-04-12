import React, { useState } from "react";
import axios from "axios";
import styles from "./DoctorRegistrationForm.module.css";

const DoctorRegistrationForm = () => {
  const [doctorName, setDoctorName] = useState("");
  const [highestDegree, setHighestDegree] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [number, setNumber] = useState("");
  //experience
  const [experienceMonth, setExperienceMonth] = useState(0);
  const [experienceYear, setExperienceYear] = useState(0);

  const [rating, setRating] = useState(0);

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
  // const [location, setLocation] = useState({
  //   clinicName: "",
  //   streetName: "",
  //   locality: "",
  //   landmark: "",
  //   postOffice: "",
  //   pinCode: "",
  //   city: "",
  //   district: "",
  //   state: "",
  //   time: {
  //     mondayMorningSlot: "",
  //     mondayEveningSlot: "",
  //     tuedayMorningSlot: "",
  //     tuedayEveningSlot: "",
  //     wednesdayMorningSlot: "",
  //     wednesdayEveningSlot: "",
  //     thursdayMorningSlot: "",
  //     thursdayEveningSlot: "",
  //     fridayMorningSlot: "",
  //     fridayEveningSlot: "",
  //     saturdayMorningSlot: "",
  //     saturdayEveningSlot: "",
  //   },
  // });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trimLeft();
    console.log(name);
    console.log(value);
    if (name === "doctorName") setDoctorName(trimmedValue);
    else if (name === "highestDegree") setHighestDegree(trimmedValue);
    else if (name === "speciality") setSpeciality(trimmedValue);
    else if (name === "number") {
      if (trimmedValue.length) {
        let num = Number(trimmedValue);
        setNumber(num);
      }
    } else if (name === "experienceMonth") {
      if (trimmedValue.length) {
        let expMnth = Number(trimmedValue);
        setExperienceMonth(expMnth);
      }
    } else if (name === "experienceYear") {
      if (trimmedValue.length) {
        let expYr = Number(trimmedValue);
        setExperienceYear(expYr);
      }
    } else if (name === "description") setDescription(trimmedValue);
    else if (name === "clinicName") setClinicName(trimmedValue);
    else if (name === "streetName") setStreetName(trimmedValue);
    else if (name === "locality") setLocality(trimmedValue);
    else if (name === "landmark") setLandmark(trimmedValue);
    else if (name === "postOffice") setPostOffice(trimmedValue);
    else if (name === "pinCode") setPinCode(trimmedValue);
    else if (name === "city") setCity(trimmedValue);
    else if (name === "district") setDistrict(trimmedValue);
    else if (name === "state") setState(trimmedValue);
    else if (name === "mondayMorningSlot") setMondayMorningSlot(trimmedValue);
    else if (name === "mondayEveningSlot") setMorningEveningSlot(trimmedValue);
    else if (name === "tuesdayMorningSlot") setTuesdayMorningSlot(trimmedValue);
    else if (name === "tuesdayEveningSlot") setTuesdayEveningSlot(trimmedValue);
    else if (name === "wednesdayMorningSlot")
      setWednesdayMorningSlot(trimmedValue);
    else if (name === "wednesdayEveningSlot")
      setWednesdayEveningSlot(trimmedValue);
    else if (name === "thursdayMorningSlot")
      setThursdayMorningSlot(trimmedValue);
    else if (name === "thursdayEveningSlot")
      setThursdayEveningSlot(trimmedValue);
    else if (name === "fridayMorningSlot") setFridayMorningSlot(trimmedValue);
    else if (name === "fridayEveningSlot") setFridayEveningSlot(trimmedValue);
    else if (name === "saturdayMorningSlot")
      setSaturdayMorningSlot(trimmedValue);
    else if (name === "saturdayEveningSlot")
      setSaturdayEveningSlot(trimmedValue);
    else if (name === "sundayMorningSlot") setSundayMorningSlot(trimmedValue);
    else if (name === "sundayEveningSlot") setSundayEveningSlot(trimmedValue);
    //credentials
    else if (name === "email") setEmail(trimmedValue);
    else if (name === "password") setPassword(trimmedValue);

    // console.log(name);
    // console.log(value);
    // else if (name === "location.clinicName") {
    //   let loc = { ...location };
    //   loc.name = value;
    //   setLocation(loc);
    // }
  };
  // const locationChangeHandler = (e) => {
  //   const { name, value } = e.target;

  //   console.log(name);
  //   console.log(value);
  //   const currlocation = { ...location };
  //   // const currentState = foundEntry;

  //   currlocation.name = value;
  //   setLocation(currlocation);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const exp = experienceYear + "yrs" + experienceMonth + "mnths";
    const objToSend = {
      name: doctorName,
      highestDegree: highestDegree,
      speciality: speciality,
      number: number,
      experience: exp,
      description: description,
      locality: {
        clinicName: clinicName,
        streetName: streetName,
        locality: locality,
        landmark: landmark,
        postOffice: postOffice,
        pinCode: pinCode,
        city: city,
        district: district,
        state: state,
        time: {
          mondayMorningSlot: mondayMorningSlot,
          mondayEveningSlot: mondayEveningSlot,
          tuesdayMorningSlot: tuesdayMorningSlot,
          tuesdayEveningSlot: tuesdayEveningSlot,
          wednesdayMorningSlot: wednesdayMorningSlot,
          wednesdayEveningSlot: wednesdayEveningSlot,
          thursdayMorningSlot: thursdayMorningSlot,
          thursdayEveningSlot: thursdayEveningSlot,
          fridayMorningSlot: fridayMorningSlot,
          fridayEveningSlot: fridayEveningSlot,
          saturdayMorningSlot: saturdayMorningSlot,
          saturdayEveningSlot: saturdayEveningSlot,
          sundayMorningSlot: sundayMorningSlot,
          sundayEveningSlot: sundayEveningSlot,
        },
      },
    };
    axios
      .post("http://localhost:5000/doctor/", objToSend)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <form
        className={styles.form}
        id={styles.form}
        onSubmit={(e) => submitHandler(e)}
      >
        <div className={styles.formControl}>
          <label>Name : </label>
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
          <label>Highest Degree : </label>
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
          <input
            type="text"
            value={speciality}
            name="speciality"
            placeholder="Speciality"
            onChange={(e) => onChangeHandler(e)}
            required
          />
        </div>
        <div className={styles.formControl}>
          <label>Number : </label>
          <input
            type="text"
            value={number}
            name="number"
            placeholder="Contact Number"
            onChange={(e) => onChangeHandler(e)}
            required
          />
        </div>
        <div className={styles.formInput}>
          <label>Experience : </label>
          <input
            type="text"
            value={experienceYear}
            name="experienceYear"
            placeholder="Years"
            onChange={(e) => onChangeHandler(e)}
          />
          <input
            type="text"
            value={experienceMonth}
            name="experienceMonth"
            placeholder="Months"
            onChange={(e) => onChangeHandler(e)}
          />
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
        </div>
        <div className={styles.formInput}>
          <h2>Address : </h2>
          <lable>Clinic Name : </lable>
          <input
            type="text"
            value={clinicName}
            name="clinicName"
            placeholder="clinic name"
            onChange={(e) => onChangeHandler(e)}
          />
          <label>Street Name : </label>
          <input
            type="text"
            value={streetName}
            name="streetName"
            placeholder="Street Name"
            onChange={(e) => onChangeHandler(e)}
          />
          <label>Locality : </label>
          <input
            type="text"
            value={locality}
            name="locality"
            placeholder="Your Locality"
            onChange={(e) => onChangeHandler(e)}
          />
          <label>Land Mark : </label>
          <input
            type="text"
            value={landmark}
            name="landmark"
            placeholder="Land Mark(if any)"
            onChange={(e) => onChangeHandler(e)}
          />
          <label>Post Office : </label>
          <input
            type="text"
            value={postOffice}
            name="postOffice"
            placeholder="Post Office"
            onChange={(e) => onChangeHandler(e)}
          />
          <label>Pin Code : </label>
          <input
            type="text"
            value={pinCode}
            name="pinCode"
            placeholder="Pin Code"
            onChange={(e) => onChangeHandler(e)}
          />
          <label>City/Town : </label>
          <input
            type="text"
            value={city}
            name="city"
            placeholder="City/Town"
            onChange={(e) => onChangeHandler(e)}
          />
          <label>District : </label>
          <input
            type="text"
            value={district}
            name="district"
            placeholder="District"
            onChange={(e) => onChangeHandler(e)}
          />
          <label>State : </label>
          <input
            type="text"
            value={state}
            name="state"
            placeholder="state"
            onChange={(e) => onChangeHandler(e)}
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
          <label>Evening Slot : </label>
          <input
            type="text"
            value={mondayEveningSlot}
            name="mondayEveningSlot"
            placeholder="Mon Evening Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          <h4>Tuesday : </h4>
          <label>Morning Slot : </label>
          <input
            type="text"
            value={tuesdayMorningSlot}
            name="tuesdayMorningSlot"
            placeholder="tues Morning Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          <label>Evening Slot : </label>
          <input
            type="text"
            value={tuesdayEveningSlot}
            name="tuesdayEveningSlot"
            placeholder="tues Evening Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          <h4>Wednesday : </h4>
          <label>Morning Slot : </label>
          <input
            type="text"
            value={wednesdayMorningSlot}
            name="wednesdayMorningSlot"
            placeholder="wednesday Morning Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          <label>Evening Slot : </label>
          <input
            type="text"
            value={wednesdayEveningSlot}
            name="wednesdayEveningSlot"
            placeholder="wednesday Evening Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          <h4>Thursday : </h4>
          <label>Morning Slot : </label>
          <input
            type="text"
            value={thursdayMorningSlot}
            name="thursdayMorningSlot"
            placeholder="Thursday Morning Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          <label>Evening Slot : </label>
          <input
            type="text"
            value={thursdayEveningSlot}
            name="thursdayEveningSlot"
            placeholder="Thursday Evening Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          <h4>Friday : </h4>
          <label>Morning Slot : </label>
          <input
            type="text"
            value={fridayMorningSlot}
            name="fridayMorningSlot"
            placeholder="fri Morning Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          <label>Evening Slot : </label>
          <input
            type="text"
            value={fridayEveningSlot}
            name="fridayEveningSlot"
            placeholder="fri Evening Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          <h4>Saturday : </h4>
          <label>Morning Slot : </label>
          <input
            type="text"
            value={saturdayMorningSlot}
            name="saturdayMorningSlot"
            placeholder="Satur Morning Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          <label>Evening Slot : </label>
          <input
            type="text"
            value={saturdayEveningSlot}
            name="saturdayEveningSlot"
            placeholder="Satur Evening Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          <h4>Sunday : </h4>
          <label>Morning Slot : </label>
          <input
            type="text"
            value={sundayMorningSlot}
            name="sundayMorningSlot"
            placeholder="Sun Morning Slot"
            onChange={(e) => onChangeHandler(e)}
          />
          <label>Evening Slot : </label>
          <input
            type="text"
            value={sundayEveningSlot}
            name="sundayEveningSlot"
            placeholder="Sun Evening Slot"
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <div className={styles.formInput}>
          <label>Email Id : </label>
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
          <label>Password : </label>
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={(e) => onChangeHandler(e)}
            required
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
export default DoctorRegistrationForm;
