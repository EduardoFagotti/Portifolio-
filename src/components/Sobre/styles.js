import styled from "styled-components";

export const ContainerSobre = styled.div`
  background-color: #121214;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;

  .divFoto {
    width: 220px;
    margin: auto;
    background-image: linear-gradient(
      90deg,
      #9572fc 30%,
      #43e7ad 50.52%,
      #00ffff 100%
    );
    border-radius: 50%;
    padding: 4px;
    display: flex;

    transition: transform 0.3s;
  }

  .divFoto:hover {
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
    border-radius: 50%;
  }

  section {
    margin: 32px auto;
    margin-top: 50px;
    max-width: 780px;
    width: 90%;
    color: white;
    background-image: linear-gradient(
      90deg,
      #9572fc 30%,
      #43e7ad 50.52%,
      #00ffff 100%
    );
    padding-top: 4px;
    border-radius: 10px;
    transition: transform 0.3s;
  }
  section:hover {
    transform: scale(1.1);
    background-image: linear-gradient(
      90deg,
      #e60b25 30%,
      #d29f03 50.52%,
      #ffff7a 100%
    );
  }

  section div {
    background-color: #2a2634;
    padding: 32px;
    padding-top: 24px;

    border-radius: 8px;
  }
`;
export const ContainerIcons = styled.div`
  h4 {
    margin-top: -5px;
    text-align: center;
    margin-bottom: 30px;
    font-size: 24px;
  }
  ul {
    flex-wrap: wrap;
    display: flex;
    list-style: none;
    gap: 50px;
  }
  img {
    width: 50px;
    height: 50px;
    &:hover {
      background-color: white;
      transition-duration: 0.3s;
    }
  }
`;
