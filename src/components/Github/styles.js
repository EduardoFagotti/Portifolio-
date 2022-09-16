import styled from "styled-components";
import imgGithub from "../../assets/img/github.jpg";

export const GithubContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 7rem;
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${imgGithub});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem;
`;

export const ContentGitHub = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  h2 {
    text-align: center;
    color: cyan;
  }
`;

export const Itens = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Foto = styled.div`
  width: 100%;
  max-width: calc(250px + 4rem);
  border-radius: 50%;
  text-align: center;
  img {
    border-radius: 50%;
    width: 150px;
    max-width: 250px;
    height: 100%;
  }

  h3,
  p,
  a {
    color: cyan;
    font-size: 25px;
  }
`;

export const ListProjects = styled.div`
  width: 100%;
  border-radius: 10px;
  /* background-color: rgba(238, 238, 238, 0.9); */
  padding: 0.5rem 1rem;
  margin-left: 50%;

  a {
    color: cyan;
  }
  .title {
    color: white;
  }
`;
