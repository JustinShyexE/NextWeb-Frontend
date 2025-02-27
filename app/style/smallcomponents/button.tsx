import "@/app/style/ui/css/smallcomp.css";

import Image from "next/image";
import arrow from "@/public/icons/right.png";
import { useState } from "react";

export function Button(props: { name: string; animation: string; maxSize: number; size: number; id:string}) {
  const maxSize = { width: props.maxSize };
  const [hover, setHover] = useState(false);

  let bool: boolean;
  if (props.animation === "end") bool = false;
  else bool = true;

  function handle() {
    if (hover) setHover(false);
    else setHover(true);
  }

  return (
    <div id={props.id} style={maxSize} className={bool ? "btn-div btn-start" : "btn-div btn-end"}>
      <button 
      style={{
        width: hover ? props.maxSize: props.size,
      }} onMouseLeave={handle} onMouseEnter={handle} className={`main-button center irinaSans`}>
        <p className="btn-text">{props.name}</p>
        <Image className="arrow" alt="arrow" width={25} height={25} src={arrow} />
      </button>
    </div>
  );
}
