import Image from "next/image";
import React, { useRef, useState } from "react";
import USP1 from "@/assets/texts/usp1.webp";
import USP2 from "@/assets/texts/usp2.webp";
import USP3 from "@/assets/texts/usp3.webp";
import USP4 from "@/assets/texts/usp4.webp";
import Arrows from "@/assets/images/arrows.svg";
import styles from "../../styles/technofabSection.module.scss";

function WhyTechnofabSection(props: any) {
  const [currUsp, setCurrUsp] = useState(1);
  const uspArr = [USP1, USP2, USP3, USP4];
  const uspScrollerRef = useRef<any>(null);

  const nextUsp = () => {
    if (currUsp < 4) {
      uspScrollerRef.current.scrollLeft +=
        uspScrollerRef.current.clientWidth;
      setCurrUsp((prev) => prev + 1);
    }
  };

  const prevUsp = () => {
    if (currUsp > 1) {
      uspScrollerRef.current.scrollLeft -=
        uspScrollerRef.current.clientWidth;
      setCurrUsp((prev) => prev - 1);
    }
  };

  return (
    <section ref={props.sectionRef} className={styles.whyTechnofabSectionContainer}>
      <div className={styles.headingContainer}>
        <p data-aos="fade-up" data-aos-duration="3000">
          Why
          <br />
          <span data-aos="fade-up" data-aos-duration="3000" data-aos-delay="100">
            SG Technofab?
          </span>
        </p>
      </div>

      <div className={styles.uspContainer} data-aos="fade-up" data-aos-duration="3000">
        <figure className={styles.arrow} onClick={prevUsp}>
          <Image alt="img" src={Arrows} height={100} width={100} />
        </figure>

        <div className={styles.uspSlider} ref={uspScrollerRef}>
          {uspArr.map((item: any, index: number) => (
            <figure
              key={index}
              style={{ opacity: index + 1 === currUsp ? 1 : 0 }}
              className={styles.uspImgContainer}
            >
              <Image alt="img" src={item} height={600} width={600} className={styles.uspImg} />
            </figure>
          ))}
        </div>

        <figure
          style={{ visibility: currUsp === 4 ? "hidden" : "visible", cursor: currUsp === 4 ? "auto" : "pointer" }}
          className={styles.arrow}
          onClick={nextUsp}
        >
          <Image alt="img" src={Arrows} height={100} width={100} />
        </figure>
      </div>
    </section>
  );
}

export default WhyTechnofabSection;
