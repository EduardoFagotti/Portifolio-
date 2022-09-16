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
            Sou estudante em Análise e Desenvolvimento de Sistemas na
            Universidade Paranaense Unipar em Cianorte-PR, mas acredito que para
            uma boa formação e preciso estudar muito além da faculdade por tal
            motivo realizei os cursos de algoritmo, HTML5, CSS3, JavaScript e
            iniciei os estudos em React.Js para me tornar um profissional
            extremamente competente, procuro me desenvolver profissionalmente
            cada dia mais. Estou a procura da minha primeira oportunidade na
            área de desenvolvimento, porem já trabalhei como assistente
            administrativo durante um ano e dez meses.
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
