import { Carousel } from "react-responsive-carousel";
import { HERO_IMAGES } from "../consts/consts";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-50 to-transparent bottom-0 z-20"/>
      <Carousel
        autoplay
        inifiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {HERO_IMAGES.map((item) => (
          <div key={item.id}>
            <img loading="lazy" src={item.imgSrc} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default Banner;
