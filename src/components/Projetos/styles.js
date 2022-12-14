import styled from "styled-components";

export const Container = styled.nav`
  background-color: #121214;

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    li {
      padding-top: -15px;
      margin: 25px;
      color: white;
      background-image: linear-gradient(
        90deg,
        #9572fc 30%,
        #43e7ad 50.52%,
        #00ffff 100%
      );
      border-radius: 10px;

      transition: transform 0.3s;
    }

    li:hover {
      transform: scale(1.1);
      background-image: linear-gradient(
        90deg,
        #e60b25 30%,
        #d29f03 50.52%,
        #ffff7a 100%
      );
    }
    img {
      width: 100%;
      height: 200px;
      border-radius: 8px;
      margin-top: -25px;
    }
  }
  h1 {
    color: cyan;
    font-size: 28px;
    padding-top: 50px;
    text-align: center;
  }
  h2 {
    color: white;
    text-align: center;
    background-color: #2b2c2c;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 5px;
    padding-left: 10px;
    padding-right: 10px;
  }

  h3 {
    color: white;
    text-align: center;
    font-size: 30px;
    margin-top: -10px;
  }
  p {
    color: white;
  }
`;
export const ContainerIcons = styled.nav`
  /* padding-top: 25px; */
  background-color: #2a2634;
  border-radius: 10px;
  margin-top: -50px;
  h4 {
    padding-top: 35px;
    color: white;
    text-align: center;
  }
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      margin-left: 10px;
      margin-right: 10px;
      height: 40px;
      border-radius: 50%;
    }
    img {
      width: 40px;
      height: 40px;
      margin-top: 1px;
    }
    .js {
      border-radius: 100%;
      width: 40px;
      height: 40px;
    }
  }
`;
