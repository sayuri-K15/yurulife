import React from 'react'
import styled from "styled-components";
// import desert from "../image/desert.jpg"
import ControlledCarousel from "./hero/HeroSlide"

 const Hero = () => {
    return (
      <HeroContainer className="hero-container">
        {/* <HeroImg src={desert} /> */}
        <ControlledCarousel />
      </HeroContainer>
    )
}

export default Hero;

const HeroContainer = styled.div`
  background: #f2f2f2;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 700px;
  &:hover {
    opacity: 0.7;
    transition: 0.5s;
  }

`

// const HeroImg = styled.img`
//   height: 400px;
// `