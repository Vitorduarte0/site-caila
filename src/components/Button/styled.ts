import styled from 'styled-components'

import { Button } from "@mui/material";
import { primary } from '../../constants/color';

type MenuProps = {
  width?: string | any;
  border?: string
};

export const ButtonModified = styled(Button)<MenuProps>`
     && {
    background-color: #fff;
    color: #000;
    border-radius: ${( { border }) => border ? border : '8px'} ;
    margin-right: 8px;
    width: ${({ width }) => width ? width : '18vw'};

    &:hover {
      background-color: #000;
      color: ${primary};
    }

    span {
      /* width: 0; */
      /* border: 1px solid green; */
      display: flex;
      align-items: center;
    }
  }
`