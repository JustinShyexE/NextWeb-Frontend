import "../ui/css/carousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRef } from "react";
import Image from "next/image";
import catImage from "../../../public/catTransparent.png";
import { Button } from "./../smallcomponents/button";
import Buttonsm from "./../smallcomponents/buttonsm";
import { AbhayaLibre } from "../ui/fonts";
import { AbhayaLibre2 } from "../ui/fonts";

export function CarouselComp(props: { class: string, carouselLeft?: string, carouselRight?: string }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const carouselRef = useRef<Carousel>(null);
  const handleNext = () => {
    carouselRef.current?.next(1);
  };

  const handlePrev = () => {
    carouselRef.current?.previous(1);
  };

  return (
    <div className={props.class}>
      <div className="carousel-title center"></div>
      <div className="carousel-main">
        <div className={props.carouselLeft} onClick={handlePrev}></div>
        <div className={props.carouselRight} onClick={handleNext}></div>
        <div className="carousel-wrapper">
             <div className="carousel-line"></div>  
          <Carousel
            ref={carouselRef}
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={false}
            centerMode={true}
            keyBoardControl={true}
            arrows={false}
          >
            <div className="carousel-img-div center">
              <Image src={catImage} className="carousel-img" alt="cat" />
            </div>
            <div className="carousel-img-div center">
              <Image src={catImage} className="carousel-img" alt="cat" />
            </div>
            <div className="carousel-img-div center">
              <Image src={catImage} className="carousel-img" alt="cat" />
            </div>
            <div className="carousel-img-div center">
              <Image src={catImage} className="carousel-img" alt="cat" />
            </div>
            <div className="carousel-img-div center">
              <Image src={catImage} className="carousel-img" alt="cat" />
            </div>
            <div className="carousel-img-div center">
              <Image src={catImage} className="carousel-img" alt="cat" />
            </div>
            <div className="carousel-img-div center">
              <Image src={catImage} className="carousel-img" alt="cat" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="carousel-text center">
        <h2 className={AbhayaLibre.className + " carousel-title " + "center"}>Tom Cartel</h2>
        <p className={AbhayaLibre2.className + " carousel-p center"}>Starting price from: 123$</p>
        <span className="center carousel-btns">
          <Buttonsm name="Book" textcolor="white" color="rgba(136, 107, 107, 1)" id="btn-sm-wh" />
          <Buttonsm
            name="&nbsp;About"
            textcolor="black"
            color="rgba(189, 202, 190, 1)"
            id="btn-sm-wh"
          />
          <Button
            id="btn-big-wh"
            btnid=""
            color="rgba(189, 202, 190, 1)"
            name="&nbsp;About"
            animation="end"
            size={130}
            maxSize={150}
            txtcolor="black"
          />
          <Button
            id="btn-big-wh"
            btnid=""
            color="rgba(189, 202, 190, 1)"
            name="&nbsp;&nbsp;Book"
            animation="end"
            size={130}
            maxSize={150}
            txtcolor="black"
          />
        </span>
      </div>
    </div>
  );
}
