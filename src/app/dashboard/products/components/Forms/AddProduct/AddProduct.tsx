import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@/app/Components/FormControls/TextInput/TextInput';
import { SelectField } from '@/app/Components/FormControls/SelectField/SelectField';
import SingleCheckBox from '@/app/Components/FormControls/CheckBox/SingleCheckBox';

const AddProduct = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      sku: '',
      measurementUnit: '',
      openToSell: false,
      storeId: '',
      price: '',
      productCategories: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('Product Data:', data);
  };

  // مقادیر تستی برای اندازه‌گیری واحدها، دسته‌بندی‌ها و فروشگاه‌ها
  const measurementUnits = [
    { label: 'کیلوگرم', value: 'kg' },
    { label: 'گرم', value: 'g' },
    { label: 'لیتر', value: 'l' },
  ];

  const productCategories = [
    { label: 'دسته ۱', value: '1' },
    { label: 'دسته ۲', value: '2' },
  ];

  const stores = [
    { label: 'فروشگاه ۱', value: '1' },
    { label: 'فروشگاه ۲', value: '2' },
  ];

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap">
        <div className="w-full sm:w-1/2 p-1">
          <TextField control={control} name="name" label="نام محصول" rules={{ required: 'الزامی' }} />
        </div>
        <div className="w-full sm:w-1/2 p-1">
          <TextField control={control} name="sku" label="کد محصول (SKU)" rules={{ required: 'الزامی' }} />
        </div>
        <div className="w-full sm:w-1/2 p-1">
          <SelectField control={control} name="measurementUnit" label="واحد اندازه‌گیری" options={measurementUnits} rules={{ required: 'الزامی' }} />
        </div>
        <div className="w-full sm:w-1/2 p-1">
          <TextField control={control} name="price" label="قیمت" type="number" rules={{ required: 'الزامی' }} />
        </div>
        <div className="w-full p-1">
          <SelectField control={control} name="productCategories" label="دسته‌بندی محصول" options={productCategories} rules={{ required: 'الزامی' }} />
        </div>
        <div className="w-full sm:w-1/2 p-1">
          <SelectField control={control} name="storeId" label="فروشگاه" options={stores} rules={{ required: 'الزامی' }} />
        </div>


   


        <div className="w-full sm:w-6/12 p-1">
        <SingleCheckBox 
        control={control}
        name='openToSell'
        label='آماده برای فروش'

        
        />
          {/* <Controller
            control={control}
            name="openToSell"
            render={({ field }) => (
              <label className="flex items-center space-x-2">
                <input {...field} type="checkbox" />
                <span>قابل فروش</span>
              </label>
            )}
          /> */}
        </div>
        <div className="w-full mt-4">
          <button type="submit" className="btn btn-primary">ثبت</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
