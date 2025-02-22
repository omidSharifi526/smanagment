import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { StoreEntity } from '../../Interface';
import TextField from '@/app/Components/FormControls/TextInput/TextInput';
import SingleCheckBox from '@/app/Components/FormControls/CheckBox/SingleCheckBox';
const AddStore = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<StoreEntity>({
    defaultValues: {
      name: '',
      englishName:'',
      phone:'',
      address:'',
      isActive:true

       
    },
  });

  const onSubmit = (data: StoreEntity) => {
    console.log(data); // داده‌های فرم را در کنسول نمایش می‌دهد
  };







  return (
    <div className="container mx-auto px-4"> {/* Container بیرونی */}
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap "> {/* فرم با flex و gap */}
      {/* فیلد نام فروشگاه */}
      <div className="w-full sm:w-1/2  p-1"> {/* فیلد اول */}
        <TextField 
          control={control}
          name='name'
          label='نام فروشگاه'
          rules={{ required: 'الزامی' }}
        />
      </div>
      <div className="w-full sm:w-1/2  p-1"> {/* فیلد دوم */}
        <TextField 
          control={control}
          name='englishName'
          label='نام فروشگاه به انگلیسی'
          rules={{ required: 'الزامی' }}
        />
      </div>

      <div className="w-full sm:w-4/12  p-1"> {/* فیلد دوم */}
        <TextField 
          control={control}
          name='phone'
          label='شماره تماس'
          rules={{ required: 'الزامی' }}
          type='text'
        />
      </div>

      <div className="w-full sm:w-8/12 p-1"> {/* فیلد دوم */}
        <TextField 
          control={control}
          name='address'
          label='آدرس'
          rules={{ required: 'الزامی' }}
        />
      </div>
      <div className="w-full sm:w-8/12 p-1">
        <SingleCheckBox 
        name='isActive'
        label='فروشگاه فعال است' 
        control={control} 
        
        />
      </div>
  
      {/* دکمه ارسال */}
      <div className="w-full form-control mt-6"> {/* دکمه ارسال */}
        <button type="submit" className="btn btn-primary">
          ارسال
        </button>
      </div>

      
    </form>
  </div>
  );
};

export default AddStore;