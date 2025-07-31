import type {
    FieldValues,
    Path,
    UseFormRegister
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  label: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
};

const InputWithLabel = <T extends FieldValues>(props: InputProps<T>) => {
  return (
    <>
      <label>{props.label}</label>
      <input {...props.register(props.label, { required: props.required })} />
    </>
  );
};

export { InputWithLabel };
