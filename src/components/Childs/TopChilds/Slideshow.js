import styled from "styled-components";

export const Slideshow = (props) => {
  return (
    <SlideshowContainer ref={props.SlideshowContainerRef}>
      <Slide>
        <img src={props.Images[0]}></img>
      </Slide>
      <Slide>
        <img src={props.Images[1]}></img>
      </Slide>
      <Slide>
        <img src={props.Images[2]}></img>
      </Slide>
    </SlideshowContainer>
  );
}

const SlideshowContainer = styled.div`
  position: relative;
  display:flex;
  justify-content: flex-start;
  flex-direction: row;
`

const Slide = styled.div`
position: sticky;
z-index: 9;
height: 100%;
min-width: 100%;
transition: .3 ease all;
  img{
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
`