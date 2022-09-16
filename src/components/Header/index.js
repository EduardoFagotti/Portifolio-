import React from "react";
import Banner from "../Banner";

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
