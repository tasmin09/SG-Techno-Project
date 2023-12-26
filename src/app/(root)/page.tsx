'use client'
// import AboutUs from "@/components/AboutUs";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import loadingGif from "@/assets/images/loading.gif";


const AboutUs = dynamic(() => import("@/components/AboutUs"), {
  loading: () => (
    <div
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={loadingGif.src} alt="loading..." height={240} width={240} />
    </div>
  ),
});

export default function AboutUsPage() {

 

  return (
    <>
    
      <AboutUs />
    </>
  );
}
