import React from 'react'

const InfoCard = ({svg, title, description}) => {
  return (
    <div className="flex justify-start gap-4 shadow-xl rounded-2xl items-center px-2 pb-7 mt-9 w-fit p-10 pl-7  ">
    <div className="flex justify-center items-center">
      {svg}
    </div>
    <div className="flex flex-col gap-2">
      <h1 className="font-EstedadExtraBold text-xl lg:text-2xl !leading-tight ">
        {title}
      </h1>
      <p className="text-lg">
        {description}
      </p>
    </div>
  </div>
  )
}

export default InfoCard