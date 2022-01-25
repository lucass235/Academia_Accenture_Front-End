import { TiSocialInstagram } from "react-icons/ti";
import * as S from "./styles";

function Card({ onChangeTheme, message }) {
  return (
    <S.Box>
      <S.Title> {message} </S.Title>
      <S.Subtitle> Aula 04 - Academia front-end </S.Subtitle>
      <S.EmptyButton id={"change-theme-btn"} onClick={onChangeTheme}>
        <S.LightDarkIcon />
      </S.EmptyButton>
      <S.Button color={"magenta"}> Cancelar </S.Button>
      <S.ButtonAlt color={"grey"}> Botão Alternativo </S.ButtonAlt>
      <TiSocialInstagram size={80} />
      <S.IconLens />
    </S.Box>
  );
}

export default Card;
