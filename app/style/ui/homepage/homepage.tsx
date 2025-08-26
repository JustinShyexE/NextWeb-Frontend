"use client";
import "../css/homepage.css";
import Link from "next/link";
import { Button } from "../../smallcomponents/button";
import { AbhayaLibre } from "@/app/style/ui/fonts";
import homepage1 from "@/public/homepage1.jpg";
import { AbhayaLibre2 } from "@/app/style/ui/fonts";
import { useEffect, useRef, useState } from "react";
import Card from "../../smallcomponents/card";
//import panda from "../../../../public/panda.jpg";
import owl from "@/public/cat2.jpg";
import owl3 from "@/public/owl3.jpg";
export function Footer() {
  return <div className="background">Footer hih</div>;
}

export function Body() {
  // Separate states for each div
  const [isDiv1Visible, setIsDiv1Visible] = useState(false);
  const [isDiv2Visible, setIsDiv2Visible] = useState(false);
  const [isDiv3Visible, setIsDiv3Visible] = useState(false);

  // Refs for each div
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check which div is being observed and update its specific state
          if (entry.target === div1Ref.current) {
            setIsDiv1Visible(entry.isIntersecting);
          } else if (entry.target === div2Ref.current) {
            setIsDiv2Visible(entry.isIntersecting);
          } else if (entry.target === div3Ref.current) {
            setIsDiv3Visible(entry.isIntersecting);
          }
        });
      },
      {
        root: null, // Uses viewport
        rootMargin: "0px", // Trigger exactly at viewport edge
        threshold: 0, // Trigger when any part becomes visible
      }
    );

    // Observe each div
    if (div1Ref.current) observer.observe(div1Ref.current);
    if (div2Ref.current) observer.observe(div2Ref.current);
    if (div3Ref.current) observer.observe(div3Ref.current);

    // Cleanup
    return () => {
      if (div1Ref.current) observer.unobserve(div1Ref.current);
      if (div2Ref.current) observer.unobserve(div2Ref.current);
      if (div3Ref.current) observer.unobserve(div3Ref.current);
    };
  }, []); // Empty dependenc
  
  //add the card make the animation least longer and put the trigger at 0.2

  return (
    <div className="body">
      <div className="home-main-image" style={{ backgroundImage: "url(" + homepage1.src + ")" }}>
        <div className="home-text-div">
          <h1 className={AbhayaLibre.className + " home-title"}>NextWeb</h1>
          <h1 className={AbhayaLibre.className + " home-title home-title-plus"}>Best workers of all times</h1>
          <h3 className={AbhayaLibre.className + " home-text"}>
            Discover our little animals and put them to work, now at the best price possible
          </h3>
          <Button
            txtcolor=""
            btnid=""
            name="Discover"
            id="home-btn"
            animation="start"
            size={140}
            maxSize={160}
            color="rgba(225, 207, 6, 1)"
          />
        </div>
      </div>
      <div ref={div1Ref} id="div-to-touch" className="home-main-text center">
        {" "}
        {/* touches this id*/}
        <div className={isDiv1Visible ? "home-main-text-div" : "home-main-text-div vis"}>
          <h1 className={AbhayaLibre2.className + " center home-txt"}>
            Explore more about our little animals and{" "}
          </h1>
          <h1 className={AbhayaLibre2.className + " center home-txt"}>which services they offer</h1>
        </div>
      </div>

      <div ref={div2Ref} className="home-cards center">
        <Card
          class={isDiv2Visible ? "" : "hide"}
          imageUrl={owl}
          title=" Find Plumber"
          text="start at £100 / service"
          txtcolor="white"
          delay=""
        />
        <Card
          class={isDiv2Visible ? "" : "hide"}
          imageUrl={owl3}
          title=" Find Plumber"
          text="start at £100 / service"
          txtcolor="white"
          delay=""
        />
      </div>
      <div ref={div3Ref} className="home-cards center">
        <Card
          class={isDiv3Visible ? "" : "hide"}
          imageUrl={owl}
          title=" Find Plumber"
          text="start at £100 / service"
          txtcolor="white"
          delay=""
        />
        <Card
          class={isDiv3Visible ? "" : "hide"}
          imageUrl={owl}
          title=" Find Plumber"
          text="start at £100 / service"
          txtcolor="white"
          delay=""
        />
      </div>
      <div id="squar" className="square"></div>
      <Link href={"http://localhost:3001/homepage"}>
        <div className="link"></div>
      </Link>
    </div>
  );
}
