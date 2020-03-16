import React, { Component } from 'react'
import styled from "styled-components";
import relax from "../image/relax.jpg"

 const Hero = () => {
    return (
      <HeroContainer className="hero-container">
        <HeroImg src={relax} />
      </HeroContainer>
    )
}

export default Hero;

const HeroContainer = styled.div`
  background: #f2f2f2;
  margin-bottom: 20px;

`

const HeroImg = styled.img`
  width: 700px;
  height: 400px;
`