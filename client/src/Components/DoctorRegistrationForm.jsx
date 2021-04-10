import React, { useState } from "react";
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
  const [location, setLocation] = useState();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trimLeft();

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
    } else if (name === "description") setDescription(trimmedValue);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="doctorRegistrationForm">
      <div className={styles.formInput}>
        <label>Name : </label>
        <input
          type="text"
          value={doctorName}
          name="doctorName"
          placeholder="Name"
          onChange={onChangeHandler}
          required
        />
      </div>
      <div className={styles.formInput}>
        <label>Highest Degree : </label>
        <input
          type="text"
          value={highestDegree}
          name="highestDegree"
          placeholder="Highest Degree"
          onChange={onChangeHandler}
          required
        />
      </div>
      <div className={styles.formInput}>
        <label>Speciality : </label>
        <input
          type="text"
          value={speciality}
          name="speciality"
          placeholder="Speciality"
          onChange={onChangeHandler}
          required
        />
      </div>
      <div className={styles.formInput}>
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
          onChange={onChangeHandler}
        />
        <input
          type="text"
          value={experienceMonth}
          name="experienceMonth"
          placeholder="Months"
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.formInput}>
        <label>Description : </label>
        <textarea
          type="text"
          value={description}
          name="description"
          placeholder="Write something about yourself..."
          onChange={onChangeHandler}
        />
      </div>
    </form>
  );
};
export default DoctorRegistrationForm;
