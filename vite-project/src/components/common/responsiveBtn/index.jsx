import React from "react";

const HamburgerBtn = ({ className = "",setOpen}) => {
   const onOpen=()=>{
      setOpen((prev)=>{setOpen(!prev)});
      
   }

  return (
    <button
      onClick={()=>{onOpen()}}
      className={
        "bg-[url(resources/hamburgerMenuIco.png)] " + " " + className
      }
    ></button>
  );
};

export default HamburgerBtn;
