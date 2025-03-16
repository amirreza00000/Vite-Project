import React from "react";
//import { Link } from "react-router";
import { Link } from "react-router-dom";

const AccountBtn = ({className}) => {
  return <img className={"rounded-fullXl w-10 border-3 border-black h-10 "+" "+className} src="resources/account.svg"/>;
};

export default AccountBtn;
