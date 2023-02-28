import styled from 'styled-components'

import { Button } from "@mui/material";
import { primary } from '../../constants/color';

export const ButtonModified = styled(Button)`
     && {
    background-color: #000;
    color: ${primary};
    border-radius: 20px;
    width: 13em;
    margin-right: 8px;

    &:hover {
      background-color: #fff;
      color: #000
    }
  }
`