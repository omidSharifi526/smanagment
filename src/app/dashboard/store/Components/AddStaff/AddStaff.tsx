import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { StaffEntity } from '../../Interface';
import TextField from '@/app/Components/FormControls/TextInput/TextInput';
import SingleCheckBox from '@/app/Components/FormControls/CheckBox/SingleCheckBox';
import { SelectField } from '@/app/Components/FormControls/SelectField/SelectField';
// import DateField from '@/app/Components/FormControls/DatePicker/DatePicker';
// import DatePickerField from '@/app/Components/FormControls/DatePicker/DatePicker';
// import TimePickerField from '@/app/Components/TimePicker/TimePicker';
import DatePickerField from '@/app/Components/FormControls/DatePicker/Datepicker';

const AddStaff: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<StaffEntity>({
    defaultValues: {
        fullName:'',
        nationalId:''
       
    },
  });

  const onSubmit = (data: StaffEntity) => {
    console.log(data); // داده‌های فرم را در کنسول نمایش می‌دهد
  };



//   phone: string;
//   role: "manager" | "cashier" | "sales"; // نقش‌های پیش‌فرض
//   isActive: boolean;
//   createdAt: Date;









  return  <div className="container mx-auto px-4"> {/* Container بیرونی */}
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap "> {/* فرم با flex و gap */}
    {/* فیلد نام فروشگاه */}
    <div className="w-full sm:w-1/2  p-1"> {/* فیلد اول */}
      <TextField 
        control={control}
        name='fullName'
        label='نام و نام خانوادگی'
        rules={{ required: 'الزامی' }}
      />
    </div>

    <div className="w-full sm:w-1/2  p-1"> {/* فیلد دوم */}
      <TextField 
        control={control}
        name='nationalId'
        label='شماره ملی'
        rules={{ required: 'الزامی' }}
      />
    </div>

    <div className="w-full sm:w-1/2  p-1"> {/* فیلد دوم */}
      <TextField 
        control={control}
        name='phone'
        label='شماره تماس'
        rules={{ required: 'الزامی' }}
      />
    </div>

    <div className="w-full sm:w-1/2  p-1"> {/* فیلد دوم */}
     <SelectField 
     control={control}
     name='role'
     label='نقش'
     options={[
        { label: "مدیر", value: "manager" },
        { label: "صندوقدار", value: "cashier" },
        { label: "فروشنده", value: "sales" },
      ]}
     /> 
    </div>
    <div>
        <DatePickerField 
            // control={control} 
            // name="birthdate" 
            // label="تاریخ تولد" 
            // rules={{ required: "انتخاب تاریخ الزامی است" }} 
            />
        </div>

        {/* <div>
        <TimePickerField 
          control={control} 
          name="selectedTime" 
          label="زمان موردنظر" 
          rules={{ required: "لطفاً یک زمان انتخاب کنید" }} 
            />
        </div> */}

    {/* SelectField */}



 

    {/* دکمه ارسال */}
    <div className="w-full form-control mt-6"> {/* دکمه ارسال */}
      <button type="submit" className="btn btn-primary">
        ارسال
      </button>
    </div>

    
  </form>
</div>;
};

export default AddStaff;
