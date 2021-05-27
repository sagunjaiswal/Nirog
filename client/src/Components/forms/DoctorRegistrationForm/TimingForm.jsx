import React, { useState } from "react";
import styles from "./timingForm.module.css";
const TimingForm = ({ setTimingDetails }) => {
  let time = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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

  //errors
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

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trimLeft();
    if (name === "mondayMorningSlot") {
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
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let time = {
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
    };
    setTimingDetails(time);
  };

  const getDay = (index) => {
    switch (index) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        break;
    }
  };

  return (
    <div className={styles.timingFormContainer}>
      <form className={styles.timingDetailsForm}>
        {[1, 2, 3, 4, 5, 6, 7].map((index) => {
          return (
            <div className={styles.inputSection} key={index}>
              <h4>{getDay(index)}</h4>
              <div className={styles.timeInputSection}>
                <div>
                  <label>Morning Slot: </label>
                  <select>
                    <option value="">From...</option>
                  </select>
                  <select>
                    <option value="">To...</option>
                  </select>
                </div>
                <div>
                  <label>Evening Slot : </label>
                  <select>
                    <option value="">From...</option>
                    {[4, 5, 6, 7, 8, 9, 10].map((val, index) => {
                      return (
                        <option key={index} value={val}>{`${val} pm`}</option>
                      );
                    })}
                  </select>
                  <select>
                    <option value="">To...</option>
                    {/* {time.filter(eveTo => eveTo > )} */}
                  </select>
                </div>
              </div>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default TimingForm;
