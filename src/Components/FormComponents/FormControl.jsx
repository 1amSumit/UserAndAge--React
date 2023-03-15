import React, { useState } from "react";

import styles from "./FormControl.module.css";
import Error from "../UI/Error";

import Card from "../UI/Card";

const FormControl = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState();

  const getClickEvent = (value) => {
    setIsValid(value);
  };

  const onUserChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setUsername(e.target.value);
  };

  const onAgeChangeHandler = (e) => {
    if (e.target.value >= 18) {
      setIsValid(true);
    }
    setAge(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0) {
      setIsValid(false);
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (no-empty values)",
      });
      return;
    }

    if (+age < 1) {
      setIsValid(false);
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (age > 0)",
      });
      return;
    }

    const userData = {
      userName: username,
      age: age,
      id: Math.random().toString(),
    };

    props.sendUserData(userData);
    setUsername("");
    setAge("");
  };

  return (
    <>
      {!isValid && (
        <Error
          getClickEvent={getClickEvent}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles["form-control"]}>
        <form action="#" onSubmit={onSubmitHandler}>
          <div className={styles["form-control__username"]}>
            <label htmlFor="username">Username</label>
            <input
              onChange={onUserChangeHandler}
              value={username}
              type="text"
              name="username"
            />
          </div>
          <div className={styles["form-control__age"]}>
            <label htmlFor="age">Age (years)</label>
            <input
              onChange={onAgeChangeHandler}
              value={age}
              type="number"
              name="age"
            />
          </div>
          <button type="submit" className={styles.button}>
            Add User
          </button>
        </form>
      </Card>
    </>
  );
};

export default FormControl;
