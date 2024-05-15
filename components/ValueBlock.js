import React from "react";
// import { t } from "i18next";
import Image from "next/image";

const ValueBlock = () => {


  return (
    <div>
      <div className={`flex flex-col sm:flex-row sm:mx-auto h-full px-4`}>
      {/* 1st card section */}
      <div className="flex flex-row align-middle sm:flex-col">
        <div className="bg-blue-500 flex w-1/2  sm:w-full flex-col justify-center  sm:h-2/5 items-center ">
          <h3 className="text-center  font-medium sm:my-6 sm:text-xl text-base" >Integrity</h3>
        </div>
        <Image src='/integrity.jpg' className="w-1/2 h-32  sm:w-full sm:h-2/5 " alt="value" width={300} height={300}/>
      </div>
      {/* 1st card section */}
      {/* 2nd card section */}
      <div className="flex flex-row align-middle sm:flex-col">
        <Image src='/excellence.jpg' className="w-1/2 h-32 sm:w-full sm:h-2/5 " alt="value" width={300} height={300}/>
        <div className="bg-rose-700 flex flex-col justify-center w-1/2  sm:w-full sm:h-2/5 items-center">
          <h3 className="text-center  font-medium sm:text-xl text-base sm:my-12 ">Excellence</h3>
        </div>
      </div>
      {/* 2nd card section */}
      {/* 3rd card section */}
      <div className="flex flex-row align-middle sm:flex-col">
        <div className="bg-blue-500 flex flex-col justify-center w-1/2 sm:w-full sm:h-2/5 items-center">
          <h3 className="text-center font-medium sm:text-xl text-base sm:my-12">Accountability</h3>
        </div>
        <Image src='/account.jpg' className="w-1/2 h-32 sm:w-full sm:h-2/5 " alt="value" width={300} height={300}/>
      </div>
      {/* 3rd card section */}
      {/* 4th card section */}
      <div className="flex flex-row align-middle sm:flex-col">
        <Image src='/teamwork.jpg' className="w-1/2 h-32 sm:h-2/5 sm:w-full" alt="value" width={300} height={300}/>
        <div className="bg-rose-700 w-1/2 flex flex-col justify-center sm:h-2/5 sm:w-full items-center">
          <h3 className="text-center  font-medium sm:text-xl text-base sm:my-12">Teamwork</h3>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ValueBlock;