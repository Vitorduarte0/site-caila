import styled from "styled-components";
import { primary } from "../../constants/color";


export const Footer = styled.footer`
  width: 100%;
  height: 95vh;
  background: linear-gradient(to bottom,hsl(350, 100%, 95%),#000,#000, #000, #000, #000 );
  -webkit-font-smoothing: antialiased;
  color: ${primary};
`


export const ContainerSection = styled.section`
   display: flex;
   flex-direction: column;
`

export const DivMenu = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 100px;
    margin: 3%;
    

    @media screen and (max-width: 600px) {
        margin-top: 5%;
       
        grid-template-columns: 40% 60%;  
  }
`


export const Figure = styled.figure`
    width: 130px;
    padding: 5%; 
`

export const Img = styled.img`
    width: 130px;
    border-radius: 100%;
    image-rendering: auto;
`

export const Ancora = styled.a`
    text-decoration: none;
    color: #4fc700;
    font-size: medium;
    

    &:hover, &:focus {
        color: #fff
    }
`

export const Ul = styled.ul`
    list-style-type: none;

    li {
        margin-top: 3%;
    }

    p {
        color: #fff
    }
`


export const UlRow = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    width: 100px;
    margin-top: 8%;

    p {
        color: #fff
    }
`

export const UlColumns = styled.div`
    list-style-type: none;
    width: 95%;
    display: grid;
    grid-template-columns: 80% 12%;
    align-items: center;
    margin-top: 4%;
    padding-left: 1%;
    
    @media screen and (max-width: 920px) {
        width: 100%;
        height: 10em;
        margin-top: 6%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
  }
`


export const Li = styled.li`
    font-family: Arial, sans-serif; 
    font-size: 16px; 
    line-height: 1.5; 
    color: #fff; 
`

export const SectionSocial = styled.div`

    @media screen and (max-width: 500px) {
        padding-top: 8%;
  }
`