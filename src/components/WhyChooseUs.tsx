
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { musicSchoolContent } from "../data/WhyChooseUs_data";
interface WhyChooseUsProps {
    title: string;
    description: string;
    content: React.ReactNode;
  }



function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={(musicSchoolContent as WhyChooseUsProps[])} />
    </div>
  )
}

export default WhyChooseUs