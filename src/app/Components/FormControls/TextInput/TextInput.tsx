import * as React from 'react';
import { Controller, Control, FieldValues } from 'react-hook-form';

interface IFormInputProps {
  name: string;
  control: any; // استفاده از Control به جای any
  label?: string;
  rules?: object;
  type?:string;
}

const TextField: React.FC<IFormInputProps> = ({
  name,
  control,
  label,
  type,
  rules = {},
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div className="w-full">
          {/* Label */}
          {label && (
            <label className="label">
              <span className="label-text text-xs">{label}</span>
            </label>
          )}
          {/* Input Field */}
          <input

            {...field}
            type={type}
            className={`input input-bordered w-full input-sm ${
              error ? 'input-error' : ''
            }`}
           
          />
          {/* Error Message */}
          {error && (
            <label className="label">
              <span className="label-text-alt text-error">
                {error.message}
              </span>
            </label>
          )}
        </div>
      )}
    />
  );
};

export default TextField;