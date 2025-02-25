import { comicNeue } from "../ui/fonts";
import Image from "next/image";
import image from "../../../public/icons/star.png";
import Slider from "react-infinite-logo-slider";
import { useMediaQuery } from "react-responsive";

export default function TopBarSlider() {
  const is320 = useMediaQuery({ query: `(max-width: 700px)` });

  let speed = 10;
  if (is320) {
    speed = 5;
  }

  return (
    <div className="top-bar">
      <Slider
        width={"600px"}
        duration={speed}
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
