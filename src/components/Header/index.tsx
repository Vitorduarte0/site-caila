import * as S from "./styled";


import { NavBar } from "../NavBar";

import Logo from "../../assets/title.png";

export const Header = () => {
  

  return (
    <S.ContainerHeader>
      <S.NavBar>
        <div>
          <S.Img src={Logo} alt="Logo type to name caila" />
        </div>

        <NavBar />
      </S.NavBar>
    </S.ContainerHeader>
  );
};
