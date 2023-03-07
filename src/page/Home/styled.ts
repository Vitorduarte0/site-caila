import styled, { keyframes } from "styled-components";

import Img1 from "../../assets/foto1.jpg";
import Img3 from "../../assets/foto3.jpg";



const slideSection = keyframes`
    0% {
        transform: translateY(-100%);
    }
    75% {
        transform: translate(0);
    }
    75% {
        transform: translateY(5%);
    }
    100% {
        transform: translate(0);
    }
`

export const Container = styled.main`
    transition: all 0.3s ease;
    animation: ${slideSection} 1.80s ease;

`

export const ContainerMain = styled.main`

    width: 100%;
    height: calc(60vh );
    background-image: url(${Img3});
    
    @media screen and (max-width: 769px) {
        width: 100%;
        height: calc(60vh - 50px );
        background-image: url(${Img1});
  }

`


export const ContentSection = styled.section`
   height: 70%;
   display: flex;
   padding: 2%;
   flex-direction: column;
   justify-content:space-evenly;

   h1 {
     color: #fff;
     font-size: 1.35em;
   }

   p {
    color: #fff;
    font-size: 1.10em;
   }

   @media screen and (max-width: 375px) {
    height: 90%;
    display: flex;
    padding: 2%;
    padding-top: 6em;
    flex-direction: column;
    justify-content:space-evenly;
  }

`


export const SectionDescripition = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  width: 100%;
  height: 34em;
  background-color: hsl(350, 100%, 95%);

  h1{
    color: #000
  }

  p{
  
    font-family: Arial, sans-serif; 
    font-size: 18px; 
    line-height: 1.5; 
    color: #333; 
    text-align: justify;
    margin: 2%;
  }
`
