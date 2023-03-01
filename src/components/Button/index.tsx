import React, { ReactNode } from "react";
import * as S from "./styled";

interface Props {
  text?: string;
  width?: string;
  border?: string;
  children?: ReactNode;
  height?: string;
  onClick?: () => void;
  customColor?: string;
  background?: string;
  variant?: MuiVariant
}

export enum MuiVariant {
  text= 'text',
  outlined='outlined',
  contained='contained'
}

export const CustomButton: React.FC<Props> = ({
  text,
  onClick,
  children,
  width,
  border,
  height,
  customColor,
  background,
  variant
}) => {
  return (
    <S.ButtonModified
      height={height}
      width={width}
      border={border}
      onClick={onClick}
      customColor={customColor}
      background={background}
      variant={variant}
    >
      {text}
      <span>{children}</span>
    </S.ButtonModified>
  );
};
