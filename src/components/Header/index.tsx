import * as S from "./styled";

import logo from "../../assets/logo.png";
import { NavBar } from "../NavBar";

export const Header = () => {
  

  return (
    <S.ContainerHeader>
      <S.NavBar>
        <div>
          <S.Img src={logo} alt="Logo type to name caila" />
        </div>

        <NavBar />
      </S.NavBar>
    </S.ContainerHeader>
  );
};
