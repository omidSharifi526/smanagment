import * as React from 'react';
import { Controller } from 'react-hook-form';

interface IFormInputProps {
  name: string;
  control: any;
  label?: string;
  rules?: object;
  options?: { value: string; label: string }[];
}

const SelectField: React.FC<IFormInputProps> = ({
  name,
  control,
  label,
  rules = {},
  options = [],
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div className="w-full">
          {label && (
            <label className="label">
              <span className="label-text text-xs">{label}</span>
            </label>
          )}
          <select
            {...field}
            className={`select select-bordered w-full select-sm ${
              error ? 'select-error' : ''
            }`}
          >
            <option value="">انتخاب کنید</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {error && (
            <label className="label">
              <span className="label-text-alt text-error">{error.message}</span>
            </label>
          )}
        </div>
      )}
    />
  );
};

export { SelectField };
