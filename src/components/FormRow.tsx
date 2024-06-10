import { cn } from "@/lib/utils";
interface FormProps {
  type: string;
  labelText?: string;
  name: string;
  styles?: string;
}

function FormRow({ type, labelText, name, styles }: FormProps) {
  const defaultStyle =
    "border-solid border-2 border-black rounded-md focus:outline-none px-[3px] text-black";
  return (
    <div className="space-y-2 flex flex-col items-start justify-start ">
      <label htmlFor={name} className="capitalize text-lg">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        required
        className={cn(defaultStyle, styles)}
      />
    </div>
  );
}
export default FormRow;
