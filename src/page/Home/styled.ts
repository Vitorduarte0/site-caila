import styled from "styled-components";

import Img1 from "../../assets/foto1.jpg";
import Img3 from "../../assets/foto3.jpg";

export const ContainerMain = styled.main`

    width: 100%;
    height: 66vh;
    background-image: url(${Img3});
    
    @media screen and (max-width: 769px) {
        width: 100%;
        height: 66vh;
        background-image: url(${Img1});
  }

`


export const ContentSection = styled.section`
   height: 30%;
   display: flex;
   padding: 2%;
   flex-direction: column;
   justify-content:space-around;
   margin-top: 15%;
   position: fixed;

   h1 {
     color: #fff;
     font-size: 1.35em;
   }

   p {
    color: #fff;
    font-size: 1.25em;
   }
`