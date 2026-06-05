import { IconSavings } from "../icons";
import { ProgressBar } from "../ProgressBar";
import style from "./savings-status.module.css";

export const SavingsStatus = ({ percent }) => {
  return (
    <div className={style.container}>
      <p>
        <IconSavings /> Economizar
      </p>
      <ProgressBar percent={percent} />
    </div>
  );
};
