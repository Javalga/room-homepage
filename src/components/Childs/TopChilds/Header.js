import React from "react"
import styled from "styled-components"

export const Header = (props) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={props.logo}></img>
      </LogoContainer>
      <ButtonContainer>
        <p>home</p>
      </ButtonContainer>
      <ButtonContainer>
        <p>shop</p>
      </ButtonContainer>
      <ButtonContainer>
        <p>about</p> 
      </ButtonContainer>
      <ButtonContainer>
        <p>contact</p>
      </ButtonContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  z-index: 99999;
  position: absolute;
  width: 35vw;
  height: 10vh;
  top: 3vh;
  left: 3vh;
  display: grid;
  grid-template-columns: 30% 17.50% 17.50% 17.50% 17.50%;
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 8vh;
  }
`
const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2vw;
  font-size: 700;
  color: white;
  cursor:pointer;
  &:hover{
    &:before{
      content: '';
      position: absolute;
      width: 70%;
      bottom: 10%;
      height: 3%;
      background-color: white;
    }
  }
`