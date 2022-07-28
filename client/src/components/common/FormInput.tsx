import React, { ChangeEvent, FocusEvent, FunctionComponent } from "react";

interface Props {
  inputId: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
  disabled?: boolean;
  value: string | number;
  errors: string | undefined;
  touched: boolean | undefined;
  handleChange: (e: ChangeEvent<any>) => void;
  handleBlur: (e: FocusEvent<any>) => void;
}

const FormInput: FunctionComponent<Props> = (props: Props) => {
  const defaultClassName =
    "appearance-none block w-full bg-gray-700 text-primary border border-gray-700 rounded py-2 px-4 mb-1 leading-tight  focus:outline-none ";
  const errorClassName =
    "appearance-none block w-full bg-gray-700 text-primary border border-red-700 rounded py-2 px-4 mb-1 leading-tight  focus:outline-none ";
  return (
    <>
      <label
        id={`${props.inputId}`}
        className="uppercase tracking-wide text-primary text-xs font-semibold mb-2"
        htmlFor={props.inputId}
      >
        {props.label}
      </label>
      {props.required && <span className="text-red-700 mx-1">*</span>}
      <input
        className={`${
          props.touched && props.errors ? errorClassName : defaultClassName
        } ${props.disabled ? "opacity-70 cursor-not-allowed" : ""}
        `}
        id={props.inputId}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.value}
        aria-labelledby={`${props.inputId}-label`}
        aria-disabled={props.disabled}
        disabled={props.disabled}
      />
      {props.touched && props.errors ? (
        <span className="text-xs text-red-dark">{props.errors}</span>
      ) : null}
    </>
  );
};

export { FormInput };
