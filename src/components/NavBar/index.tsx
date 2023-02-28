import * as S from "./styled";

import { useState, useEffect } from "react";
import { CustomButton } from "../Button";
import { Humburger } from "../Humburger";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [openChange, setOpenChange] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleSubmit = () => {
    console.log('clicou')
  }

  useEffect(() => {
    const mediaOpen = window.matchMedia(`(${mediaQueryOpen})`);

    setOpenChange(mediaOpen.matches);

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setOpenChange(event.matches);
    };

    mediaOpen.addEventListener("change", handleMediaChange);

    return () => mediaOpen.removeEventListener("change", handleMediaChange);
  }, []);

  const mediaQueryOpen = "max-width: 769px ";

  useEffect(() => {
    const media = window.matchMedia(`(${mediaQuery})`);
    setMobile(media.matches);

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setMobile(event.matches);
    };

    media.addEventListener("change", handleMediaChange);

    return () => media.removeEventListener("change", handleMediaChange);
  }, []);

  const mediaQuery = "max-width: 768px";

  return (
    <>
      <Humburger
       open={open}
       mobile={mobile}
       handleToggleMenu={handleToggleMenu}
      />

      {
        <S.DivButton open={!openChange}>

          <CustomButton text='Home' onClick={handleSubmit} />

          <CustomButton text='Sobre' onClick={handleSubmit} />

          <CustomButton text='Serviços' onClick={handleSubmit} />

          <CustomButton text='Contato' onClick={handleSubmit} />

        </S.DivButton>
      }

      {open ? (
        <S.ContainerDivActive>
          <S.DivButtonActive>
            
          <CustomButton width={'13em'} border={'8px'} text='Home' onClick={handleSubmit} />

          <CustomButton width={'13em'} border={'8px'} text='Sobre' onClick={handleSubmit} />

          <CustomButton width={'13em'} border={'8px'} text='Serviços' onClick={handleSubmit} />

          <CustomButton width={'13em'} border={'8px'} text='Contato' onClick={handleSubmit} />
           
          </S.DivButtonActive>
        </S.ContainerDivActive>
      ) : null}
    </>
  );
};
