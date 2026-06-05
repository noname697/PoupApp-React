import style from "./progress-bar.module.css";

export const ProgressBar = ({ percent }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.filled} style={{ width: `${percent}%` }}>{percent}%</div>
    </div>
  );
};
