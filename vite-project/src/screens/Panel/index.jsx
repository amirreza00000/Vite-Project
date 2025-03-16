import React from "react";
import SideBar from "../../components/common/panelSideBar";
import Welcome from "../../components/panel/welcome";

const Panel = ({ name }) => {
  return (
    <>
      <div className="inline-block w-3/10">
        <SideBar />
      </div>
      <div className="inline-block absolute mt-5" >
        <Welcome personName={name} />
      </div>
    </>
  );
};

export default Panel;
