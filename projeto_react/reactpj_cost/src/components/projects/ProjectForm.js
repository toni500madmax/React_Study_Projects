import React from "react";
import styles from "./projectform.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitBtn from "../form/SubmitBtn";

export default function ProjectForm({ btnText }) {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="nameProj"
        placeholder="Insira nome"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insirao orçamento"
      />
      <Select name="category_id" text="Selecione uma opção" />
      <SubmitBtn text={btnText} />
    </form>
  );
}
