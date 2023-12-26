"use client";

import React, { useEffect, useRef, useState } from "react";
import HeroSection from "./HeroSection";
import MissionSection from "./MissionSection";
import WhyTechnofabSection from "./WhyTechnofabSection";
import ProjectsSection from "./ProjectsSection";
import FeedbackSection from "./FeedbackSection";
import AuthorisedSuppliers from "./AuthorisedSuppliers";
import Sidebar from "../Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  const [count, setCount] = useState(1);
  const heroSectionRef = useRef(null);
  const missionSectionRef = useRef(null);
  const whySgtSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const feedbackSectionRef = useRef(null);
  const suppliersSectionRef = useRef(null);

  useEffect(() => {
    const refArr = [
      heroSectionRef,
      missionSectionRef,
      whySgtSectionRef,
      projectsSectionRef,
      feedbackSectionRef,
      suppliersSectionRef,
    ];

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const sectionObserver = new IntersectionObserver((entries: any) => {
      if (entries[0].intersectionRatio < 0 || !entries[0].isIntersecting)
        return;

      refArr.forEach((item: any, index: number) => {
        if (item.current === entries[0].target) {
          setCount(index + 1);
        }
      });
    }, options);

    refArr.map((item: any, index: number) => {
      // console.log("ITEM", index, ":", item.current);
      item.current && sectionObserver.observe(item.current);
    });
  }, []);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <Sidebar count={count} />
      <HeroSection sectionRef={heroSectionRef} />
      <MissionSection sectionRef={missionSectionRef} />
      <WhyTechnofabSection sectionRef={whySgtSectionRef} />
      <ProjectsSection sectionRef={projectsSectionRef} />
      <FeedbackSection sectionRef={feedbackSectionRef} />
      <AuthorisedSuppliers sectionRef={suppliersSectionRef} />
    </>
  );
}

export default AboutUs;
