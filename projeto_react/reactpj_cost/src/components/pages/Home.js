import React from "react";
import styles from "./Home.module.css";
import Savings from "../img/savings.svg";
import LinkButton from "../layout/LinkButton";

export default function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar novo projeto" />
      <img src={Savings} alt="Costs Savings" />
    </section>
  );
}
