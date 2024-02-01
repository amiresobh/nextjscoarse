import React from "react";
import dynamic from 'next/dynamic'

const Map = dynamic(() => import("@/components/map/Map"), {
  ssr: false,
  loading: () => (
    <div className="h-64 w-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex justify-center items-center">
      {" "}
      <h2> آدرس مرکز روی نقشه </h2>{" "}
    </div>
  ),
});

const MapCard = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center px-2 pb-7 shadow-xl rounded-2xl h-max mt-9">
      <div className="">
        <Map />
      </div>
      <h2>بندرعباس - خیابان - کوچه - جنب شیرینکده</h2>
    </div>
  );
};

export default MapCard;
