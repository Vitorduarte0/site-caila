import React from "react";

import * as S from "./styled";

import FormatListBulletedSharpIcon from "@mui/icons-material/FormatListBulletedSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { CustomButton } from "../Button";

interface Props {
  mobile: boolean;
  open: boolean;
  handleToggleMenu: () => void;
}

export const Humburger: React.FC<Props> = ({open, mobile, handleToggleMenu }) => {
  return (
    <>
      <S.HamburgerButton visible={mobile} onClick={handleToggleMenu}>
        {!open ? (
          <CustomButton backgroundColor="#fff" width="4em" border={'12em'} onClick={handleToggleMenu}>
            <FormatListBulletedSharpIcon color="primary" fontSize="large" />
          </CustomButton>
        ) : (
          <CustomButton backgroundColor="#fff" width="4em" border={'12em'} onClick={handleToggleMenu}>
          <CloseSharpIcon color="primary" fontSize="large" />
        </CustomButton>
        )}
      </S.HamburgerButton>
    </>
  );
};
