import React from "react";
import Image from "next/image";

const Discover = () => {
  return (
    <div className="">
      <Image
        src={"/images/Background Pattern & Mask.png"}
        width={1500}
        height={1500}
        className="relative top-[50px]"
      />
      <div className="w-[700px] h-[700px] bg-red rounded-full  opacity-10 blur-xl  relative top-[-950px] left-[-200px]">

      </div>
    </div>
  );
};

export default Discover;
