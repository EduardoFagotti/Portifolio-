import React from "react";
import { Container } from "./styles";
import Img1 from "../../assets/certificados/ALGORITMO.PNG";
import Img2 from "../../assets/certificados/Conecta.PNG";
import Img3 from "../../assets/certificados/HTML-CSS-M1.PNG";
import Img4 from "../../assets/certificados/Fundamentar.PNG";
import Img5 from "../../assets/certificados/linux.PNG";
import Img6 from "../../assets/certificados/Coodesh-ReactJs.PNG";
import Img7 from "../../assets/certificados/Capturar.PNG";
export default function Certificados() {
  return (
    <Container>
      <section>
        <h1>Certificações</h1>
        <ul>
          <li>
            <h2>ALGORITMO</h2>
            <img src={Img1}></img>
          </li>
          <li>
            <h2>Conectar</h2>
            <img src={Img2}></img>
          </li>
          <li>
            <h2>HTML e CSS Modulo 1</h2>
            <img src={Img3}></img>
          </li>
          <li>
            <h2>Fundamentar</h2>
            <img src={Img4}></img>
          </li>
        </ul>
        <ul>
          <li>
            <h2>Fundamentos de Linux</h2>
            <img src={Img5}></img>
          </li>
          <li>
            <h2>Teste de ReactJs</h2>
            <img src={Img6}></img>
          </li>
          <li>
            <h2>Especializar</h2>
            <img src={Img7}></img>
          </li>
        </ul>
      </section>
    </Container>
  );
}
