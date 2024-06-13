import React from "react";
import Image from "next/image";
import { cources } from "@/constants";
import Card from "./Card";

const Discover = () => {
  return (
    <div className=" bg-gradient-to-r from-transparent to-lightred  relative  top-[150px] z-[-1]  ">
      <div className=" bg-[url('/images/Background Pattern & Mask.png')]">
    
         <div className="container">
                <h1 className="text-[48px] font-bold text-dark lrading-[64.6px] text-center  relative top-[-1060px]"> Discover Courses</h1>
                <div className="h-[10px] bg-red w-[475px] ml-[433px] mt-[-1084px]"></div>
                <p className="text-center mt-[15px] text-[24px] text-neutral font-semibold ">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum<br/> Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
                </div>
      <div className="w-[800px] h-[800px] bg-gradient-to-r from-transparent to-lightred  rounded-full   relative top-[-950px] left-[-200px]">
      <Image src={"/images/image 12 (2).png"} width={400} height={400} className=" relative left-[1300px] top-[-30px] z-[10] "/>
      <Image src={"/images/image 11.png"} width={400}  height={900}  className=" relative left-[100px] top-[30px] z-[10} h-[700px]" />
     <div className="w-[700px] h-[800px] rounded-full relative  left-[1000px] top-[-350px] overflow-hidden" > <div className="w-[800px] h-[800px] bg-gradient-to-r from-lightred to-transparent  backdrop-blur-3xl rounded-full  "></div></div>
             
      </div>
      <div className=" container">
      <div className=" grid grid-cols-3  gap-9  relative top-[-1650px] z-[50]   " >
      {cources.map((data, index) => (
          <Card
            key={index}
            date={data.date}
            title={data.title}
            number={data.number}
            discription={data.discription}
          />
        ))}
      </div>
      <Image src={"/images/image 10.png"} width={500} height={500} className="z-[10] relative top-[-1900px] left-[925px] "/>
      </div>
     </div>
    </div>
  );
};

export default Discover;
