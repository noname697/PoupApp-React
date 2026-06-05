import style from "./daily-budget.module.css";

const formater = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const DailyBudget = ({ value }) => {
  return <p className={style.dailybudget}>{formater.format(value)}</p>;
};
