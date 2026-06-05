import { IconBank } from "../icons";
import style from "./account-item.module.css";

const formater = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const AccountItem = ({ item }) => {
  return (
    <div className={style.container}>
      <div className={style.bank}>
        <IconBank />
        {item.bank}
      </div>
      <div className={style.balance}>
        <p>Saldo</p>
        <p>{formater.format(item.balance)}</p>
      </div>
    </div>
  );
};
