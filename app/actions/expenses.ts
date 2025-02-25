"use server";
import { Expense, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createExpense = async (title: string, amount: number, category: string) => {
  await prisma.expense.create({
    data: { title, amount, category },
  });
}

const getExpenses = async (): Promise<Expense[]> => {
  return await prisma.expense.findMany();
}

export {
  createExpense,
  getExpenses
}