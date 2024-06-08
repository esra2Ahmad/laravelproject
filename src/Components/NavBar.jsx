
import React from "react";
import Links from "./navbar/links/Links";


const NavBar = () => {
  return (
    <div className="container">
      <div className="  flex items-center justify-between h-[100px] ">
       
            <p className="font-bold text-[32px] fony-[42.6px] text-dark   ">Deploying</p>
           
        <div>
          <Links />
        </div>
      </div>
      <p className="text-red font-bold text-[28px] leading-[42.6px] ml-[110px] mt-[-30px]">Laravel</p>
    </div>
  );
};

export default NavBar;
