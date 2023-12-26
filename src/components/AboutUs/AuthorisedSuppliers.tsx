import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";
import Carrier from "@/assets/logo/authorised/carrier.png";
import Caryaire from "@/assets/logo/authorised/caryaire.png";
import Daikin from "@/assets/logo/authorised/daikin.png";
import Edgetech from "@/assets/logo/authorised/edgetech.png";
import Flaktwood from "@/assets/logo/authorised/flaktwood.png";
import Kirloskar from "@/assets/logo/authorised/kirloskar.png";
import LG from "@/assets/logo/authorised/lg.png";
import Schneider from "@/assets/logo/authorised/schneider.png";
import Siemens from "@/assets/logo/authorised/siemens.png";
import Voltas from "@/assets/logo/authorised/voltas.png";
import Zeco from "@/assets/logo/authorised/zeco.png";

const authorisedSuppliersArr = [
  {
    label: "Carrier Logo",
    img: Carrier,
  },
  {
    label: "Caryaire Logo",
    img: Caryaire,
  },
  {
    label: "Daikin Logo",
    img: Daikin,
  },
  {
    label: "Edgetech Logo",
    img: Edgetech,
  },
  {
    label: "Flaktwood Logo",
    img: Flaktwood,
  },
  {
    label: "Kirloskar Logo",
    img: Kirloskar,
  },
  {
    label: "LG Logo",
    img: LG,
  },
  {
    label: "Schneider Logo",
    img: Schneider,
  },
  {
    label: "Siemens Logo",
    img: Siemens,
  },
  {
    label: "Voltas Logo",
    img: Voltas,
  },
  {
    label: "Zeco Logo",
    img: Zeco,
  },
];

function AuthorisedSuppliers(props: any) {
  return (
    <section ref={props.sectionRef} className={styles.authorised}>
      <div className={styles.our_auth_text}>
        <p>Our Authorised Suppliers</p>
      </div>

      <div className={styles.suppliersSliderContainer}>
        <div className={styles.supplierImgSection}>
          {authorisedSuppliersArr.map((item: any, index: number) => {
            return (
              <div className={styles.supplierCardContainer} key={index}>
                <figure>
                  <Image
                    src={item?.img?.src}
                    alt={item?.label}
                    width={80}
                    height={60}
                    // loading="eager"
                  />
                </figure>
              </div>
            );
          })}
        </div>{" "}
        <div className={styles.supplierImgSection}>
          {authorisedSuppliersArr.map((item: any, index: number) => {
            return (
              <div className={styles.supplierCardContainer} key={index}>
                <figure>
                  <Image
                    src={item?.img?.src}      
                    alt={item?.label}
                    width={80}
                    height={60}
                    // loading="eager"
                  />
                </figure>
              </div>
            );
          })}
        </div>{" "}
        <div className={styles.supplierImgSection}>
          {authorisedSuppliersArr.map((item: any, index: number) => {
            return (
              <div className={styles.supplierCardContainer} key={index}>
                <figure>
                  <Image
                    src={item?.img?.src}
                    alt={item?.label}
                    width={80}
                    height={60}
                    // loading="eager"
                  />
                </figure>
              </div>
            );
          })}
        </div>{" "}
        <div className={styles.supplierImgSection}>
          {authorisedSuppliersArr.map((item: any, index: number) => {
            return (
              <div className={styles.supplierCardContainer} key={index}>
                <figure>
                  <Image
                    src={item?.img?.src}
                    alt={item?.label}
                    width={80}
                    height={60}
                    // loading="eager"
                  />
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AuthorisedSuppliers;
