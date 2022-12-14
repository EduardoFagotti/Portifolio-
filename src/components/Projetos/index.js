import React from "react";
import { Container, ContainerIcons } from "./styles";
import Img1 from "../../assets/projetos/mario.PNG";
import Img2 from "../../assets/projetos/Github-usuarios.PNG";
import Img3 from "../../assets/projetos/Cep.PNG";
import Img4 from "../../assets/projetos/calc.jpg";
import Img5 from "../../assets/projetos/NetflixClone.PNG";
import Img6 from "../../assets/projetos/contador.PNG";
import Imghtml from "../../assets/icons/HTML.webp";
import Imgcss from "../../assets/icons/CSS.png";
import Imgjs from "../../assets/icons/js.png";
import ImgReact from "../../assets/icons/react.png";
export default function Projetos() {
  return (
    <Container>
      <h1>Projetos</h1>
      <ul>
        <li>
          <h2>Countdown(contador regressivo) </h2>
          <a target="_blank" href="https://playful-moxie-d089f4.netlify.app">
            <img src={Img6}></img>
          </a>
          <ContainerIcons>
            <h4>Tecnologias utilizadas</h4>
            <ul>
              <li>
                <img src={Imghtml}></img>
              </li>
              <li>
                <img src={Imgcss}></img>
              </li>
              <li>
                <img className="js" src={Imgjs}></img>
              </li>
              <li>
                <img src={ImgReact}></img>
              </li>
            </ul>
          </ContainerIcons>
        </li>
        <li>
          <h2>Netflix-clone </h2>
          <a target="_blank" href=" https://lnkd.in/dTsBGeTv">
            <img src={Img5}></img>
          </a>
          <ContainerIcons>
            <h4>Tecnologias utilizadas</h4>
            <ul>
              <li>
                <img src={Imghtml}></img>
              </li>
              <li>
                <img src={Imgcss}></img>
              </li>
              <li>
                <img className="js" src={Imgjs}></img>
              </li>
              <li>
                <img src={ImgReact}></img>
              </li>
            </ul>
          </ContainerIcons>
        </li>
        <li>
          <h2>Super mario jump</h2>
          <a target="_blank" href="https://dulcet-dasik-952425.netlify.app/">
            <img src={Img1}></img>
          </a>

          <ContainerIcons>
            <h4>Tecnologias utilizadas</h4>
            <ul>
              <li>
                <img src={Imghtml}></img>
              </li>
              <li>
                <img src={Imgcss}></img>
              </li>
              <li>
                <img className="js" src={Imgjs}></img>
              </li>
            </ul>
          </ContainerIcons>
        </li>
        <li>
          <h2>Pesquisa de usuario Github</h2>
          <a
            target="_blank"
            href="https://focused-goldwasser-7d64c1.netlify.app/"
          >
            <img src={Img2}></img>
          </a>

          <ContainerIcons>
            <h4>Tecnologias utilizadas</h4>
            <ul>
              <li>
                <img src={Imghtml}></img>
              </li>
              <li>
                <img src={Imgcss}></img>
              </li>
              <li>
                <img className="js" src={Imgjs}></img>
              </li>
              <li>
                <img src={ImgReact}></img>
              </li>
            </ul>
          </ContainerIcons>
        </li>
        <li>
          <h2>Buscador de CEP</h2>
          <a target="_blank" href="https://hopeful-wright-4b246f.netlify.app/">
            <img src={Img3}></img>
          </a>
          <ContainerIcons>
            <h4>Tecnologias utilizadas</h4>
            <ul>
              <li>
                <img src={Imghtml}></img>
              </li>
              <li>
                <img src={Imgcss}></img>
              </li>
              <li>
                <img className="js" src={Imgjs}></img>
              </li>
              <li>
                <img src={ImgReact}></img>
              </li>
            </ul>
          </ContainerIcons>
        </li>
        <li>
          <h2>Calculadora de juros anuais </h2>
          <a
            target="_blank"
            href="https://calculadora-de-juros-anuais.netlify.app"
          >
            <img src={Img4}></img>
          </a>
          <ContainerIcons>
            <h4>Tecnologias utilizadas</h4>
            <ul>
              <li>
                <img src={Imghtml}></img>
              </li>
              <li>
                <img src={Imgcss}></img>
              </li>
              <li>
                <img className="js" src={Imgjs}></img>
              </li>
            </ul>
          </ContainerIcons>
        </li>
      </ul>
      <h3>EM BREVE MAIS PROJETOS...!</h3>
    </Container>
  );
}
