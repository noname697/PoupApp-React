import { AccountItem } from "../AccountItem";
import { Button } from "../Button";
import { IconWallet } from "../icons";
import style from "./accounts.module.css";

export const Accounts = () => {
  const accounts = [
    { bank: "Anybank", balance: 1200 },

    { bank: "Bytebank", balance: 800 },

    { bank: "Switch Bank", balance: 1800 },
  ];
  return (
    <>
      <div>
        <ul className={style.list}>
          {accounts.map((account, index) => {
            return (
              <li key={index}>
                <AccountItem item={account} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.actions}>
        <Button>
          <IconWallet /> Adicionar conta
        </Button>
      </div>
    </>
  );
};
