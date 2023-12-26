import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";
import USP1 from "@/assets/texts/usp1.webp";
import USP2 from "@/assets/texts/usp2.webp";
import USP3 from "@/assets/texts/usp3.webp";
import USP4 from "@/assets/texts/usp4.webp";
import Arrows from "@/assets/images/arrows.svg";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function WhyTechnofabSection(props: any) {
  const [currUsp, setCurrUsp] = useState(1);
  const uspArr = [USP1, USP2, USP3, USP4];
  const uspScrollerRef = useRef<any>(null);
  const whySgtRef = useRef<any>(null);
  const uspContainerRef = useRef<any>(null);

  const nextUsp = () => {
    setCurrUsp((prev: number) => {
      if (prev < 4) {
        uspScrollerRef.current.scrollLeft =
          uspScrollerRef.current.scrollLeft +
          uspScrollerRef.current.clientWidth;
        return prev + 1;
      } else {
        return prev;
      }
    });
  };

  const prevUsp = () => {
    setCurrUsp((prev: number) => {
      if (prev > 1) {
        uspScrollerRef.current.scrollLeft =
          uspScrollerRef.current.scrollLeft -
          uspScrollerRef.current.clientWidth;
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.to(".whySgt", {
        scrollTrigger: {
          trigger: ".whySgt",
          // markers: true,
          id: "whySgt",
          scrub: true,
          pin: true,
          start: "top 15%",
          end: `bottom 30%`,
        },
        duration: 1,
        fontSize: `-=8.5dvw`,
        color: "#1f2b64",
        paddingTop: `-=1rem`,
      });
    }, props.sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={props.sectionRef}
      className={styles.whyTechnofabSectionContainer}
    >
      <div>
        <p
          ref={whySgtRef}
          className="whySgt"
          style={{
            color: "#1f2b64 !important",
            fontWeight: 500,
          }}
        >
          Why
          <br /> SG Technofab?
        </p>
      </div>

      <div
        className={styles.uspContainer}
        ref={uspContainerRef}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <figure
          style={{
            visibility: currUsp === 1 ? "hidden" : "visible",
            cursor: currUsp === 1 ? "auto" : "pointer",
          }}
        >
          <Image
            alt="img"
            src={Arrows}
            height={100}
            width={100}
            // loading="eager"
            onClick={prevUsp}
          />
        </figure>

        <div
          className={styles.uspSlider}
          ref={uspScrollerRef}
          // style={{
          //   transform: `translateX(-${currUsp * 100}%)`,
          // }}
        >
          {uspArr.map((item: any, index: number) => {
            return (
              <figure
                key={index}
                style={{
                  opacity: index + 1 === currUsp ? 1 : 0,
                }}
              >
                <Image
                  alt="img"
                  src={item}
                  height={600}
                  width={600}
                  // loading="eager"
                />
              </figure>
            );
          })}
        </div>
        <figure
          style={{
            visibility: currUsp === 4 ? "hidden" : "visible",
            cursor: currUsp === 4 ? "auto" : "pointer",
          }}
        >
          <Image
            alt="img"
            src={Arrows}
            height={100}
            width={100}
            // loading="eager"
            onClick={nextUsp}
          />
        </figure>
      </div>
    </section>
  );
}

export default WhyTechnofabSection;
