import React from "react";
import styles from "./page.module.css";

const Page = ({ title = "", content = "Lorem Ipsum nfdnfndfne" }) => {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.title}>{title}</div>

      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default Page;
