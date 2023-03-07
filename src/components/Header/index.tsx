import * as S from "./styled";


import { NavBar } from "../NavBar";

import Logo from "../../assets/title.png";

export const Header = () => {
  

  return (
    <S.ContainerHeader>
      <S.NavBar>
        <S.Figure>
          <S.Img src={Logo} alt="Logo type to name caila" />
        </S.Figure>

        <NavBar />
      </S.NavBar>
    </S.ContainerHeader>
  );
};
