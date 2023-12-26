"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import DDALogo from "@/assets/images/dda.svg";
import BG3 from "@/assets/images/bg3.jpg";
import DBComma from "@/assets/texts/dbcomma.svg";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function FeedbackSection(props: any) {
  const imgRef: any = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imgRef.current, {
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%",
        end: "bottom center",
        scrub: 2,
        // markers: true,
        id: "Feedback",
      },
      duration: 2,
      y: "-=20vh",
    });
  }, []);

  return (
    <section
      ref={props.sectionRef}
      className={`${styles.feedbackSectionContainer} smooth-container`}
    >
      <section className={styles.feedback}>
        <figure className={styles.dbcomma1}>
          <Image alt={"img"} src={DBComma} width={180} height={180} />
        </figure>

        <div>
          <article>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              The team has been so helpful, They always go out of their way to
              ensure my satisfaction. They are professional and knowledgeable,
              it was an excellent experience working with <b>SG Technofab</b>.
            </p>
          </article>
          <div
            className={styles.projectName}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
            data-aos-delay="500"
          >
            <figure>
              <Image alt="img" src={DDALogo} width={100} height={100} />
            </figure>
            <p>
              <b>Delhi Development Authority</b>
              <br />
              (Electrical Division - 3)
            </p>
          </div>
        </div>
      </section>
      <Image ref={imgRef} src={BG3.src} alt="bg-img" width="750" height="750" />
    </section>
  );
}

export default FeedbackSection;
