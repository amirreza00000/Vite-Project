import React from "react";

import { Link } from "react-router";
const SideBar = () => {
  return (
    <div className="absolute top-12 mx-7 z-20 md:mx-4 h-125 w-9/10 md:block min-w-70 md:w-3/10 md:h-163 bg-[rgb(243,244,246)] rounded-xl p-[25px] my-3 ">
      <div className="cursor-pointer h-15 pr-[95px] pt-[10px] mx-auto font-medium whitespace-nowrap text-xl lg:text-2xl  bg-[url(resources/image.png)]  bg-contain bg-no-repeat bg-right">
        اکادمی سپهر
      </div>
      <div className="w-1/1 mt-5 mb-5 md:mb-0  text-3xl md:text-base  md:w-25 md:mt-5 cursor-pointer backgroundSize md:backgroundSize  pr-9 md:pr-7 bg-[url(resources/home.png)] bg-no-repeat bg-right bg-contain">
        پیشخوان
      </div>
      <div className="w-1/1 mt-3 mb-5 md:mb-0 text-3xl md:text-base   md:w-29 cursor-pointer backgroundSize md:backgroundSize my-1 pr-9 md:pr-7 bg-[url(resources/Path29.png)] bg-no-repeat bg-right bg-[10px 10px]">
        دوره های من
      </div>
      <div className="w-1/1 mt-3 mb-5 md:mb-0 text-3xl md:text-base  md:w-23 cursor-pointer backgroundSize md:backgroundSize my-1 pr-9 md:pr-7 bg-[url(resources/Path30.png)] bg-no-repeat bg-right bg-contain">
        تیکت ها
      </div>
      <div className="w-1/1 mt-3 mb-5 md:mb-0 text-3xl md:text-base   md:w-30 cursor-pointer backgroundSize md:backgroundSize my-1 pr-9 md:pr-7 bg-[url(resources/Path31.png)] bg-no-repeat bg-right bg-contain">
        جزیات حساب
      </div>
      <div className="w-1/1 mt-3 mb-5 md:mb-0 text-3xl md:text-base  md:w-15 cursor-pointer backgroundSize md:backgroundSize pr-9 md:pr-7 bg-[url(resources/Path32.png)] bg-no-repeat bg-right bg-contain">
        خروج
      </div>
    </div>
  );
};

export default SideBar;
