"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navigationBar.module.scss";
import Logo from "../../assets/logo/mainLogo.svg";
import SG from "../../assets/logo/SG.svg";
import hamburgerIcon from "@/assets/images/Hamburger_icon.png";
import ContactUsModal from "./ContactUsModal";

interface NavItem {
  label: string;
  link: string;
}

const NavigationBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [currPath, setCurrPath] = useState<string | null>("");
  const [menuVis, setMenuVis] = useState(false);

  useEffect(() => {
    setCurrPath(window.location.pathname.split("/")[1]);
  }, []);

  const openModal = () => {
    setOpen(true);
  };

  const navList: NavItem[] = [
    { label: "About Us", link: "" },
    { label: "Our Services", link: "services" },
    { label: "Our Projects", link: "projects" },
    { label: "News & Updates", link: "news" },
    { label: "Blogs", link: "blogs" },
  ];

  return (
    <>
      <nav className={styles.nav_wrapper}>
        <Link href="/">
          <div className={styles.main_logo}>
            <div className={styles.logo}>
              <Image
                alt={"pic"}
                src={Logo}
                height={45}
                width={45}
                // loading="eager"
              />
            </div>
            <div className={styles.logotext}>
              <Image
                alt={"pic"}
                src={SG}
                height={20}
                width={165}
                // loading="eager"
              />
            </div>
          </div>
        </Link>
        <div className={styles.nav_list}>
          {navList.map(
            (item: { label: string; link: string }, index: number) => {
              return (
                <div key={index}>
                  <Link
                    onClick={() => setCurrPath(item.link)}
                    href={`/${item.link}`}
                    className={`${styles.options_link} ${
                      currPath === item.link ? styles.active : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            }
          )}
        </div>
        <div className={styles.contact_btn}>
          <button className={styles.contactUsBtn} onClick={openModal}>
            Contact Us
          </button>
        </div>
      </nav>

      <nav className={styles.mobileNavWrapper}>
        <figure>
          <Image
            src={hamburgerIcon}
            alt="hamburger-icon"
            width={30}
            height={30}
            onClick={() => setMenuVis(true)}
          />
        </figure>
        <Link href="/">
          <div className={styles.main_logo}>
            <div className={styles.logo}>
              <Image
                alt={"pic"}
                src={Logo}
                height={50}
                width={50}
                // loading="eager"
              />
            </div>
            <div className={styles.logotext}>
              <Image
                alt={"pic"}
                src={SG}
                height={20}
                width={165}
                // loading="eager"
              />
            </div>
          </div>
        </Link>
        <div
          className={styles.navLinksContainer}
          style={{
            left: menuVis ? "10px" : "-1000px",
          }}
        >
          <span
            className={styles.closeNavBtn}
            onClick={() => setMenuVis(false)}
          >
            x
          </span>
          {navList.map(
            (item: { label: string; link: string }, index: number) => {
              return (
                <div key={index}>
                  <Link
                    onClick={() => {
                      setCurrPath(item.link);
                      setMenuVis(false);
                    }}
                    href={`/${item.link}`}
                    className={`${styles.options_link} ${
                      currPath === item.link ? styles.active : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            }
          )}
          <div className={styles.contact_btn}>
            <button className={styles.contactUsBtn} onClick={openModal}>
              Contact Us
            </button>
          </div>
        </div>
      </nav>
      <ContactUsModal open={open} setOpen={setOpen} />
    </>
  );
};
export default NavigationBar;
