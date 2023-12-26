"use client";

import React, { useLayoutEffect } from "react";
import styles from "./style.module.scss";
import P1 from "@/assets/images/project1.webp";
import P2 from "@/assets/images/project2.webp";
import P3 from "@/assets/images/project3.webp";
import ProjectCard, { NavigateBtn } from "./ProjectCard";

export const projectsArr = [
  {
    heading: "Airport Authority of India",
    description:
      "Welcome to SG Technofab, we are dedicated to providing top-notch heating, ventilation, and air conditioning solutions. Our experienced team of",
    image: P1,
    link: "/projects/airport-authority-of-india",
  },
  {
    heading: "Delhi Development Authority",
    description:
      "Welcome to SG Technofab, we are dedicated to providing top-notch heating, ventilation, and air conditioning solutions. Our experienced team of",
    image: P2,
    link: "/projects/delhi-development-authority",
  },
  {
    heading: "Central Public Works Department",
    description:
      "Welcome to SG Technofab, we are dedicated to providing top-notch heating, ventilation, and air conditioning solutions. Our experienced team of",
    image: P3,
    link: "/projects/central-public-works-department",
  },
];

function ProjectsSection(props: any) {
  return (
    <section ref={props.sectionRef} className={styles.projectsSectionContainer}>
      <div
        className={styles.headingSection}
        data-aos="fade-up"
        data-aos-duration="2300"
        id="ourProjectsHeading"
      >
        <p>
          Our
          <br /> <b>Projects</b>
        </p>
        <NavigateBtn text="View All" link="/projects" />
      </div>

      <div
        className={`${styles.projectsContainer} projectsWrapper`}
        data-aos="fade-up"
        data-aos-duration="2300"
        data-aos-delay="300"
      >
        {projectsArr.map((item: any, index: number) => (
          <div className={styles.project} key={index}>
            <ProjectCard {...item} />
          </div>
        ))}
      </div>
      <div className={styles.mobileProjectsContainer}>
        {projectsArr.slice(0, 1).map((item: any, index: number) => (
          <div className={styles.project} key={index}>
            <ProjectCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
