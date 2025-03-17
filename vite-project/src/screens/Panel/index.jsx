import React, { useEffect, useRef, useState } from "react";
import SideBar from "../../components/common/panelSideBar";
import Welcome from "../../components/panel/welcome";
import AccountBtn from "../../components/common/AccountButton";
import DarkBtn from "../../components/common/DarkModeBtn";
import HamburgerBtn from "../../components/common/responsiveBtn";
import mediaQuery from "../../core/utils/mediaQuery.utils";

const Panel = ({ name }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  useEffect(() => {
    mediaQuery(
      "(min-width:768px)",
      () => {
        setIsSideBarOpen(true);
      },
      () => {
        setIsSideBarOpen(false);
      }
    );
  }, []);
  return (
    <div className="flex flex-row flex-nowrap w-1/1">
      <HamburgerBtn
        isOpen={isSideBarOpen}
        setOpen={setIsSideBarOpen}
        className="md:hidden w-8 h-8 mt-6 mx-2 bg-contain bg-no-repeat cursor-pointer"
      />

      {isSideBarOpen && <SideBar />}
      <div className=" md:w-70/100 mt-5 w-1/1">
        <Welcome personName={name} />
        <AccountBtn className="float-left ml-2 cursor-pointer" />
        <DarkBtn className="float-left ml-2 cursor-pointer" />
      </div>
    </div>
  );
};

export default Panel;
