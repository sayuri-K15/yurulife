import React, {useState} from "react"
import Carousel from 'react-bootstrap/Carousel'

import relax from "../../image/relax.jpg"
import vesitable from "../../image/vesitable.jpg"
import aroma02 from "../../image/aroma02.jpg"


const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const slideImage = {
    objectFit: "cover",
    display: "block",
    width: "100",
  }

  return (
    <Carousel  onSelect={handleSelect} interval="3000" fade="true">
      <Carousel.Item>
        <img
          className={slideImage}
          src={relax}
          alt="First slide"
          width="700"
          height="400"
        />
        <Carousel.Caption>
          <h3>週末は海でリラックスタイム♪</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={slideImage}
          src={aroma02}
          alt="Second slide"
          width="700"
          height="400"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={slideImage}
          src={vesitable}
          alt="Third slide"
          width="700"
          height="400"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;