"use client";

import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";
import rightArrow from "@/assets/images/rightArrow.svg";
import { useRouter } from "next/navigation";

function ProjectCard(props: {
  heading: string;
  description: string;
  image: string;
  link: string;
}) {
  const navigate = useRouter();
  const { heading, description, image, link } = props;

  return (
    <>
      <section className={styles.projectDetails}>
        <h4>{heading}</h4>
        <article>
          <p>
            {description}
            <Image
              src={rightArrow}
              alt="arrow"
              onClick={() => navigate.push(link)}
              height={10}
              width={40}
            />
          </p>
          {/* <figure className={styles.arrow}> */}

          {/* </figure> */}
        </article>
      </section>

      <figure className={styles.projectImage}>
        <Image
          alt="project-img"
          src={image}
          width={400}
          height={420}
          // priority
        />
      </figure>
    </>
  );
}

export default ProjectCard;

export const NavigateBtn = ({ text = "", className = "", link = "" }) => {
  const navigate = useRouter();
  return (
    <button
      type="button"
      className={className}
      onClick={() => (link ? navigate.push(link) : "")}
    >
      {text}
    </button>
  );
};
