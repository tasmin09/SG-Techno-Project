"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import BG2 from "@/assets/images/bg2.jpg";
import styles from "./style.module.scss";
import doubleComma from "@/assets/texts/dbcomma.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useTransform, useScroll, motion } from "framer-motion";

function MissionSection(props: any) {
  const missionHeader = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: missionHeader,
    offset: ["start end", "start 60%"],
  });

 

  const y = useTransform(scrollYProgress, [0, 1], [300, -50]);
  

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.context(() => {
      gsap.to(".missionImg", {
        scrollTrigger: {
          trigger: ".missionImg",
          scrub: true,
          // markers: true,
          id: "missionImg",
          start: "top 90%",
          end: "top 50%",
        },
        duration: 1,
        y: `-35dvh`,
        // ease: "power4.in",
      });
    }, props.sectionRef);
  }, []);

  return (
    <>
      <section
        ref={props.sectionRef}
        className={styles.missionSectionContainer}
      >
        <div
          className={`${styles.blueBackground} blueBackground`}
          id="blueBackground"
        >
          <div >
            <Image
            

              className="missionImg"
              alt="img"
              src={BG2}
              width={500}
              height={650}
            />
          </div>
          <div>
            <motion.h1
              className="missionHeading"
              style={{ y }}
              ref={missionHeader}
              // data-aos="fade-up"
              // data-aos-anchor-placement="bottom-bottom"
              // data-aos-duration="2000"
            >
              Our Mission
            </motion.h1>
            <article>
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2000"
              >
                Our mission is to provide top-quality heating ventilation and
                air conditioning services that meet our customer needs and
                exceed their expectations. We are dedicated to using the most
                advanced technology and innovative techniques to deliver
                efficient, reliable, and cost-effective solutions. Our team of
                highly trained and experienced professionals is committed to
                delivering the best customer service in the industry, ensuring
                complete satisfaction with every job we do. At SG Technofab, we
                strive to be the premier choice for all of our customers HVAC
                needs.
              </p>
            </article>

            <Image
              alt="img"
              src={doubleComma}
              height={220}
              width={220}
              className={styles.doubleComma}
            />
          </div>
        </div>
      </section>

      <section className={styles.missionMobileSectionContainer}>
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2000"
          className="missionHeading"
        >
          Our Mission
        </h1>
        <Image alt="img" src={BG2} width={600} height={500} />
        <div className={styles.blueBackground}>
          <article>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="2000"
            >
              Our mission is to provide top-quality heating ventilation and air
              conditioning services that meet our customer needs and exceed
              their expectations. We are dedicated to using the most advanced
              technology and innovative techniques to deliver efficient,
              reliable, and cost-effective solutions. Our team of highly trained
              and experienced professionals is committed to delivering the best
              customer service in the industry, ensuring complete satisfaction
              with every job we do. At SG Technofab, we strive to be the premier
              choice for all of our customers HVAC needs.
            </p>
          </article>

          <Image
            alt="img"
            src={doubleComma}
            height={220}
            width={220}
            className={styles.doubleComma}
          />
        </div>
      </section>
    </>
  );
}

export default MissionSection;
