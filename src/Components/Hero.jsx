'use client';
import { useState } from "react";
import React from "react";
import { BiSolidEnvelope } from "react-icons/bi";

const Hero = () => {
    const [formData, setFormData] = useState({ email: ""});
    function handleSubmit(event){
      event.preventDefault()
      submitToApi(formData)
    }
    function handleChange(event) {
      const { name, value, type } = event.target;
      setFormData(() => {
        return {
        
         
        };
      });
    }
  return (
    <div className="container">
      <h1 className="text-center text-[54px] mt-[100px] font-bold font-dark ">
        Deploying <span className="text-red">Laravel</span> Courses
      </h1>
      <p className="text-center text-[26px] mt-[28px]  font-normal text-neutral ">
        Master the art of deploying your Laravel application with
        <br /> our set of mini courses.{" "}
      </p>
      <div className="flex flex-row  items-center justify-start gap-4  ml-[420px] mt-[70px] w-[496px]">
        <div className="bg-red w-[44px] h-[44px] rounded-[4px]">
          <BiSolidEnvelope className="text-white w-[30px] h-[32px] mx-auto my-[6px]" />
        </div>
        <p className=" text-[16px] leading-[22px] font-dark  tracking-wide  ">
          <span className="font-bold">Get Notified about new courses,</span> and start learning
          <br /> some hard-earned knowledge now!
        </p>
      </div>
      <div className=" ml-[420px] mt-[15px] flex gap-[10px]">
      <input
            type="email"
            placeholder="Enter email address"
            onChange={handleChange}
            name="email"
            value={formData.email}
            className=" w-[330px] h-[56px] border border-neutral rounded-[8px] placeholder-neutral p-[10px] text-[20px]"
          />
          <button className="text-white bg-red h-[56px] w-[120px] rounded-[8px] text-[18px] leading-[21px]  ">subscribe</button>
      </div>
      <h1 className="text-center font-dark font-bold text-[32px] tracking-wide mt-[120px]">Explore Courses</h1>
      <div className="h-[10px] bg-red w-[275px] ml-[533px] mt-[-17px]"></div>
    </div>
  );
};

export default Hero;
