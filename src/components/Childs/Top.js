import React from "react";
import styled from "styled-components";
import { Header } from './TopChilds/Header.js';
import { Slideshow } from './TopChilds/Slideshow';
import { Controls } from './TopChilds/Controls';

export const Top = (props) => {

  return (
    <TopContainer>
      <Controls
      next={props.next}
      previous={props.previous}>
      </Controls>
      <Header
        logo={props.logo}>
      </Header>
      <Slideshow
      Images={props.Images}
      SlideshowContainerRef={props.SlideshowContainerRef}>
      </Slideshow>
      <TopRightContainer>
        <h1>Discover innovative ways to decorate</h1>
        <p>We provide unmatched quality, confort, and style for property
          owners across the country. Our experts combine farm and
          bunction in bringing your vision to life. Create a room in your
          own style with our collection and make your property a
          reflection of you and what you love.
        </p>
        <button>
          SHOP NOW
          <img src={props.iconArrow}></img>
        </button>

      </TopRightContainer>
    </TopContainer>
  )
}
const TopContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 100%;
  overflow: hidden;
`

const TopRightContainer = styled.div`
  position: static;
  padding: 20% 15%;
  z-index: 99;
  background-color: white;
  h1{
    font-size: 3vw;
    line-height: 5vh;
    font-weight: 600;
    margin-bottom: 6%;
  }
  p{
    font-size: 1.1vw;
    color:#A7A7A7;
    font-weight: 500;
    margin-bottom: 6%;
  }
  button{
    background-color: transparent;
    border: 0;
    width: 19vw;
    font-size: 1.2vw;
    letter-spacing: 2vh;
    color: #A7A7A7;
    display: flex;
    align-items: center;
    cursor: pointer;
    img{
      width: 3vw;
      height: 2vh;
      }
  }
`
