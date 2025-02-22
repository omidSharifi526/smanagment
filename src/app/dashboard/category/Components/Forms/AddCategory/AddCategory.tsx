import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@/app/Components/FormControls/TextInput/TextInput';
import { SelectField } from '@/app/Components/FormControls/SelectField/SelectField';
import DatePickerrr from '@/app/Components/FormControls/DatePicker/Datepicker';


const AddCategory = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      storeId: '',
      parentId: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('Category Data:', data);
  };

  // مقادیر تستی برای دسته‌بندی‌ها و فروشگاه‌ها
  const stores = [
    { label: 'فروشگاه ۱', value: '1' },
    { label: 'فروشگاه ۲', value: '2' },
  ];

  const categories = [
    { label: 'دسته ۱', value: '1' },
    { label: 'دسته ۲', value: '2' },
  ];

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap">
        <div className="w-full sm:w-1/2 p-1">
          <TextField control={control} name="name" label="نام دسته‌بندی" rules={{ required: 'الزامی' }} />
        </div>
        <div className="w-full sm:w-1/2 p-1">
          <SelectField control={control} name="storeId" label="فروشگاه" options={stores} rules={{ required: 'الزامی' }} />
        </div>
        <div className="w-full sm:w-1/2 p-1">
          <SelectField control={control} name="parentId" label="دسته‌بندی والد" options={categories} rules={{ required: 'الزامی' }} />
        </div>
        
        <div>
          <DatePickerrr/>
        </div>
        
        <div className="w-full mt-4">
          <button type="submit" className="btn btn-primary">ثبت</button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
