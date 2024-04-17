import React from "react";
import ProjectForm from "../projects/ProjectForm";
import styles from "./Newproject.module.css";

export default function NewProject() {
  return (
    <div className={styles.new_project_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto e depois adicione seus serviços.</p>
      <ProjectForm btnText="Criar Projeto" />
    </div>
  );
}
