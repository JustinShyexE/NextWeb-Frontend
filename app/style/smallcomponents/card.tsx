import { Button } from "./button";
import Buttonsm from "./buttonsm";
import { StaticImageData } from "next/image";

export default function Card(props: {
  title: string;
  text: string;
  txtcolor: string;
  imageUrl: string | StaticImageData;
}) {
  return (
    <div className="home-card" style={{ backgroundImage: "url(" + props.imageUrl.src + ")" }}>
      <div className="home-card-txt-wrp">
        <p className="home-card-title center" style={{ color: props.txtcolor }}>
          {props.title}
        </p>
        <p className="home-card-txt center" style={{ color: props.txtcolor }}>
          {props.text}
        </p>
      </div>
      <div className="home-card-wrap center">
        <Buttonsm name="Discover" textcolor="white" color="rgba(136, 107, 107, 1)" id="btn-sm-wh" />
        <Buttonsm name="Discover" textcolor="black" color="rgba(189, 202, 190, 1)" id="btn-sm-wh" />
        <Button
          id="btn-big-wh"
          btnid=""
          color="rgba(136, 107, 107, 1)"
          name="Discover"
          animation="end"
          size={130}
          maxSize={150}
          txtcolor="white"
        />
        <Button
          id="btn-big-wh"
          btnid=""
          color="rgba(189, 202, 190, 1)"
          name="Discover"
          animation="end"
          size={130}
          maxSize={150}
          txtcolor="black"
        />
      </div>
    </div>
  );
}
