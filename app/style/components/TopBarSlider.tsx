import { comicNeue } from "../ui/fonts";
import Image from "next/image";
import image from "../../../public/icons/star.png";
import Slider from "react-infinite-logo-slider";

export default function TopBarSlider() {

  return (
    <div className="top-bar">
      <Slider
        width={"600px"}
        duration={10}
        pauseOnHover={true}
        blurBorders={false}
      >
        <Slider.Slide>
          <div className="movingBar">
            <Image src={image} width={40} height={40} alt="Sparkles" />
            <p className={`${comicNeue.className}`}>
              Unlock Top Talent at Half the Cost – Hire Your Perfect Candidate
              Today!
            </p>
          </div>
        </Slider.Slide>
        <Slider.Slide>
          <div className="movingBar">
            <Image src={image} width={40} height={40} alt="Sparkles" />
            <p className={`${comicNeue.className}`}>
              Unlock Top Talent at Half the Cost – Hire Your Perfect Candidate
              Today!
            </p>
          </div>
        </Slider.Slide>
      </Slider>
    </div>
  );
}
