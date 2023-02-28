import { CustomButton } from "../../components/Button";
import * as S from "./styled";

export const Home = () => {
  return (
    <main>
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
            Agendar Horário
          </CustomButton>
        </S.ContentSection>
      </S.ContainerMain>

      <S.SectionDescripition>
        <h1>Olá sou caila rocha :(</h1>

        <p>
          Bem-vindo(a) ao meu mundo de designer de sobrancelhas! Com anos de
          experiência e técnicas avançadas, meu objetivo é realçar a beleza
          natural de cada pessoa, oferecendo serviços de alta qualidade em um
          ambiente acolhedor e confortável.
        </p>
        <br />

        <p>
          Estou sempre atualizada com as últimas tendências e invisto em
          tecnologia de ponta e produtos de alta qualidade para garantir o
          melhor resultado possível. Se você precisa de um retoque rápido ou de
          uma transformação completa, entre em contato comigo hoje mesmo e
          deixe-me ajudar você a alcançar o look perfeito para suas
          sobrancelhas.
        </p>
      </S.SectionDescripition>
    </main>
  );
};
