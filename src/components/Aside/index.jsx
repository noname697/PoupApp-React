import style from "./aside.module.css";
import logo from "../../assets/logo.svg";

export const Aside = () => {
  return (
    <aside className={style.aside}>
      <img src={logo} alt="Logo" />
      <footer className={style.footer}>
        Desenvolvido por Arthur Manenti. Projeto fictício sem fins comerciais.
      </footer>
    </aside>
  );
};
