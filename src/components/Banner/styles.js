import styled from "styled-components";
import imgBanner from "../../assets/img/not.jpg";

export const BannerContainer = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${imgBanner});
  background-position: center;
  background-size: center;
  text-align: center;
  position: relative;
  background-repeat: no-repeat;

  h2 {
    text-transform: uppercase;
    font-size: 1.2rem;
    color: white;
    margin: 0;
    margin-bottom: 1rem;
  }

  h1 {
    text-transform: uppercase;
    font-size: 2.8rem;
    color: cyan;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: white;
    margin: 0;
    margin-bottom: 1rem;
  }

  button {
    min-width: 150px;
    border: solid 2px cyan;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: transparent;
    border-radius: 42px;
    font-size: 1rem;
    padding: 10px 15px;
    margin: 0 auto;
    margin-bottom: 1rem;
    margin-top: 2rem;
    cursor: pointer;
    &:hover {
      background-color: cyan;
      color: black;
      transition-duration: 0.3s;
    }
  }
`;
export const Container = styled.nav`
  padding-top: 25px;
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 20px;
    }
    img {
      width: 60px;
      height: 60px;
      border-radius: 10%;
      margin-bottom: -50px;
    }
    .js {
      border-radius: 100%;
      width: 55px;
      height: 55px;
    }
  }
`;
