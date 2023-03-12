import React, { useState } from "react";
import FormControl from "../FormComponents/FormControl";
import Error from "../UI/Error";

const NewUser = (props) => {
  // const [validAge, setValidAge] = useState(true);
  const getUserData = (userData) => {
    props.sendUserData(userData);
  };
  return <FormControl sendUserData={getUserData} />;
};

export default NewUser;
