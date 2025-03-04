import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import { irinaSans } from "../ui/fonts";
import { LilitaOne } from "../ui/fonts";
import { useState } from "react";
import { Button } from "../smallcomponents/button";
import image from "@/public/image.jpg";
import otter from "@/public/panda.jpg";
import owl from "@/public/owl.jpg";

export function NavBar() {
  // For Menu Bar 1
  const [isOpen, setOpen] = useState(false);
  const [barMenu, setBarMenu] = useState(false);
  const [anim, setAnim] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  let count: boolean = true;
  function openClose() {
    if (count) {
      const el = document.querySelector(".bar-off");
      if (el) el.style.visibility = "visible";
      count = false;
    }
    if (!isOpen) setOpen(true);
    else setOpen(false);
    if (barMenu) setBarMenu(false);
    if (anim) setAnim(false);
  }

  // For Menu Bar 2
  let bol: boolean = true;
  function barmenu() {
    if (bol) {
      const el = document.querySelector(".bar-menu-off");
      if (el) el.style.visibility = "visible";
      bol = false;
    }
    handleAnimation();
    if (!barMenu) {
      setBarMenu(true);
      setHasOpened(true);
    } else setBarMenu(false);
  }
  function handleAnimation() {
    if (!anim) setAnim(true);
    else setAnim(false);
  }
  function changeState() {
    if (window.innerWidth < 1200) {
      console.log(window.innerWidth)
      setBarMenu(false);
      setAnim(false);
    }
    setHasOpened(false);
  }

  if (typeof window !== "undefined") {
    window.addEventListener("load", changeState);
    window.addEventListener("resize", changeState);
  }

  //Animation delay for the 3 cards in the Navbar
  const a: string = "0.2s";
  const b: string = "0.3s";
  const c: string = "0.4s";

  return (
    <div className="navbar">
      <div id="bar" className={isOpen ? "bar-on" : "bar-off"}></div>
      <div className={barMenu ? "bar-menu-on" : "bar-menu-off "}>
        <div className="bar-menu-div">
          <div className="bar-menu-a">
            <h1>Our Best Workers</h1>
            <p>
              Our best workers with over 20 years of experience can be hired by you with just on
              click.{" "}
            </p>
          </div>
          <div className="bar-menu-b center">
            <div
              className={barMenu ? "bar-menu-card" : ""}
              style={{ backgroundImage: "url(" + image.src + ")", animationDelay: a }}
            >
              <h2 className="card-title" style={{ color: "white" }}>
                Motanel Gaming
              </h2>
              <p className="card-text" style={{ color: "white" }}>
                start price £1000/mth
              </p>
            </div>
            <div
              className={barMenu ? "bar-menu-card" : ""}
              style={{ backgroundImage: "url(" + otter.src + ")", animationDelay: b }}
            >
              <h2 className="card-title" style={{ color: "white" }}>
                Motanel Gaming
              </h2>
              <p className="card-text" style={{ color: "white" }}>
                start price £1000/mth
              </p>
            </div>
            <div
              className={barMenu ? "bar-menu-card" : ""}
              style={{ backgroundImage: "url(" + owl.src + ")", animationDelay: c }}
            >
              <h2 className="card-title" style={{ color: "white" }}>
                Motanel Gaming
              </h2>
              <p className="card-text" style={{ color: "white" }}>
                start price £1000/mth
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          anim
            ? "navbar-start-open center"
            : hasOpened
            ? "navbar-start-close center"
            : "navbar-start center"
        }
      >
        <div className="navbar-hamburg center">
          <Hamburger size={20} toggled={isOpen} toggle={openClose} />
        </div>
        <div className="navbar-start-child center">
          <span onClick={barmenu} className={`${irinaSans.className} navbar-button bar2 cursor`}>
            Bar2 <div className="nav-underline"></div>
          </span>
          <Link className={`${irinaSans.className} navbar-button`} href="/">
            About Us <div className="nav-underline"></div>
          </Link>
          <Link className={`${irinaSans.className} navbar-button`} href="/">
            Animals <div className="nav-underline"></div>
          </Link>
          <Link className={`${irinaSans.className} navbar-button`} href="/">
            Hire <div className="nav-underline"> </div>
          </Link>
        </div>
      </div>
      <div
        className={
          anim
            ? "navbar-mid navbar-mid-open center"
            : hasOpened
            ? "navbar-mid navbar-mid-close center"
            : "navbar-mid center"
        }
      >
        <h2 className={`${LilitaOne.className} logo`}>NextWeb</h2>
      </div>
      <div
        className={
          barMenu
            ? "navbar-end navbar-end-open center"
            : hasOpened
            ? "navbar-end navbar-end-close center"
            : "navbar-end center"
        }
      >
        <Button
          name="Contact us"
          animation="end"
          size={150}
          maxSize={170}
          id="btn-visibility"
          color="rgba(189, 202, 190, 1)"
        />
        <Button
          name="Later"
          animation="end"
          size={120}
          maxSize={140}
          id="btn-visibility"
          color="rgba(189, 202, 190, 1)"
        />
        <button className="small-btn" style={{ backgroundColor: "rgba(189, 202, 190, 1)" }}>
          Contact Us
        </button>
      </div>
    </div>
  );
}

/*          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/homepage">This is the secondpage Homepage2...</Link>
          </li>
      </div> */
