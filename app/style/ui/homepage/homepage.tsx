"use client";
import "../css/homepage.css";
import Link from "next/link";
import { Button } from "../../smallcomponents/button";
import { AbhayaLibre } from "@/app/style/ui/fonts";
import homepage1 from "@/public/homepage1.jpg";
import { AbhayaLibre2 } from "@/app/style/ui/fonts";
import { useEffect, useRef, useState } from "react";

export function Footer() {
  return <div className="background">Footer hih</div>;
}

export function Body() {

  const divRef = useRef(null);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBottom(entry.isIntersecting);
      },
      { root: null, threshold: 0.7 } // Fires when the target is fully visible
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }
    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);


  return (
    <div className="body">
      <div className="home-main-image" style={{ backgroundImage: "url(" + homepage1.src + ")" }}>
        <div className="home-text-div">
          <h1 className={AbhayaLibre.className + " home-title"}>NextWeb</h1>
          <h1 className={AbhayaLibre.className + " home-title"}>Best workers of all times</h1>
          <h3 className="home-text">
            Discover our little animals and put them to work, now at the best price possible
          </h3>
          <Button
            name="Discover"
            id="home-btn"
            animation="start"
            size={140}
            maxSize={160}
            color="rgba(225, 207, 6, 1)"
          />
        </div>
      </div>
      <div ref={divRef} id="div-to-touch" className="home-main-text center"> {/* touches this id*/}

        <div className= {isBottom ? "home-main-text-div" : "home-main-text-div vis"}>
          <h1 className={AbhayaLibre2.className + " center home-txt"}>
            Explore more about our little animals and{" "}
          </h1>
          <h1 className={AbhayaLibre2.className + " center home-txt"}>which services they offer</h1>
        </div>
      </div>
      <div id="squar" className="square" ></div>
      <Link href={"http://localhost:3001/homepage"}>
        <div className="link"></div>
      </Link>
    </div>
  );
}
