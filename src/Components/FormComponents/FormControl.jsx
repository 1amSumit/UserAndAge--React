import React, { useState } from "react";

import styles from "./FormControl.module.css";
import Error from "../UI/Error";

import Card from "../UI/Card";

const FormControl = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [validAge, setValidAge] = useState(true);

  const onUserChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setUsername(e.target.value);
  };

  const onAgeChangeHandler = (e) => {
    if (e.target.value >= 18) {
      setValidAge(true);
    }
    setAge(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0) {
      setIsValid(false);
      return;
    }

    if (+age < 18) {
      setValidAge(false);
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
    <Card className={`${styles["form-control"]} ${!isValid && styles.invalid}`}>
      {!validAge && <Error message={"age is less than 18 "} />}
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
        <button className={styles.button} type="submit">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default FormControl;
