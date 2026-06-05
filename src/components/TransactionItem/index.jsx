export const TransactionItem = ({ item }) => {
  const typeTransactionColor =
    item.value >= 0 ? "text-secondary-income" : "text-secondary-expense";

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <div className="flex justify-between">
      <div>
        <p className={`${typeTransactionColor} text-[15px] font-bold`}>
          {item.description}
        </p>
        <p className={`${typeTransactionColor} text-[15px]`}>
          {formatter.format(item.value)}
        </p>
      </div>
      <p className="text-neutral-text">
        {new Date(item.date).toLocaleDateString("pt-BR")}
      </p>
    </div>
  );
};
