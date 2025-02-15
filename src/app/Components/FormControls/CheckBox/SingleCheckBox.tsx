import * as React from 'react';
import { Controller, Control, FieldValues } from 'react-hook-form';

interface IFormInputProps {
  name: string;
  control: any;
  label?: string;
  rules?: object;
  type?: string;
}

const SingleCheckBox: React.FC<IFormInputProps> = ({
  name,
  control,
  label,
  rules = {},
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div className="gap-3">
          <div className="form-control ">
        
            <label className="cursor-pointer flex items-center gap-4">
              <input
                type="checkbox"
                {...field}
                checked={field.value}
                className="checkbox checkbox-primary"
              />
              {label && <span className="text-xs sm:text-sm font-bold">{label}</span>}
            </label>
            {error && <span className="text-red-500 text-sm">{error.message}</span>}
          </div>
        </div>
      )}
    />
  );
};

export default SingleCheckBox;
