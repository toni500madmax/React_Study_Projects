import React from "react";
import ProjectForm from "../projects/ProjectForm";
import styles from "./Newproject.module.css";
import { useNavigate } from "react-router-dom";

export default function NewProject() {
  const history = useNavigate([]);

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) =>
        history("/projects", {
          state: { message: "Projeto criado com sucesso!" },
        })
      )
      .catch((err) => console.error(err));
  }

  return (
    <div className={styles.new_project_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto e depois adicione seus serviços.</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}
