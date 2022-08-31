import React from "react";
import styled from "styled-components";

export const Bottom = (props) => {
  return (
    <BottomContainer>
      <LeftImageContainer>
        <img src={props.BottomLeftImage}></img>
      </LeftImageContainer>
      <MiddleTextContainer>
        <h2>ABOUT OUR FURNITURE</h2>
        <p>Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that best
          express your interest and what inspires you. Find the furniture pieces you
          need, from traditional to contemporary styles or anything in between.
          Product specialist are available to help you create your dream space.
        </p>
      </MiddleTextContainer>
      <RightImageContainer>
        <img src={props.BottomRightImage}></img>
      </RightImageContainer>
    </BottomContainer>
  );
}
const BottomContainer = styled.div`
  display: grid;
  grid-template-columns: .8fr 1.1fr .8fr;
  grid-template-rows: 100%;  
`

const LeftImageContainer = styled.div`
  img{
    width:100%;
    height: 100%;
  }
`
const MiddleTextContainer = styled.div`
  padding: 10%;
  h2{
    letter-spacing: .5vh;
    margin-bottom: 2vh;
    font-size: 1.4vw;
  }
  p{
    font-size: 1.02vw;
    font-weight: 500;
    color: #A7A7A7;
    line-height: 120%;
  }
`
const RightImageContainer = styled.div`
  img{
    width:100%;
    height: 100%;
  }
`