'use client';

import React, { InputHTMLAttributes } from 'react';
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Props<T extends FieldValues> extends TextInputProps {
  name: string;
  control: Control<T>;
  error?: FieldError;
}

export const AuthTextInput = function <T extends FieldValues>({
  name,
  control,
  error,
  value,
  placeholder,
  onChange,
  ...textInputProps
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name as Path<T>}
      render={({ field }) => (
        <div>
          <input
            {...textInputProps}
            {...field}
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
              field.onChange(e);
              onChange?.(e);
            }}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <p>{error?.message}</p>
        </div>
      )}
    />
  );
};
