'use client'
import React from "react";
import Navbar from "../Components/DataGrid/Navabr/Navbar";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
   const user = JSON.parse(Cookies.get("user") || "{}");

  return (
    <div className="flex">
     {/* userType={userType} */}
      <div className="flex-1">
        <Navbar storeType={user.storeType} bussinesType={user.storeType}  /> {/* نوبار مخصوص داشبورد */}
        <main>{children}</main> {/* محتوای صفحات داخل داشبورد */}
      </div>
    </div>
  );
};


export default DashboardLayout;

