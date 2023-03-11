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

  const titleStr = {
    fontSize: "14px",
    width: "700"
  }

  const subTitle = {

  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval="3000" fade="true">
      <Carousel.Item>
        <img
          className={slideImage}
          src={relax}
          alt="First slide"
          width="700"
          height="400"
        />
        <Carousel.Caption>
          <h3 className={titleStr}>週末は海でリラックスタイム♪</h3>
          <p className={subTitle}>真っ赤な夕日とオレンジやピンクへ移り変わる美しい空の色を楽しめます。思わず写真に残したくなる景色と共にリラックスした...</p>
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
          <h3 className="w-100 fz-h5">ストレス社会を生き抜くあなたの味方。寝る前の一手間で心もデトックス...♩</h3>
          <p className={subTitle}>心身ともに調子を整え、ストレス社会を生き抜く女子達の強い味方“アロマ”。ただ、自宅でゆっくり時間のあるときに使うイメージが強いですよね。そんなアロマを外出中でも気軽に体感できる...</p>
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
        <h3 className={titleStr}>自家製の野菜をふんだんに使ったオーガニックなサラダでデトックス！</h3>
          <p className={subTitle}>
          生野菜や自家製スプラウトなど40種類以上の有機・無農薬を中心とした食材やトッピングからなるサラダ...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;