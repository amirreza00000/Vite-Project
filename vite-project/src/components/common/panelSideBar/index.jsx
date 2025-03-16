import React from "react";

import { Link } from "react-router";
const SideBar = () => {
  return (
    <div className="w-[298px] h-[600px] bg-[rgb(243,244,246)] rounded-xl p-[25px] my-3 mx-4">
      <div className="h-15 pr-[95px] pt-[10px] mx-auto font-medium whitespace-nowrap text-xl lg:text-2xl  bg-[url(resources/image.png)]  bg-contain bg-no-repeat bg-right">
        اکادمی سپهر
      </div>
      <div className="w-25 cursor-pointer backgroundSize mt-5 pr-7 bg-[url(resources/home.png)] bg-no-repeat bg-right bg-contain">
        پیشخوان
      </div>
      <div className="w-29 cursor-pointer backgroundSize my-1 pr-7 bg-[url(resources/Path29.png)] bg-no-repeat bg-right bg-[10px 10px]">
        دوره های من
      </div>
      <div className="w-23 cursor-pointer backgroundSize my-1 pr-7 bg-[url(resources/Path30.png)] bg-no-repeat bg-right bg-contain">
        
        تیکت ها
      </div>
      <div  className="w-30 cursor-pointer backgroundSize my-1 pr-7 bg-[url(resources/Path31.png)] bg-no-repeat bg-right bg-contain">
        جزیات حساب
      </div>
      <div className="w-15 cursor-pointer backgroundSize pr-7 bg-[url(resources/Path32.png)] bg-no-repeat bg-right bg-contain">
        خروج
      </div>
    </div>
  );
};

export default SideBar;
