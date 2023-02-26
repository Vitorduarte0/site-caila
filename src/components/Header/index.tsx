import * as S from './styled';

import logo from '../../assets/logo.png'
import { Button } from '@mui/material';
import { useState } from 'react';

export const Header = () => {
    const [informacoesVisiveis, setInformacoesVisiveis] = useState(false);

    return (
        <>
            <S.ContainerHeader>

                <S.NavBar>
                    <div >
                        <S.Img src={logo} alt="Logo type to name caila" />
                    </div>

                    <S.DivButton >
                        <Button variant='contained' color='secondary'>
                            <span>sobre</span>
                        </Button>

                        <Button variant='contained' color='secondary'>
                            <span>Serviços</span>
                        </Button>

                        <Button variant='contained' color='secondary'>
                            <span>contato</span>
                        </Button>
                    </S.DivButton>

                </S.NavBar>
            </S.ContainerHeader>
        </>
    )
}