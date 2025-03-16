import React from "react";

const DarkBtn = ({ className }) => {
  return (
    <img
      className={"rounded-fullXl w-10 h-10 " + " " + className}
      src="resources/moon.png"
    />
  );
};

export default DarkBtn;
