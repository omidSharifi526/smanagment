'use client'
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const UserInfo: React.FC = () => {
  const [userInfo, setUserInfo] = useState({ fullName: 'کاربر',storeName:'',storeType:'' });
  const user = JSON.parse(Cookies.get("user") || "{}");

  useEffect(() => {
    if (user) {
      // تنظیم داده‌های جدید در صورتی که از کوکی اطلاعات در دسترس باشد
      setUserInfo({
        fullName: user.fulName || 'کاربر',
        storeName: user.storeName || 'فروشگاه',
        storeType:user.storeType === 1 ? 'فروش محصول' :
        user.storeType === 2 ? 'فروش خدمات' : 
        'فروش خدمات و محصول'

      });
    }
  }, [user.firstName, user.storeName]); // وابسته به تغییرات user

  return (
    <div className="flex items-center space-x-2 gap-2">

      <div className="flex justify-start items-start space-x-1 gap-6" >
      <span className="text-xs">{userInfo.fullName}</span> 
      {/* <span className="text-xs">
      {userInfo.storeName}
      </span> */}
      
      </div>

    </div>
  );
};

export default UserInfo;
