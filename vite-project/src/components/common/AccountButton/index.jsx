import React from "react";
//import { Link } from "react-router";
import { Link } from "react-router-dom";

const AccountBtn = ({ className }) => {
  return (
    <img
      className={
        "rounded-fullXl w-10  h-10 " + " " + className
      }
      src="resources/profile-user.png"
    />
  );
};

export default AccountBtn;
