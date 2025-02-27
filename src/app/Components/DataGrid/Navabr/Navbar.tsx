'use client'; // برای Next.js 13 یا بالاتر
import React, { useState, useRef, useEffect } from 'react';
import { FaStore, FaHome, FaShoppingCart, FaBox, FaUser, FaCog } from 'react-icons/fa';
import Link from 'next/link';
import ToggleColor from '../../ToggleMode/ToggleMode';
import moment from "moment-jalaali";
import { MdStore } from "react-icons/md";
import { menuItems } from './menuItems';
// import UserInfo from './Componets/UserInfo/UserInfo';
const UserInfo = React.lazy(() => import('./Componets/UserInfo/UserInfo'));
import DateInfo from './Componets/DateInfo/DateInfo';


import { MenuItemFace } from './interface';
import { FcBullish } from "react-icons/fc";
import { FaFolder, FaCube, FaChartSimple, FaCubes, FaFileInvoice, FaHandshakeAngle, FaPeopleGroup, FaWarehouse, FaTruck, FaShop, FaArrowRightFromBracket } from "react-icons/fa6";



const Navbar = ({storeType,bussinesType}:any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<any>([]);
  const [bussinesTypeName, setBussinesTypeName] = useState<string|null>('')
  const menuRef = useRef(null);
  console.log(currentMenu)

  useEffect(() => {
    
    const currentMenu = menuItems[storeType] || [];
  
    setCurrentMenu(currentMenu)

    const storeTypeName = 
    bussinesType === 1 ? 'فروش محصول' :
    bussinesType === 2 ? 'فروش خدمات' : 
    'فروش خدمات و محصول';

    setBussinesTypeName(storeTypeName)


   
  }, [storeType])
  



  



  

  //  const menuItems:any = {
  //   admin: [
  //     { label: "داشبورد", href: "/admin/dashboard", icon: "FaHome" },
  //     { label: "محصولات", href: "/admin/products", icon: "FaBox" },
  //     { label: "سفارشات", href: "/admin/orders", icon: "FaShoppingCart" },
  //     { type: "divider" },
  //     { label: "کاربران", href: "/admin/users", icon: "FaUser" },
  //     { label: "تنظیمات", href: "/admin/settings", icon: "FaCog" },
  //   ],
  //   user: [
  //     { label: "صفحه اصلی", href: "/", icon: "FaHome" },
  //     { label: "فروشگاه", href: "/shop", icon: "FaStore" },
  //     { label: "سبد خرید", href: "/cart", icon: "FaShoppingCart" },
  //     { label: "سفارشات من", href: "/orders", icon: "FaBox" },
  //   ],
  // };

  // منوی همبرگری
  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation(); // جلوگیری از انتشار رویداد کلیک
    setIsMenuOpen(!isMenuOpen);
  };

  // بستن منو با کلیک خارج از آن
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // افزودن و حذف listener برای بستن منو
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  

  return (
    <div className="navbar bg-base-200">

      <div className="navbar-start gap-3">
        <div className="dropdown">
          <div tabIndex={0} role="button" onClick={toggleMenu} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>

          <ul
            ref={menuRef}
            tabIndex={0}
            className={`menu menu-sm lg:menu-lg lg:p-3 dropdown-content bg-base-200 rounded-1 z-[1] w-48 text-sm shadow-lg lg:w-64 lg:text-base ${isMenuOpen ? 'block' : 'hidden'}`}
          >
            {currentMenu.map((item: MenuItemFace, index: number) => {
              if (item.type === "divider") {
                return <div key={index} className="divider" />;
              }

              const Icon = () => {
                switch (index) {
                  case 0: return <FaHome size={20} />;
                  case 1: return <FaShoppingCart size={20} />;
                  case 2: return <FaHandshakeAngle size={20} />;
                  case 3: return <FaPeopleGroup size={20} />;
                  case 5: return <FaShop size={20} />;
                  case 6: return <FaCube size={15} />;
                  case 10: return <FaWarehouse size={20} />;
                  case 7: return <FaFolder size={15} />;
                  case 8: return <FaTruck size={20} />;
                  case 11: return <FaFileInvoice size={20} />;
                  case 12: return <FaChartSimple size={20} />;
                  case 14: return <FaArrowRightFromBracket size={20} />;
                  default: return null;
                }
              };

              return (
                <li key={index}>
                  <Link href={item.href} onClick={closeMenu} className="flex justify-between items-center">
                    <span>{item.label}</span>
                    <Icon />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-start">
        <span className='text-xs'    >
          {
             bussinesTypeName
          }
        </span>
      </div>
      </div>


    
      

      <div className="navbar-end gap-4">
      <div>
        <UserInfo   />
      </div>
       <div>
        <DateInfo/>
       </div>
        <ToggleColor />

        <button className="btn btn-ghost btn-circle btn-xs">
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <button className="btn btn-ghost btn-circle btn-xs">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
