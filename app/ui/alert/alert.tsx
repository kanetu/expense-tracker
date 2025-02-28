import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

type AlertProps = {
  title?: string;
  content?: string | React.ReactNode;
  cancelLabel?: string;
  submitLabel?: string;
  onSubmitAction?: () => void;
} & AlertDialogPrimitive.AlertDialogProps;

const Alert: React.FC<AlertProps> = ({
  title = "Title",
  content = "Content",
  cancelLabel = "Cancel",
  submitLabel = " Submit",
  onSubmitAction,
  ...props
}) => {
  return (
    <AlertDialog {...props}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {content}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelLabel}</AlertDialogCancel>
          <AlertDialogAction onClick={onSubmitAction}>
            {submitLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
