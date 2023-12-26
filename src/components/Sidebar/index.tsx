"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

function Sidebar({ count = 1 }) {
  const [scrollbarPrgress, setScrollbarPrgress] = useState(0);

  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };

    function myFunction() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrollbarPrgress((winScroll / height) * 95);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeof window !== "undefined" && window.onscroll]);

  return (
    <div className={styles.sidebar_container}>
      <div
        style={{
          top: `${scrollbarPrgress}%`,
        }}
      >
        <strong>{`0${count}`}</strong>
      </div>
    </div>
  );
}

export default Sidebar;
