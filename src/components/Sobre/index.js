import React from "react";
import { ContainerSobre, ContainerIcons } from "./styles";
import Img1 from "../../assets/img/Captura.PNG";
import Img2 from "../../assets/icons/linkedin.png";
import Img3 from "../../assets/icons/insta.webp";
import Img4 from "../../assets/icons/face.webp";
import Img5 from "../../assets/icons/watts.png";
import Img6 from "../../assets/icons/github.png";
export default function Sobre() {
  return (
    <ContainerSobre>
      <div className="divFoto">
        <img src="https://github.com/eduardofagotti.png"></img>
      </div>

      <section>
        <div>
          <h1>Um pouco sobre mim</h1>
          <p>
            Sou estudante do curso de Análise e Desenvolvimento de Sistemas
            oferecido pela Universidade Paranaense (UNIPAR), no campus
            localizado em Cianorte/PR.
          </p>
          <p>
            Acredito que para uma boa formação, são necessários estudos externos
            ao âmbito universitário. Por tal motivo, realizei os seguintes
            cursos complementares: Algoritmo, HTML5, CSS3 e JavaScript. Ademais,
            iniciei os estudos em React.Js.
          </p>
          <p>
            Portanto, a fim de me tornar um profissional extremamente
            competente, procuro me desenvolver profissionalmente cada dia mais.
          </p>
          <p>
            Já trabalhei como assistente administrativo durante 01 (um) ano e 10
            (dez) meses. Entretanto, ainda não tive minha primeira experiência
            na área de análise e desenvolvimento de sistemas, oportunidade que
            aqui busco experienciar.
          </p>
        </div>
      </section>
      <ContainerIcons>
        <section>
          <div>
            <h4>Redes sociais</h4>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/eduardo-fagotti-34876b203/"
                >
                  <img src={Img2}></img>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/eduardo_fagotti/"
                >
                  <img src={Img3}></img>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100007788377695"
                >
                  <img src={Img4}></img>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5544999256594"
                >
                  <img src={Img5}></img>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/EduardoFagotti">
                  <img src={Img6}></img>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </ContainerIcons>
    </ContainerSobre>
  );
}
