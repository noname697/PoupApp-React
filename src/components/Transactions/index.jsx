import { TransactionItem } from "../TransactionItem";

export const Transactions = () => {
  const transactions = [
    { description: "iFood", value: -20, date: "2024-10-01T00:00:00-03:00" },

    {
      description: "Papelaria Mila",
      value: -80,
      date: "2024-10-03T00:00:00-03:00",
    },

    {
      description: "Freela (2ª parte)",
      value: 1000,
      date: "2024-10-03T00:00:00-03:00",
    },

    {
      description: "Magazine Luiza",
      value: -300,
      date: "2024-10-05T00:00:00-03:00",
    },
  ];
  return (
    <div>
      <ul>
        {transactions.map((transaction, index) => (
          <li
            className="pb-4 mb-4 border-b border-b-neutral-header last:border-0"
            key={index}
          >
            <TransactionItem item={transaction} />
          </li>
        ))}
      </ul>
    </div>
  );
};
