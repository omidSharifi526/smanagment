import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@/app/Components/FormControls/TextInput/TextInput';
import {SelectField} from '@/app/Components/FormControls/SelectField/SelectField'

const AddCustomer = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      address: '',
      phone: '',
      userId: '',
      productId: '',
    },
  });

  const onSubmit = (data:any) => {
    console.log('Customer Data:', data);
  };

  // مقادیر تستی برای یوزرها و محصولات
  const users = [
    { label: 'کاربر ۱', value: '1' },
    { label: 'کاربر ۲', value: '2' },
  ];
  const products = [
    { label: 'محصول ۱', value: '101' },
    { label: 'محصول ۲', value: '102' },
  ];

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap">
        <div className="w-full sm:w-1/2 p-1">
          <TextField control={control} name="name" label="نام مشتری" rules={{ required: 'الزامی' }} />
        </div>
        <div className="w-full sm:w-1/2 p-1">
          <TextField control={control} name="phone" label="شماره تماس" rules={{ required: 'الزامی' }} type="text" />
        </div>
        <div className="w-full p-1">
          <TextField control={control} name="address" label="آدرس" rules={{ required: 'الزامی' }} />
        </div>
        <div className="w-full sm:w-1/2 p-1">
          <SelectField control={control} name="userId" label="انتخاب کاربر" options={users} />
        </div>
        <div className="w-full sm:w-1/2 p-1">
          <SelectField control={control} name="productId" label="انتخاب محصول" options={products} />
        </div>
        <div className="w-full mt-4">
          <button type="submit" className="btn btn-primary">ثبت</button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomer;
