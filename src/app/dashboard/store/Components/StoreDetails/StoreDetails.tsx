import React from 'react';
import { FaPlus } from "react-icons/fa";

interface StoreInfoModalState {
    mode: 'add' | 'edit' | 'view'; // حالت‌های ممکن
    modal: boolean; // وضعیت نمایش مودال
  }
const StoreDetails: React.FC<StoreInfoModalState> = ({ setStoreInfoModal}:any) => {
  const initialAddStoreInfo = () => {
    setStoreInfoModal((prev:any)=>({...prev,mode:'add',modal:true}));
  };

  return (
    <div className='w-100 p-2 bg-gray-800 flex items-center justify-between '>
      <div className='px-2'> 
        <span className='text-sm text-black dark:text-white'>اطلاعات فروشگاه خود را وارد کنید</span>
      </div>
      <div>
        <button className='btn btn-circle' onClick={initialAddStoreInfo}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default StoreDetails;