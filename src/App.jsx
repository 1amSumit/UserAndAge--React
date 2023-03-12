import React, { useState } from "react";
import NewUser from "./Components/FormItems/NewUser";
import UserDetails from "./Components/FormItems/UserDetails";

const dummyData = [
  { userName: "Sumit", age: 19, id: "1" },
  { userName: "Sawarn", age: 19, id: "2" },
  { userName: "Amit", age: 19, id: "3" },
];

const App = () => {
  const [previousData, setPreviousData] = useState(dummyData);

  const getUserData = (userData) => {
    setPreviousData((previousData) => {
      return [userData, ...previousData];
    });
  };

  return (
    <div>
      <NewUser sendUserData={getUserData} />
      <UserDetails userData={previousData} />
    </div>
  );
};

export default App;
