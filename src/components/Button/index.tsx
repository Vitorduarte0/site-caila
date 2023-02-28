import React, { ReactNode } from "react";
import * as S from "./styled";

interface Props {
  text?: string;
  width?: string;
  border?: string;
  children?: ReactNode;
  height?: string;
  onClick?: () => void;
}

export const CustomButton: React.FC<Props> = ({
  text,
  onClick,
  children,
  width,
  border,
  height,
}) => {
  return (
    <S.ButtonModified
      height={height}
      width={width}
      border={border}
      onClick={onClick}
    >
      {text}
      <span>{children}</span>
    </S.ButtonModified>
  );
};
