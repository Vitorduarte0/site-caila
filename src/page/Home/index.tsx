import { CustomButton } from "../../components/Button";
import * as S from "./styled";

export const Home = () => {
  return (
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
  );
};
