import React from "react";
import styled from "styled-components";
import { Top } from './Childs/Top.js'
import { Bottom } from './Childs/Bottom.js'
import BottomLeftImage from '../images/image-about-dark.jpg'
import BottomRightImage from '../images/image-about-light.jpg'
import logo from '../images/logo.svg'
import iconArrow from '../images/icon-arrow.svg'
import SlideImg1 from '../images/desktop-image-hero-1.jpg'
import SlideImg2 from '../images/desktop-image-hero-2.jpg'
import SlideImg3 from '../images/desktop-image-hero-3.jpg'
import { useRef } from 'react';

export const ContentContainer = (props) => {
  const SlideshowContainerRef = useRef(null);

  const Images = [SlideImg1, SlideImg2, SlideImg3];

  console.log(Images);
  const next = () => {
    console.log('next');
    console.log(SlideshowContainerRef.current.offsetWidth);
    if (SlideshowContainerRef.current.children.length > 0) {
      const firstElement = SlideshowContainerRef.current.children[0]
      SlideshowContainerRef.current.style.transition = `500ms ease-in-out all`;
      SlideshowContainerRef.current.style.transform = `translateX(-${SlideshowContainerRef.current.offsetWidth}px)`;
      const firstGoLast = () => {
        SlideshowContainerRef.current.style.transition = `none`;
        SlideshowContainerRef.current.style.transform = `translateX(0)`;
        SlideshowContainerRef.current.appendChild(firstElement)
        SlideshowContainerRef.current.removeEventListener('transitionend', firstGoLast)
      }
      SlideshowContainerRef.current.addEventListener('transitionend', firstGoLast)
    }
  }

  const previous = () => {
    console.log('previous');
    if (SlideshowContainerRef.current.children.length > 0) {
      const index = SlideshowContainerRef.current.children.length - 1;
      const lastElement = SlideshowContainerRef.current.children[index]
      SlideshowContainerRef.current.insertBefore(lastElement, SlideshowContainerRef.current.firstChild)
      SlideshowContainerRef.current.style.transition = `none`;
      SlideshowContainerRef.current.style.transform = `translateX(-${SlideshowContainerRef.current.offsetWidth}px)`;

      setTimeout(()=>{
        SlideshowContainerRef.current.style.transition = `500ms ease-in-out all`;
        SlideshowContainerRef.current.style.transform = `translateX(0)`;
      },30)
    }
  }
  return (
    <GridContainer>
      <Top
        logo={logo}
        iconArrow={iconArrow}
        Images={Images}
        next={next}
        previous={previous}
        SlideshowContainerRef={SlideshowContainerRef}>
      </Top>
      <Bottom
        BottomLeftImage={BottomLeftImage}
        BottomRightImage={BottomRightImage}>
      </Bottom>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display:grid;
  grid-template-rows: 65% 35%;
`