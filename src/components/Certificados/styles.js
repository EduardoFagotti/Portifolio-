import styled from "styled-components";

export const Container = styled.nav`
  margin-top: 100px;
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
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 20px;
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
    }
  }
  img {
    width: 320px;
    height: 230px;
    margin-bottom: -5px;
    margin-top: -20px;
  }
  h1 {
    color: cyan;
    font-size: 28px;
    margin-top: -50px;
    text-align: center;
  }
  h2 {
    color: white;
    text-align: center;
    background-color: #2a2634;
    padding: 10px;
    margin-top: 5px;
  }
  p {
    color: white;
  }
`;
