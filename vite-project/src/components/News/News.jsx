import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getBlogsDetail } from "../../core/services/api/getBlogsDetail";
import instance from "../../core/services/interceptor";

const News = ({news}) => {
  return (
    <div className="mx-auto mb-11 md:mb-17 mt-25 md:mt-30 ">
      <div className=" relative w-8/10  max-w-300 min-h-[304px] mx-auto rounded-4xl bg-[#F3F4F6] p-[25px] ">
        <h2 className="whitespace-nowrap max-w-130 overflow-hidden text-ellipsis select-none m-0 inline text-[36px] absolute top-[-66px] right-[202px] md:right-[265px]">
          {news.title}
        </h2>
        <div className="w-[180px] h-[150px] md:w-[248px] md:h-[210px] float-right"></div>
        <p className=" mx-auto  text-[20px] text-end md:text-[30px]">
          {news.miniDescribe}
        </p>

        <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-[#9F9F9F] absolute top-[-72px] right-[-50px] rounded-4xl transform-[rotate(10deg)] translate-x-[20px]"></div>
        <img
          alt="no image"
          className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] ml-[250px] bg-contain absolute top-[-72px] right-[-50px] rounded-4xl duration-1000 hover:transform-[scale(1.05)]"
          src={!news.currentImage ? "/newspaper.png" : news.currentImage}
        />
        <div className="absolute left-14 bottom-[-45px] -z-10 w-min-65 text-center p-4 pt-8 rounded-4xl bg-[#D1D1D1] whitespace-nowrap">
          {"نوشته شده توسط" + ":" + news.addUserFullName}
        </div>
      </div>
    </div>
  );
};

export default News;
