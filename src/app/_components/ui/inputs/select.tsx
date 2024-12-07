import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import { InputWrap, TInputWrap } from "./wrap";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { clsx } from "clsx";

type TSelect<T extends FieldValues> = Omit<TInputWrap, "children"> &
  DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > &
  UseControllerProps<T> & {
    options: Array<{
      value: string | number | readonly string[] | undefined;
      label: string;
    }>;
  } & {
    placeholder?: string;
  };

export const Select = <T extends FieldValues>(props: TSelect<T>) => {
  const { field } = useController<T>(props);

  const className = clsx(
    "w-full p-3 rounded bg-gray-800 text-gray-100 font-medium transition-colors",
    {
      "border-2 border-red-600 text-red-600 placeholder-red-600": props.message, // Error state styling
      "border border-gray-600 focus:border-red-600": !props.message, // Default focus styling
      "focus:ring focus:ring-red-600": !props.message, // Focus ring
    },
  );

  return (
    <InputWrap {...props}>
      <select className={className} {...props} {...field}>
        <option value="" disabled>
          {props.placeholder || "Select an option"}
        </option>
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </InputWrap>
  );
};
