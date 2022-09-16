import React, { useEffect, useState } from "react";
import {
  ContentGitHub,
  Foto,
  GithubContainer,
  Itens,
  ListProjects,
} from "./styles";
import axios from "axios";

export default function Github() {
  const [userGit, setuserGit] = useState([]);
  const [projects, setProjects] = useState([]);
  const [errorMsg, setErrorMsg] = useState([]);

  useEffect(() => {
    getApigit();
    getApiGitRepos();
  }, []);

  function getApigit() {
    axios
      .get("/https://api.github.com/users/eduardofagotti", {})
      .then(function (response) {
        setuserGit(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getApiGitRepos() {
    axios
      .get("https://api.github.com/users/EduardoFagotti/repos", {})
      .then(function (response) {
        setProjects(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <GithubContainer>
      <ContentGitHub>
        {/* <h2>Github</h2> */}
        <Itens>
          <Foto>
            <img
              src={"https://avatars.githubusercontent.com/u/79821302?v=4"}
              alt="Foto GitHub"
            />
            <h3>Eduardo Fagotti</h3>
            <a target="_blank" href="https://github.com/EduardoFagotti">
              Github/EduardoFagotti
            </a>
          </Foto>
          <ListProjects>
            <h3 className="title">Projetos</h3>
            <div>
              <a
                target="_blank"
                href="https://github.com/EduardoFagotti/buscador-de-cep"
              >
                <h3>buscador-de-cep</h3>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://github.com/EduardoFagotti/calculadora-de-juros-anuais"
              >
                <h3>calculadora-de-juros-anuais</h3>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://github.com/EduardoFagotti/GitHubSearch"
              >
                <h3>GitHubSearch</h3>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://github.com/EduardoFagotti/Super-mario-jump"
              >
                <h3>Super-mario-jump</h3>
              </a>
            </div>
          </ListProjects>
          <p>{errorMsg}</p>
        </Itens>
      </ContentGitHub>
    </GithubContainer>
  );
}
