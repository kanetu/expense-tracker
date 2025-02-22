"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogProps } from "@radix-ui/react-dialog";
import { JSX } from "react";
import ExpenseForm from "../expenseForm/expenseForm";

const ExpenseDialog = (props: JSX.IntrinsicAttributes & DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Expense</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <ExpenseForm onToggleDialog={props.onOpenChange} />
      </DialogContent>
    </Dialog>
  );
};

export default ExpenseDialog;
