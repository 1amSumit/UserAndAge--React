import React, { useState } from "react";
import FormControl from "../FormComponents/FormControl";

const NewUser = (props) => {
  const [validAge, setVAlidAge] = useState(true);
  const getUserData = (userData) => {
    const age = userData.age;
    if (age >= validAge) {
      setVAlidAge(true);
    }
    props.sendUserData(userData);
  };
  return <FormControl sendUserData={getUserData} />;
};

export default NewUser;
