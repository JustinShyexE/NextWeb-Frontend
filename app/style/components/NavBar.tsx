import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import { irinaSans } from "../ui/fonts";
import { LilitaOne } from "../ui/fonts";
import { useState } from "react";

export function NavBar() {
  // For Menu Bar 1
  const [isOpen, setOpen] = useState(false);
  const [barMenu, setBarMenu] = useState(false)
  let count: boolean = true;
  function openClose() {
    if (count) {
      const el = document.querySelector(".bar-off");
      if (el) el.style.visibility = "visible";
      count = false;
    }
    if (!isOpen) setOpen(true);
    else setOpen(false);
    console.log(isOpen);
    if(barMenu)setBarMenu(false)
  }
   
    // For Menu Bar 2
  let bol = true
 function barmenu(){
  if(bol){
    const el = document.querySelector(".bar-menu-off")
    if(el) el.style.visibility = "visible";
    bol = false
  }
   if(!barMenu) setBarMenu(true)
    else  setBarMenu(false)
 }

  return (
    <div className="navbar">
      <div id="bar" className={isOpen ? "bar-on" : "bar-off"}></div>
      <div className={barMenu ? "bar-menu-on" : "bar-menu-off "}></div>
      <div className="navbar-start center">
        <div className="navbar-hamburg center" >
          <Hamburger size={20} toggled={isOpen} toggle={openClose} />
        </div>
        <div className="navbar-start-child center">
          <span onClick={barmenu} className={`${irinaSans.className} navbar-button cursor`}>
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
      <div className="navbar-mid center">
        <h2 className={`${LilitaOne.className} logo`}>NextWeb</h2>
        <div className="logo-bck"></div>
      </div>
      <div className="navbar-end"></div>
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
