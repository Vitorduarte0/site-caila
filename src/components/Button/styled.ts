import styled from 'styled-components'

import { Button } from "@mui/material";
import { primary } from '../../constants/color';

type MenuProps = {
  width?: string | any;
  height?: string | any;
  border?: string;
  background?: string;
  customColor?: string;
  backgroundColor?: string
};

export const ButtonModified = styled(Button)<MenuProps>`
     && {
    background-color: ${( { backgroundColor }) => backgroundColor ? backgroundColor : ''};
    color: #000;
    border-radius: ${( { border }) => border ? border : '8px'} ;
    margin-right: 8px;
    width: ${({ width }) => width ? width : '18vw'};
    height: ${({ height }) => height ? height : ''};
    
    &:hover, &:focus {
      background-color: ${( {background}) => background ? background : '#000'};
      color: ${( {customColor}) => customColor? customColor : `${primary}`};
    }

    span {
      display: flex;
      align-items: center;
    }
  }
`