import styled from "styled-components";
import { primary } from "../../constants/color";

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
  width: 18%;
  height: 18%;
  border-radius: 50%;
  border: 2px solid #fff;

  @media screen and (max-width: 700px) {
    width: 26%;
    height: 26%;
  }

  @media screen and (max-width: 600px) {
    width: 34%;
    height: 34%;
  }

  @media screen and (max-width: 520px) {
    width: 40%;
    height: 40%;
  }

  @media screen and (max-width: 460px) {
    width: 60%;
    height: 60%;
  }

  @media screen and (max-width: 390) {
    width: 75%;
    height: 75%;
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 32%;

  span {
    color: ${primary};
  }

  @media screen and (max-width: 900px) {
    width: 60%;
  }

  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;
