import React, { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  className: string;
  register?: UseFormRegister<FieldValues>;
  name: string;
  required?: boolean;
  containerClassName?: string;
  label: string;
  placeholder?: string;
}

export const Input = ({
  type,
  className,
  register,
  name,
  required = false,
  containerClassName,
  label,
  placeholder,
  ...rest
}: InputProps) => {
  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className={containerClassName}>
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        {...(register && register(name, { required }))}
        className={classNames(className)}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};
