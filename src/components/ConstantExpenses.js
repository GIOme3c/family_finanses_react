import { useState } from "react";
import { expensesMock } from "../api/mock";

const ConstantExpenses = () => {
  // const data = getConstantExpenses()
  const [expensesData, setExpensesData] = useState(expensesMock);

  return (
    <div>
      <h2>Постоянные расходы</h2>
      <ul>
        {!expensesData && <span> Нет данных </span>}
        {expensesData.map((expenseItem) => (
          <li key={expenseItem.title}>
            <span>{expenseItem.title}</span>
            <span>{expenseItem.cost}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConstantExpenses;
