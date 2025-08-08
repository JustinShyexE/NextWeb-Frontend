import Card from "@/app/style/smallcomponents/barOnCard";
import { AbhayaLibre2 } from "../ui/fonts";
export default function BarOn(props:{open:boolean}) {
  return (
    <div className="center barOn">
      <div className="barOn-left">
        <div className="txt-barOn-container">
          <h1 className= {`${AbhayaLibre2.className} bar-animated-txt bar-txt-big`}>Our Models</h1>
          <h1 className= {`${AbhayaLibre2.className} bar-animated-txt bar-txt-big`}>Inventory</h1>
          <h1 className= {`${AbhayaLibre2.className} bar-animated-txt bar-txt-big`}>Find a Dealer</h1>
          <h1 className= {`${AbhayaLibre2.className} bar-animated-txt bar-txt-big`}>Try Animals</h1>
          <hr className="hr"></hr>
        </div>
        <div className="txt-barOn-container2">
          <h1 className= {`${AbhayaLibre2.className} bar-animated-txt bar-txt-big`}>Blog</h1>
          <h1 className= {`${AbhayaLibre2.className} bar-animated-txt bar-txt-big`}>Events</h1>
          <h1 className= {`${AbhayaLibre2.className} bar-animated-txt bar-txt-big`}>Our Mission</h1>
          <h1 className= {`${AbhayaLibre2.className} bar-animated-txt bar-txt-big`}>Reviews</h1>
          <h1 className= {`${AbhayaLibre2.className} bar-animated-txt bar-txt-big`}>FAQ</h1>
          <h1 className= {`${AbhayaLibre2.className} bar-animated-txt bar-txt-big`}>Contact Us</h1>
        </div>
      </div>
      <div className="barOn-right">
        <Card open={props.open} delay = "0.15s" />
        <Card open={props.open} delay = "0.2s"/>
        <Card open={props.open} delay = "0.25s"/>
        <Card open={props.open} delay = "0.3s"/>
      </div>
    </div>
  );
}
