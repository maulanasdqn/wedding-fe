import type {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactElement,
} from "react";
import { InputWrap, TInputWrap } from "./wrap";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { clsx } from "clsx";

type TInputText<T extends FieldValues> = Omit<TInputWrap, "children"> &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  UseControllerProps<T>;

export const InputText = <T extends FieldValues>(
  props: TInputText<T>,
): ReactElement => {
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
      <input
        className={className}
        {...props}
        {...field}
        type="text"
        placeholder={props.placeholder}
      />
    </InputWrap>
  );
};
