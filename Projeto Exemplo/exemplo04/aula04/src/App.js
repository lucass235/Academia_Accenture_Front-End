import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import Card from "./components/Card";

function App() {
  /*
      ✅ LISTA DE ASSUNTOS:
      ======================
      -> O que é o styled-components? ✅
      -> Como criar um styled-component ✅
      -> Uso de props em componentes styled ✅
      -> Criando componentes à partir de outros ✅
      -> Estilizando componentes de outras bibliotecas ✅
      -> Seletores ✅
      -> Ícones com react-icons ✅
      -> Fontes com google-fonts ✅
      -> <GlobalStyle/> e createGlobalStyle ✅
      -> Utilizando temas com <ThemeProvider/> ✅
      -> Mixins com {css} do styled-components ✅
  */

  const message = "Olá Teste";

  const themeLight = {
    primary: "white",
    secondary: "black",
    highlight: "pink",
    width: "4000px",
  };

  const themeDark = {
    primary: "black",
    secondary: "white",
    highlight: "pink",
    width: "4000px",
  };

  const [theme, setTheme] = useState(themeLight);

  const changeTheme = () => {
    // Se o tema atual for o themeLight
    if (theme.primary === "white") {
      setTheme(themeDark);
    } else {
      setTheme(themeLight);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Card onChangeTheme={changeTheme} message={message} />
      </ThemeProvider>
    </>
  );
}

export default App;
