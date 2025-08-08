import Image from "next/image";
import cat from "@/public/catmedic.png";
import { AbhayaLibre2 } from "../ui/fonts";

export default function Card(props: { open: boolean; delay?: string }) {
  return (
    <div
      className={props.open ? "barOn-box-on" : "barOn-box-off"}
      style={{ animationDelay: props.delay }}
    >
      <Image className="barOn-box-image" src={cat} alt="medic cat" />
      <div className="barOn-box-text">
        <h1 className={`${AbhayaLibre2.className} center barOn-title`}>Noovo Lite</h1>
        <p className={`${AbhayaLibre2.className} center barOn-txt`}>Starts at 162.000</p>
        <p className={`${AbhayaLibre2.className} center barOn-txt`}> or from 1,000/mo</p>
      </div>
    </div>
  );
}
