import React from "react";
import Image from "next/image";
import P1 from "@/assets/images/project1.webp";
import P2 from "@/assets/images/project2.webp";
import P3 from "@/assets/images/project3.webp";
import ProjectCard from "../AboutUs/ProjectCard";
import styles from "./style.module.scss";

const projectsArr = [
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

function Projects() {
  return (
    <>
      <div className={styles.projectsPageContainer}>
        <div className={styles.headingSection}>
          <p data-aos="fade-up" data-aos-duration="2000">
            Our
            <br /> <b>Projects</b>
          </p>
          <span className={styles.gradientLine}></span>
        </div>

        <div className={styles.latestPost}>
          <figure>
            <Image
              alt={"img"}
              src={P1}
              style={{ width: "100%", height: "100%" }}
            />
          </figure>
          <article>
            <h4>Airport Authority of India </h4>
            <p>
              Welcome to SG Technofab, we are dedicated to providing top-notch
              heating, ventilation, and air conditioning solutions. Our
              experienced team of
              <span style={{ fontWeight: "600" }}>...Read More</span>
            </p>
          </article>
        </div>

        <div className={styles.projectsContainer}>
          {projectsArr.map((item: any, index: number) => (
            <div className={styles.project} key={index}>
              <ProjectCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
