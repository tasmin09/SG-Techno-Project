import React from "react";
import styles from "./styles.module.scss";
import P1 from "@/assets/images/product1.jpg";
import P2 from "@/assets/images/product2.jpg";
import P3 from "@/assets/images/product3.jpg";
import Image from "next/image";
import VideoSection from "./VideoSection";

const ourProjectArr = [
  {
    title: "<b>200+</b> Turnkey Projects",
    picture: P1,
    achievements: [
      "Chillers installed <span><b>10</b>k Tr <b>+</b></span>",
      "Indoor system installed <span><b>15</b>k <b>+</b></span>",
      "VRV installed <span><b>8</b>hp <b>+</b></span>",
    ],
  },
  {
    title: "<b>50+</b> Retrofit Projects",
    picture: P2,
    achievements: [
      "Chillers updated <span><b>10</b>k Tr <b>+</b></span>",
      "Indoor system updated <span><b>15</b>k <b>+</b></span>",
      "VRV updated <span><b>8</b>hp <b>+</b></span>",
    ],
  },
  {
    title: "<b>200+</b> CAMC",
    picture: P3,
    achievements: [
      "Chillers installed <span><b>10</b>k Tr <b>+</b></span>",
      "Indoor system installed <span><b>15</b>k <b>+</b></span>",
      "VRV installed <span><b>8</b>hp <b>+</b></span>",
    ],
  },
];

function Services() {
  return (
    <section className={styles.servicesPageContainer}>
      <VideoSection />

      <div className={styles.solutionsContainer}>
        <article className={styles.headingSection}>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
          >
            Our <b>Solutions</b>
          </p>
          <p className={styles.details}>
            We take immense pride in presenting an extensive array of HVAC
            solutions encompassing Turnkey Projects, Retrofit Initiatives, and
            Comprehensive Maintenance Services. Our commitment resonates through
            the breadth of our offerings.
          </p>
          <span className={styles.gradientLine}></span>
        </article>

        <div className={styles.ourProjectsContainer}>
          {ourProjectArr.map((item: any, index: number) => {
            return (
              <section
                key={index}
                style={{
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                }}
              >
                <div className={styles.projectDetailsContainer}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.title,
                    }}
                  ></p>
                  <span className={styles.gradientLine}></span>
                  <div className={styles.statsContainer}>
                    {item?.achievements?.map((stats: any, position: any) => {
                      return (
                        <div className={styles.stats} key={position}>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: stats,
                            }}
                          ></p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <figure>
                  <Image
                    alt="img"
                    src={item?.picture.src}
                    width={500}
                    height={500}
                  />
                </figure>
              </section>
            );
          })}
        </div>

        {/* <div className={styles.ourProjectsContainer}></div>

        <div className={styles.product_wrapper} style={{ gap: "15%" }}>
          <div className={styles.imagecon}>
            <Image
              alt={"img"}
              src={P2}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className={styles.stats}>
            <div className={styles.front_stat}>50+ Retrofit Projects</div>
            <div className={styles.divider}>ab</div>
            <div className={styles.stat}>
              <div className={styles.small_stats}>
                <div className={styles.small_stats1}>Chillers Updated</div>
                &nbsp; &nbsp;
                <div className={styles.small_stats2}>
                  <b>10</b>k Tr <b>+</b>
                </div>
              </div>
              <div className={styles.small_stats}>
                <div className={styles.small_stats1}>Indoor System Updated</div>
                &nbsp; &nbsp;
                <div className={styles.small_stats2}>
                  <b>15</b>k<b>+</b>
                </div>
              </div>
            </div>
            <div className={styles.stat}>
              <div className={styles.small_stats}>
                <div className={styles.small_stats1}>VRV Updated</div>
                &nbsp; &nbsp;
                <div className={styles.small_stats2}>
                  <b>8</b>hp <b>+</b>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.product_wrapper}>
          <div className={styles.stats}>
            <div className={styles.front_stat}>200+ CAMC</div>
            <div className={styles.divider}>ab</div>
            <div className={styles.stat}>
              <div className={styles.small_stats}>
                <div className={styles.small_stats1}>Chillers Installed</div>
                &nbsp; &nbsp;
                <div className={styles.small_stats2}>
                  <b>10</b>k Tr <b>+</b>
                </div>
              </div>
              <div className={styles.small_stats}>
                <div className={styles.small_stats1}>
                  Indoor System Installed
                </div>
                &nbsp; &nbsp;
                <div className={styles.small_stats2}>
                  <b>15</b>k<b>+</b>
                </div>
              </div>
            </div>
            <div className={styles.stat}>
              <div className={styles.small_stats}>
                <div className={styles.small_stats1}>VRV Installed</div>
                &nbsp; &nbsp;
                <div className={styles.small_stats2}>
                  <b>8</b>hp <b>+</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imagecon}>
            <Image
              alt={"img"}
              src={P3}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Services;
