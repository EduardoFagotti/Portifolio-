import React from "react";
import { Container } from "./styles";
import { BannerContainer } from "./styles";
import { MenuCont } from "./styles";
import Img1 from "../../assets/icons/HTML.webp";
import Img2 from "../../assets/icons/CSS.png";
import Img3 from "../../assets/icons/js.png";
import Img4 from "../../assets/icons/react.png";
import Menu from "../Menu";
export default function Banner() {
  return (
    <BannerContainer>
      <MenuCont>
        <Menu />
      </MenuCont>
      <div>
        <h2>HI I'M</h2>
        <h1>front end developer</h1>
        <p>Eduardo Fagotti Dos Santos</p>
        {/* <button type="button">Download CV</button> */}
        <Container>
          <ul>
            <li>
              <img src={Img1}></img>
            </li>
            <li>
              <img src={Img2}></img>
            </li>
            <li>
              <img className="js" src={Img3}></img>
            </li>
            <li>
              <img src={Img4}></img>
            </li>
          </ul>
        </Container>
      </div>
    </BannerContainer>
  );
}
