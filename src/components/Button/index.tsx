import React, {ReactNode}  from "react";
import * as S from './styled';

interface Props {
    text?: string;
    width?: string;
    border?: string
    children?: ReactNode;
    onClick: () => void;
}

export const CustomButton: React.FC<Props> = ({text, onClick, children, width, border}) => {

 return (
    <S.ButtonModified width={width} border={border} onClick={onClick}>
          {text}
          <span>
            {children}
          </span>
    </S.ButtonModified>
 )
}