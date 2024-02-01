import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import LocationSVG from "./SVGs/LocationSVG";
import PhoneSVG from "./SVGs/PhoneSVG";
import ClockSVG from "./SVGs/ClockSVG";
import MessagesSVG from "./SVGs/MessagesSVG";
import InfoCard from "./Components/InfoCard";
import MapCard from "./Components/MapCard";
import FormCard from "./Components/FormCard";
// import Map from "@/components/map/Map";


const Contact = () => {
  return (
    <div>
      <div className="md:flex">
        <div className="flex flex-wrap space-x-4">
          <h2 className="font-EstedadExtraBold text-3xl lg:text-4xl text-SoftTextColor sticky">
            {" "}
            تماس با ما{" "}
          </h2>
          <InfoCard svg={<LocationSVG />} title={'مراجعه حضوری به مرکز طب کار آیین'} description={'مرکز تخصصی طب کار آیین، در شهر بندرعباس، خیابان سیدجمال الدین واقع شده است. جنب کوچه شیرینکده'} />
          <InfoCard svg={<ClockSVG />} title={'ساعات کاری مرکز'} description={'16 تا 18'} />
          <InfoCard svg={<PhoneSVG />} title={'تماس با مرکز'} description={'076 - 00000000'}/>
        </div>
        <MapCard />
      </div>
      <FormCard svg={<MessagesSVG />} />
    </div>
  );
};

export default Contact;
