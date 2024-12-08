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
    "w-full p-3 rounded bg-gray-800 text-gray-100 font-medium transition-colors focus:outline-none",
    {
      "border-2 border-red-600 text-red-600 placeholder-red-600": props.message,
      "border border-gray-600 focus:border-red-600": !props.message,
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
