import { IconBank } from "../icons";

export const AccountItem = ({ item }) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <div className="text-neutral-text text-[15px] leading-[120%] flex justify-between items-center">
      <p className="font-bold flex gap-2">
        <IconBank />
        {item.bank}
      </p>
      <div className="flex flex-col gap-2">
        <p className="font-bold">Saldo</p>
        <p>{formatter.format(item.balance)}</p>
      </div>
    </div>
  );
};
