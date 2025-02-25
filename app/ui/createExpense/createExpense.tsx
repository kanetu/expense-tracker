"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import ExpenseDialog from "../expenseDialog/expenseDialog";

const CreateExpense = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOnClick = () => {
    setOpenDialog((prev) => !prev);
  };
  return (
    <div className="flex justify-end">
      <Button variant="outline" onClick={handleOnClick}>
        + Expense
      </Button>
      <ExpenseDialog open={openDialog} onOpenChange={handleOnClick} />
    </div>
  );
};

export default CreateExpense;
