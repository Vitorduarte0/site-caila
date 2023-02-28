import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  height: 16vh;
  background: linear-gradient(to bottom, #f2b6c3, #ffd0d6, #ffffff);
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  margin: .3%;
  width: 100%;
`;

export const Img = styled.img`
  width: 95px;
  border-radius: 50%;
  border: 2px solid #fff;

 
  @media screen and (max-width: 375px) {
    width: 90px;
  }
`;


