import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BG2 from "@/assets/images/bg2.jpg";
import styles from "../../styles/missionSection.module.scss";
import doubleComma from "@/assets/texts/dbcomma.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function MissionSection(props: any) {
  const missionHeader = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const headerOpacity = Math.min(1, scrollY / 100);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -10 },
  };

  const imgVariants = {
    hidden: { opacity: 0, scale: 1.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 3 } },
  };

  return (
    <>
      <section
        ref={props.sectionRef}
        className={styles.missionSectionContainer}
      >
        <motion.div
          className={styles.blueBackground}
          id="blueBackground"
          variants={list}
          initial="hidden"
          animate={controls}
          ref={ref}
          style={{ opacity: headerOpacity }}
        >
          <motion.div variants={item} className={styles.missionHeading}>
            <h2
              ref={missionHeader}
            >
              Our Mission
            </h2>
          </motion.div>

          <motion.div className={styles.missionContent} variants={item}>
            <motion.div
              initial={{ opacity: 0, scale: -0.7 }}
              animate={inView ? "visible" : "hidden"}
              variants={imgVariants}
              transition={{ duration: 3, delay: 1 }}
            >
              <Image 
                className={styles.missionImg}
              alt="img" src={BG2} width={500} height={650} />
            </motion.div>

            <article
            className={styles.missionContentRight}
            >
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2000"
              >
                Our mission is to provide top-quality heating, ventilation, and
                air conditioning services that meet our customer needs and
                exceed their expectations. We are dedicated to using the most
                advanced technology and innovative techniques to deliver
                efficient, reliable, and cost-effective solutions. Our team of
                highly trained and experienced professionals is committed to
                delivering the best customer service in the industry, ensuring
                complete satisfaction with every job we do. At SG Technofab, we
                strive to be the premier choice for all of our customers&apos;
                HVAC needs.
              </p>
              <Image
              alt="img"
              src={doubleComma}
              height={220}
              width={220}
              className={styles.doubleComma}
            />
            </article>

            
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default MissionSection;
