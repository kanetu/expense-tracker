"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createExpense } from "../../actions/expenses";

const expenseSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  amount: z.coerce.number().min(1, {
    message: "Amount must be at least 1",
  }),
  category: z.string().min(2, {
    message: "Category must be at least 2 characters",
  }),
});

type ExpenseSchemaType = z.infer<typeof expenseSchema>;

const ExpenseForm = ({ onToggleDialog }: { onToggleDialog: () => void }) => {
  const form = useForm<ExpenseSchemaType>({
    resolver: zodResolver(expenseSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { isLoading },
  } = form;

  const onSubmit = async (values: unknown) => {
    const validate = expenseSchema.safeParse(values);
    if (validate.success) {
      const { data } = validate;
      await createExpense(data.title, data.amount, data.category);
      onToggleDialog();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormDescription>
                This is the title of the expense.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input placeholder="10" type="number" {...field} />
              </FormControl>
              <FormDescription>This is the amount you spent.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end mt-2">
          <Button type="submit" disabled={isLoading}>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ExpenseForm;
