import React from "react";
import Banner from "../Banner";
import Menu from "../Menu/index";
import { HeaderContainer, Container } from "./styles";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Container>{/* <Menu /> */}</Container>
      </HeaderContainer>
      <Banner />
    </>
  );
}
