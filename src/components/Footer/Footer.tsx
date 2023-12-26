import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

import {
  InsertRowRightOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.brief}>
        <div className={styles.footer_headings}> SG Technofab</div>
        <div className={styles.footer_main_brief}>
          <b style={{ color: "#45edd0" }}>SG Technofab</b> It gives us immense
          pleasure to introduce ourselves as a team of professionals with a
          shared vision. S.G.TECHNOFAB Pvt Ltd. excels in &ldquo;Blending
          Tomorrow&apos;s Technology with Today&apos;s Business Challenges.
          &ldquo;
        </div>
      </div>

      <div className={styles.quick_links}>
        <div className={styles.footer_headings}> Quick Links</div>

        <ul className={styles.footer_lists}>
          <li>
            <Link style={{ textDecoration: "none", color: "white" }} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "white" }} href="/">
              About Us
            </Link>
          </li>
          <li>Careers</li>
          <li>
            <a href="#4" style={{ textDecoration: "none", color: "white" }}>
              Projects
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.projects}>
        <div className={styles.footer_headings}> Projects</div>

        <ul className={styles.footer_lists}>
          <li>Residential</li>
          <li>Theatre</li>
          <li>Hotels</li>
          <li>Business Center</li>
        </ul>
      </div>

      <div className={styles.contact_us}>
        <div className={styles.footer_headings}>Contact Us</div>
        <ul className={styles.footer_lists}>
          <li>
            <InsertRowRightOutlined
              style={{ fontSize: "1.5rem", color: "#45edd0" }}
            />
            H.O.:DSS-170, Huda Shopping Complex, Sector-31, Faridabad, Haryana
            121003
          </li>
          <li>
            {" "}
            <PhoneOutlined style={{ fontSize: "1.5rem", color: "#45edd0" }} />
            +91 9312286221
          </li>
          <li>
            <MailOutlined style={{ fontSize: "1.5rem", color: "#45edd0" }} />
            contact@sgtechnofab.com
          </li>
          <li>
            {" "}
            <PhoneOutlined style={{ fontSize: "1.5rem", color: "#45edd0" }} />
            R.O.:B-46-217,Ground Floor,New Ashok Nagar, Delhi-110096
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
