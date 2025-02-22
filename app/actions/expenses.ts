"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createExpense = async (title: string, amount: number, category: string) => {
  await prisma.expense.create({
    data: { title, amount, category },
  });
}

export {
  createExpense
}