import Input from "../form/Input";
import SubmitBtn from "../form/SubmitBtn";
import styles from "../projects/ProjectForm.module.css";
import React, { useState } from "react";

export default function ServicesForm({ handleSubmit, btnText, projectData }) {
  const [service, setService] = useState({});

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChange(e) {
    /* 
    definindo o objeto, recebendo tudo que objeto tem com o spread operator, 
    depois para cada 'name' dos Inputs vai receber o valor digitado neles 
    */
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o custo total"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Insira a descrição do serviço"
        handleOnChange={handleChange}
      />
      <SubmitBtn text={btnText} />
    </form>
  );
}
