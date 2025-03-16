import React from "react";
import SideBar from "../../components/common/panelSideBar";
import Welcome from "../../components/panel/welcome";
import AccountBtn from "../../components/common/AccountButton";
import DarkBtn from "../../components/common/DarkModeBtn";

const Panel = ({ name }) => {
  return (
    <div className="flex flex-row flex-nowrap w-1/1">
      <SideBar />
       <div className=" w-70/100 mt-5">{/*flex flex-row flex-nowrap mt-5 */}
        <Welcome personName={name} />
        <AccountBtn className="float-left ml-2 cursor-pointer"/>
        <DarkBtn className="float-left ml-2 cursor-pointer"/>
      </div>
    </div>
  );
};

export default Panel;
