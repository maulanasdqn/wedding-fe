import type { FC, ReactElement, ReactNode } from "react";

export type TInputWrap = {
  label: string;
  children: ReactNode;
  message?: string;
  required?: boolean;
};

export const InputWrap: FC<TInputWrap> = (props): ReactElement => {
  return (
    <div className="flex flex-col gap-y-2">
      <label className="text-gray-300 text-sm font-medium">
        {props.required ? (
          <>
            {props.label}
            <span className="text-red-600 ml-1">*</span>
          </>
        ) : (
          props.label
        )}
      </label>
      <div className="rounded-md bg-gray-800">{props.children}</div>
      {props.message && (
        <span className="text-red-600 text-xs font-medium">
          {props.message}
        </span>
      )}
    </div>
  );
};
