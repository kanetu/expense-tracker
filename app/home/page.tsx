import { getExpenses } from "../actions/expenses";
import CreateExpense from "../ui/createExpense/createExpense";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const Home = async () => {
  const data = await getExpenses();

  return (
    <div className="flex flex-col">
      <CreateExpense />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Home;
