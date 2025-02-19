"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import "./style/ui/css/homepage.css";
import { NavBar } from "./style/ui/homepage/homepage";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const textRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { x: "1000%" }, // Start off-screen to the right
      {
        x: "-100%", // Move completely off-screen to the left
        duration: 15, // Duration of the animation (adjust speed here)
        repeat: -1, // Repeat indefinitely
        ease: "linear", // Continuous smooth movement
      }
    );
  }, []);

  return (
    <html>
      <body>
        <div className="top-bar">
          <p ref={textRef} className="moving-text">
            This is the scrolling text from right to left!
          </p>
        </div>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
