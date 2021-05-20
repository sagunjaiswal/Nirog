import React, { useState } from "react";
import styles from "./DoctorDetails.module.css";

const DoctorDetails = ({
  personalDataCollector,
  showClinicForm,
  setShowClinicForm,
}) => {
  const [doctorName, setDoctorName] = useState("");
  const [highestDegree, setHighestDegree] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [number, setNumber] = useState("");
  //experience
  const [experienceMonth, setExperienceMonth] = useState("");
  const [experienceYear, setExperienceYear] = useState("");
  // const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [numberError, setNumberError] = useState("");
  const [experienceError, setExperienceError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

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
    }
    //credentials
    else if (name === "email") setEmail(trimmedValue);
    else if (name === "password") setPassword(trimmedValue);
    else if (name === "confirmPassword") {
      setConfirmPassword(value);
      if (password !== confirmPassword) setPasswordError(true);
      else setPasswordError(false);
      // isValidate();
    }
  };

  const _submitHandler = (e) => {
    e.preventDefault();
    const exp = experienceYear + "yrs" + experienceMonth + "mnths";
    const userDetails = {
      name: doctorName,
      highestDegree: highestDegree,
      speciality: speciality,
      number: number,
      experience: exp,
      description: description,
      email: email,
      password: password,
    };
    personalDataCollector(userDetails);
  };

  return (
    <div className={styles.formContainer}>
      {!showClinicForm ? (
        <form className={styles.doctorDetailsForm}>
          <div className={styles.inputSection}>
            <label>Name* : </label>
            <input
              type="text"
              value={doctorName}
              name="doctorName"
              placeholder="Name"
              onChange={(e) => onChangeHandler(e)}
              required
            />
          </div>
          <div className={styles.inputSection}>
            <label>Highest Degree* : </label>
            <input
              type="text"
              value={highestDegree}
              name="highestDegree"
              placeholder="Highest Degree"
              onChange={(e) => onChangeHandler(e)}
              required
            />
          </div>
          <div className={styles.inputSection}>
            <label>Speciality* : </label>
            <select
              className="custom-select"
              name="speciality"
              onChange={(e) => onChangeHandler(e)}
              required
            >
              <option value="" selected disabled>
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
          </div>
          <div className={styles.inputSection}>
            <label>Contact Number* : </label>
            <input
              type="text"
              value={number}
              name="number"
              pattern="[6-9]{1}[0-9]{9}"
              placeholder="Contact Number"
              onChange={(e) => onChangeHandler(e)}
              required
            />
            {numberError.length ? (
              <div style={{ color: "red" }}>{numberError}</div>
            ) : null}
          </div>
          <div className={styles.inputSection}>
            <label>Experience* : </label>
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
          <div className={styles.inputSection}>
            <label>Description:</label>
            <textarea
              type="textarea"
              rows="4"
              cols="64"
              value={description}
              name="description"
              placeholder="Write something about yourself..."
              onChange={(e) => onChangeHandler(e)}
            />
            {descriptionError ? (
              <div style={{ color: "red" }}>
                Less than 150 characters allowed
              </div>
            ) : null}
          </div>
          <div className={styles.inputSection}>
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
          <div className={styles.inputSection}>
            <label>Password* : </label>
            <input
              type="password"
              value={password}
              name="password"
              placeholder="Password"
              onChange={(e) => onChangeHandler(e)}
              required
            />
          </div>
          {password.length > 7 ? (
            <div className={styles.inputSection}>
              <label>Confirm Password * : </label>
              <input
                type="password"
                value={confirmPassword}
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={(e) => onChangeHandler(e)}
                required
              />
            </div>
          ) : null}
          {passwordError ? (
            <div style={{ color: "red" }}>Passwords dont match</div>
          ) : null}
          <button
            className="btn btn-block btn-primary"
            style={{
              width: "85%",
              margin: "20px 0",
            }}
            onClick={() => setShowClinicForm(true)}
          >
            Ener Clinic Details
            <img
              src="/assets/add.svg"
              alt="open-form"
              className={styles.addNextImage}
            />
          </button>
        </form>
      ) : (
        <button
          className="btn btn-block btn-success"
          style={{ width: "40vw" }}
          onClick={() => setShowClinicForm(false)}
        >
          Check Personal Details
          <img
            src="/assets/add.svg"
            alt="Show"
            className={styles.addNextImage}
          />
        </button>
      )}
    </div>
  );
};

export default DoctorDetails;
