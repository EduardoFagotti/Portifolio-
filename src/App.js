import Github from "./components/Github/Github";
import Header from "./components/Header/index";
import Certificados from "./components/Certificados/index";
import Menu from "./components/Menu";
import GlobalStyle from "./styles";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Banner from "./components/Banner";
function App() {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <Sobre />
      {/* <Github /> */}
      <Certificados />
      <Projetos />
    </>
  );
}

export default App;
