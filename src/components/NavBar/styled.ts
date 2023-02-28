import styled from "styled-components";
import { primary } from "../../constants/color";


type MenuProps = {
    open?: boolean;
    visible?: boolean;
  };


export const DivButton = styled.div<MenuProps>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  justify-content: space-around;
  width: 32%;

  span {
    color: ${primary};
  }

   @media screen and (max-width: 990px) {
    width: 45%;
  }

`;


export const ContainerDivActive = styled.div`

   display: flex;
   flex-direction: column-reverse;
   width: 15rem;
   height: 52vh;
   margin-top: 38vh;
   margin-right: 2%;
   border-radius: 10%;


  background: linear-gradient(to bottom,  #f2b6c3, #ffff);


   @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DivButtonActive = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80% ;
    height: 90%;
    margin-left: 15%;
    margin-top: 4rem;
  
    span {
    color: ${primary};
  }
`