import { AccountItem } from "../AccountItem";
import { Button } from "../Button";
import { IconWallet } from "../icons";

export const Accounts = () => {
  const accounts = [
    { bank: "Anybank", balance: 1200 },

    { bank: "Bytebank", balance: 800 },

    { bank: "Switch Bank", balance: 1800 },
  ];
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <ul>
          {accounts.map((account, index) => (
            <li
              key={index}
              className="pb-4 mb-4 border-b border-b-neutral-header last:border-0"
            >
              <AccountItem item={account} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <Button>
          <IconWallet />
          <p>Adicionar Conta</p>
        </Button>
      </div>
    </div>
  );
};
