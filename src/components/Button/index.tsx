import React  from "react";
import * as S from './styled';

interface Props {
    text: string,
    onClick: () => void;
}

export const CustomButton: React.FC<Props> = ({text, onClick}) => {

 return (
    <S.ButtonModified onClick={onClick}>
          {text}
    </S.ButtonModified>
 )
}