import React from "react";

import * as S from "./styled";

import { Button } from "@mui/material";
import FormatListBulletedSharpIcon from "@mui/icons-material/FormatListBulletedSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

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
          <Button color="secondary" onClick={handleToggleMenu}>
            <FormatListBulletedSharpIcon color="secondary" fontSize="large" />
          </Button>
        ) : (
          <Button color="secondary" onClick={handleToggleMenu}>
            <CloseSharpIcon color="secondary" fontSize="large" />
          </Button>
        )}
      </S.HamburgerButton>
    </>
  );
};
