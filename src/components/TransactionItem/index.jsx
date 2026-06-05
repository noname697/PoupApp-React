import style from "./transaction-item.module.css";

const formater = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const TransactionItem = ({ item }) => {
  const detailsAddicionalClassName =
    item.value >= 0 ? style.income : style.expense;

  return (
    <div className={style.transaction}>
      <div className={[style.details, detailsAddicionalClassName].join(" ")}>
        <p>{item.description}</p>
        <p>{formater.format(item.value)}</p>
      </div>
      <div className={style.date}>
        {new Date(item.date).toLocaleDateString("pt-BR")}
      </div>
    </div>
  );
};
