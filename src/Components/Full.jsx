import React from "react";
import Image from "next/image";
import { IoCheckmarkSharp } from "react-icons/io5";

const Full = () => {
  return (
    <div className="">
    <div className=" bg-mask mt-[300px] h-[400px]  z-50">
      <div className="container z-[-1]  ">
        <div className="flex justify-between items-center ">
          <h1 className=" text-[55px] ">
            Get <span className="text-red"> Full Access </span> Package
            <br /> with One-Time-Payment
          </h1>
          <div className="border border-red w-[608px] h-[308px] rounded-[32px] relative  bg-transparent backdrop-blur-3xl">
            <p className="text-[18px] font-medium leading-[27ppx] text-dark ml-[25px] my-11">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum :
            </p>
            <div className=" flex gap-[26px]  items-center ">
              <div className="flex gap-[2px] items-center ml-[25px]">
                <IoCheckmarkSharp className="text-red w-6 h-6 " />
                <p className=" text-[18px] font-medium leading-[27px]">
                  Lorem Ipsum{" "}
                </p>
              </div>
              <div className="flex gap-[2px] items-center ml-[25px]">
                <IoCheckmarkSharp className="text-red w-6 h-6 " />
                <p className=" text-[18px] font-medium leading-[27px]">
                  Lorem Ipsum{" "}
                </p>
              </div>
              <div className="flex gap-[2px] items-center ml-[25px]">
                <IoCheckmarkSharp className="text-red w-6 h-6 " />
                <p className=" text-[18px] font-medium leading-[27px]">
                  Lorem Ipsum{" "}
                </p>
              </div>
            </div>
            <div className=" flex   items-center gap-[220px] mt-[20px]">
              <div className="flex gap-[2px] items-center ml-[25px]">
                <IoCheckmarkSharp className="text-red w-6 h-6 " />
                <p className=" text-[18px] font-medium leading-[27px]">
                  Lorem Ipsum{" "}
                </p>
              </div>

              <div className="flex gap-[2px] items-center ml-[25px]">
                <IoCheckmarkSharp className="text-red w-6 h-6 " />
                <p className=" text-[18px] font-medium leading-[27px]">
                  Lorem Ipsum{" "}
                </p>
              </div>
            </div>
            <button className="bg-red ml-[25px] mt-[40px] w-[555px] h-[56px] rounded-[8px] text-white font-bold text-[24px] leading-[32px]">
              Get Full Access for $500
            </button>
          </div>
        </div>
      </div>
      <Image
        src={"/images/Rectangle 12.png"}
        width={1200}
        height={10}
        alt=""
        className="ml-[100px] mt-[100px]"
      />
    </div>
    </div>
  );
};

export default Full;
