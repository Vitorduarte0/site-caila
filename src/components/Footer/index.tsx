import { CustomButton } from "../../components/Button";
import * as S from "./styled";

import { BsInstagram, FaFacebookF, ImWhatsapp } from 'react-icons/all'

import Logo from "../../assets/title.png";
import { useNavigate } from "react-router-dom";
import { goToAbout } from "../../router/coordinator";

export const Footer = () => {
    const navigate = useNavigate()

    const handleAbout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        goToAbout(navigate)
    }
   
    return (
        <S.Footer>

            <S.Figure >
                <S.Img src={Logo} alt="Logo" />
            </S.Figure>

            <S.ContainerSection>
                <S.DivMenu>
                    <section>
                        <h3>Menu</h3>

                        <S.Ul>
                            <li>
                                <S.Ancora href="">Serviços</S.Ancora>
                            </li>
                            <li>
                                <S.Ancora href="#" onClick={ handleAbout}>
                                    Sobre
                                </S.Ancora>
                            </li>
                            <li>
                                <S.Ancora href="">
                                    Contate-me
                                </S.Ancora>
                            </li>
                            <li>
                                <S.Ancora 
                                    href="https://yg53ddlgxmr.typeform.com/to/cmlJCNSw"
                                    target="_blank"
                                    >
                                    Ajude-nos a melhorar
                                </S.Ancora>
                            </li>
                        </S.Ul>
                    </section>

                    <section>

                        <h3>O que eu faço</h3>

                        <S.Ul>
                            <li>
                                <p>Designer sobrancelhas</p>
                            </li>
                            <li>
                                <p>Aplicação com henna</p>
                            </li>
                            <li>
                                <p>depilação de buço na cera.</p>
                            </li>
                        </S.Ul>

                    </section>

                    <S.SectionSocial>
                        <h3>Social</h3>

                        <S.UlRow>

                            <li>
                                <S.Ancora
                                    href="https://www.facebook.com/caila.silva.108"
                                    target="_blank"
                                > <FaFacebookF />
                                </S.Ancora>

                            </li>
                            <li>
                                <S.Ancora
                                    href="https://www.instagram.com/cailla_design/"
                                    target="_blank"
                                >
                                    < BsInstagram />
                                </S.Ancora>
                            </li>
                            <li>
                                <S.Ancora 
                                    href="https://contate.me/caila_design"
                                    target="_blank"
                                > 
                                < ImWhatsapp />
                                 </S.Ancora>
                            </li>

                        </S.UlRow>

                    </S.SectionSocial>
                </S.DivMenu>

                <section>
                    <S.UlColumns>
                        <S.Li>

                            © 2023, caila-designer, pj. Todos direitos reservados.

                            R. Das palmeiras - Campo Alegre de Lourdes - BA, Brasil
                            
                        </S.Li>

                        <li>
                            <CustomButton backgroundColor={"#fff"} width="14em" height={"4em"}>
                                <a
                                    style={{ textDecoration: "none", color: "#4fc700" }}
                                    href="https://contate.me/caila_design"
                                    target="_blank"
                                >
                                    Agendar Horário
                                </a>
                            </CustomButton>
                        </li>

                    </S.UlColumns>
                </section>

            </S.ContainerSection>
        </S.Footer>
    );
};
