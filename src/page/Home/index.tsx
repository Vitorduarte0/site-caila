import { CustomButton, MuiVariant } from "../../components/Button";
import * as S from "./styled";

export const Home = () => {
  return (
    <S.Container>
      <S.ContainerMain>
        <S.ContentSection>
          <h1>
            <strong>Designer de Sobrancelhas Profissional</strong>
          </h1>
          <p>
            <strong>
              Transforme o visual do seu rosto com sobrancelhas perfeitas
            </strong>
          </p>
          <CustomButton width="14em" height={"4em"}>
            <a
              style={{ textDecoration: "none", color: "#4fc700" }}
              href="https://contate.me/caila_design"
              target="_blank"
            >
              Agendar Horário
            </a>
          </CustomButton>
        </S.ContentSection>
      </S.ContainerMain>

      <S.SectionDescripition>
        <h1>Olá sou caila rocha :)</h1>

        <p>
          Bem-vindo(a) ao meu mundo de designer de sobrancelhas! Com quase um
          ano de experiência e usando técnicas avançadas, meu objetivo é realçar
          a beleza natural de cada pessoa, oferecendo serviços de alta qualidade
          em um ambiente acolhedor e cada vez mais confortável.
        </p>

        <p>
          Estou sempre atualizada com as últimas tendências e invisto em
          tecnologia de ponta e produtos de alta qualidade para garantir o
          melhor resultado possível. Se você precisa de um retoque rápido ou de
          uma transformação completa, entre em contato comigo hoje mesmo e
          deixe-me ajudar você a alcançar o look perfeito para suas
          sobrancelhas.
        </p>
      </S.SectionDescripition>

      <S.Footer>
        <section>
          <h1>Contato-me:</h1>
          <ul>
            <li>
              <CustomButton background="#25d366" width="10em" height={"3em"}>
                <a
                  style={{ textDecoration: "none", color: "#000" }}
                  href="https://contate.me/caila_design"
                  target="_blank"
                >
                  whatsapp
                </a>
              </CustomButton>
            </li>

            <li>
              <CustomButton variant={MuiVariant.outlined} background="#25d366" width="10em" height={"3em"} >
                <a
                  style={{ textDecoration: "none", color: "#000" }}
                  href="https://contate.me/caila_design"
                  target="_blank"
                >
                  instagran
                </a>
              </CustomButton>
            </li>
          </ul>
        </section>
      </S.Footer>
    </S.Container>
  );
};
