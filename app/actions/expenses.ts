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

const deleteExpense = async (id: string) => {
  await prisma.expense.delete({
    where: {
      id
    }
  })
}

const deleteExpenses = async (ids: string[])   => {
  await prisma.expense.deleteMany({
    where: {
      id: {
        in: ids
      }
    }
  })
}

export {
  createExpense,
  getExpenses,
  deleteExpense,
  deleteExpenses
}