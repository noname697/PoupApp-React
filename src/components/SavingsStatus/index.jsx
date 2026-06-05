import { IconSavings } from "../icons";
import style from "./savings-status.module.css";

export const SavingsStatus = ({ percent }) => {
  return (
    <div className={style.container}>
      <p>
        <IconSavings /> Economizar
      </p>
    </div>
  );
};
