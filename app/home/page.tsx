import { getExpenses } from "../actions/expenses";
import CreateExpense from "../ui/createExpense/createExpense";
import { ExpenseTable } from "./expenseTable";

const Home = async () => {
  const data = await getExpenses();

  return (
    <div className="flex flex-col">
      <CreateExpense />
      <ExpenseTable data={data} />
    </div>
  );
};

export default Home;
