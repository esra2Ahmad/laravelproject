"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "../navLinks/navLinks";
const links = [
  { title: "Home ", path: "/" },
  { title: "Cources", path: "/Cources" },
  { title: "Full Access", path: "/FullAccess" },
];
const Links = () => {
  return (
    // th first div for container
    <div className="">
      <div className="flex items-center gap-[34px]  ">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
    </div>
  );
};

export default Links;
