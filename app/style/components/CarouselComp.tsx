import "../ui/css/carousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRef } from "react";
import Image from "next/image";
import catImage from "../../../public/catTransparent.png";

export function CarouselComp() {
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
    <div className="carousel-body">
      <div className="carousel-title center">
        <a href="#slide1" className="btn btn-circle">
          Hello1
        </a>
        <a href="#slide2" className="btn btn-circle">
          Hello2
        </a>
      </div>
      <div className="carousel-main">
        <div className="carousel-left" onClick={handlePrev}></div>
        <div className="carousel-right" onClick={handleNext}></div>
        <div className="carousel-wrapper">
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
      <div className="carousel-text center"></div>
    </div>
  );
}
