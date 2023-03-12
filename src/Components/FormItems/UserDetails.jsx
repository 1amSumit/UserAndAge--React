import React from "react";
import styles from "./UserDetails.module.css";
import Card from "../UI/Card";
import UserItem from "./UserItem";

const UserDetails = (props) => {
  return (
    <ul className="listItems">
      {props.userData.map((data) => (
        <UserItem key={data.id} username={data.userName} age={data.age} />
      ))}
    </ul>
  );
};

export default UserDetails;
