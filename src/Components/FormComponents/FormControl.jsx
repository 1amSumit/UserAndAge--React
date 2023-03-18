import React, { useState } from "react";

import styles from "./FormControl.module.css";
import Error from "../UI/Error";

import Card from "../UI/Card";

const FormControl = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const getClickEvent = () => {
    setError(false);
  };

  const onUserChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const onAgeChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (no-empty values)",
      });
      return;
    }

    if (+age < 1) {
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
      {error && (
        <Error
          onConfirm={getClickEvent}
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
