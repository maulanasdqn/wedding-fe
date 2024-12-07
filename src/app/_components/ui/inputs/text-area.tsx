import type {
  DetailedHTMLProps,
  ReactElement,
  TextareaHTMLAttributes,
} from "react";
import { InputWrap, TInputWrap } from "./wrap";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { clsx } from "clsx";

type TTextArea<T extends FieldValues> = Omit<TInputWrap, "children"> &
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > &
  UseControllerProps<T>;

export const TextArea = <T extends FieldValues>(
  props: TTextArea<T>,
): ReactElement => {
  const className = clsx(
    "w-full p-3 rounded bg-gray-800 text-gray-100 font-medium transition-colors resize-none",
    {
      "border-2 border-red-600 text-red-600 placeholder-red-600": props.message, // Error state styling
      "border border-gray-600 focus:border-red-600": !props.message, // Default focus styling
      "focus:ring focus:ring-red-600": !props.message, // Focus ring
    },
  );

  const { field } = useController<T>(props);

  return (
    <InputWrap {...props}>
      <textarea
        className={className}
        {...props}
        {...field}
        placeholder={props.placeholder}
      />
    </InputWrap>
  );
};
