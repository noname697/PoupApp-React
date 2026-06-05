export const TransactionItem = ({ item }) => {
  const typeTransactionColor =
    item.value >= 0 ? "text-secondary-income" : "text-secondary-expense";

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-2">
        <p
          className={`${typeTransactionColor} text-[15px] font-bold leading-[120%]`}
        >
          {item.description}
        </p>
        <p className={`${typeTransactionColor} text-[15px] leading-[120%]`}>
          {formatter.format(item.value)}
        </p>
      </div>
      <p className="text-neutral-text leading-[120%]">
        {new Date(item.date).toLocaleDateString("pt-BR")}
      </p>
    </div>
  );
};
