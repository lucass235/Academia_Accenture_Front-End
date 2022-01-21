import "./App.css";
import * as S from "./components/styles";
import { useState } from "react";
import { TiSocialInstagram } from "react-icons/ti";

function App() {
  const [corBotao, setCorBotao] = useState(true);
  return (
    <div className={"box"}>
      <S.Box>
        <S.Title>Título</S.Title>
        <S.SubTitle>Subtítulo</S.SubTitle>
        <S.Button color={"yellow"}>OK</S.Button>
        <S.Button color={"magenta"}>Cancelar </S.Button>
        <S.ButtonAlt color={"grey"}>Botão Alternativo</S.ButtonAlt>
        <TiSocialInstagram size={80}> </TiSocialInstagram>
        <S.IconLens> </S.IconLens>
      </S.Box>
    </div>
  );
}

export default App;
