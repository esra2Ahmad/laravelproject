import React from "react";
import Image from "next/image";
import { MdCollectionsBookmark } from "react-icons/md";
import { IoMdCart } from "react-icons/io";

import { RiAlarmFill } from "react-icons/ri";

export default function Card(props) {
  return (
    <div className="w-[420px] h-[656px] rounded-[31px]  border-[1.21px]  border-red  bg-transparent  backdrop-blur-2xl z-[-1]">
      <div className="flex flex-col items-center">
        <p className=" text-[20px] font-bold leading-[32px] text-dark py-10 ml-[-12px] ">
          {props.title}
        </p>
        <div className=" flex gap-4">
          <div className="flex gap-[5px]">
            <RiAlarmFill className="text-red w-5 h-5" />
            <p className="font-semibold text-[16px] text-dark leading-[21px]">
              {props.date}
            </p>
          </div>
          <div className="flex gap-[5x]">
            <MdCollectionsBookmark className="text-red w-5 h-5" />
            <p className="font-semibold text-[16px] text-dark leading-[21px]">
              {props.number}
            </p>
          </div>
          <div className="flex gap-[5px]">
            <IoMdCart className="text-red w-5 h-5" />
            <p className="font-semibold text-[16px] text-dark leading-[21px]">
              One Time: 100$
            </p>
          </div>
        </div>
        <Image src={"/images/image 2.png"} width={290} height={191} alt="card" className="  mt-[50px]  w-[400px]  backdrop-blur ml-[-28px] rounded-[36px]     border-b-0  border-l-0  "/>
        <div className=" w-[420px] border border-lightred  border-t-0 border-b-0 border-l- h-[300px] relative top-[-80px] z-[-1]  ">
         <p className=" w-[380px] text-start mt-[130px] ml-[30px] text-[18px]   leading-[27px]">{props.discription}</p>
        </div>
        <button className="bg-red text-white w-[380px] h-[56px] rounded-[8px] text-[24px] lesding-[32px] font-bold relative top-[-90px]"> Buy Cource</button>
      </div>
    </div>
  );
}
