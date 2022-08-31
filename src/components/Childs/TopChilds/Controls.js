import React from "react";
import styled from "styled-components";
import iconAngleLeft from '../../../images/icon-angle-left.svg';
import iconAngleRight from '../../../images/icon-angle-right.svg';

export const Controls = (props) => {
  return(
    <ControlsContainer>
      <ControlButton onClick={props.previous}>
        <img src={iconAngleLeft}></img>
      </ControlButton>
      <ControlButton onClick={props.next}>
        <img src={iconAngleRight}></img>
      </ControlButton>
    </ControlsContainer>
  );
};

const ControlsContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 29.7%;
  z-index: 99999;
`
const ControlButton = styled.button`
  
  width: 10vh;
  height: 10vh;
  border: 0;
  background-color: black;
  cursor: pointer;
  img{
    transform: scale(1.2);
  }
`