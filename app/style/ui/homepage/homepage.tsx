"use client";
import "../css/homepage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";


export function Footer() {
  return <div className="background">Footer hih</div>;
}

export function Body() {
  gsap.registerPlugin(ScrollTrigger);
  const squareRef = useRef(null);
  useGSAP(() => {
    gsap.to(squareRef.current, {
      duration: 3,
      rotatioon: 360,
      scale: 1.2,
      ease: "linear",
      scrollTrigger: {
        trigger: squareRef.current,
        start: "top 80%", // Starts when the top of square reaches 80% of viewport
        toggleActions: "play reverse play reverse", // Runs once when triggered
      },
    });
  });

  return (
    <div className="body">
      <div className="square" ref={squareRef}></div>
      <Link href={"http://localhost:3001/homepage"}>
        <div className="link"></div>
      </Link>
    </div>
  );
}
