import { FaStore } from "react-icons/fa6";
import {MenuItemFace} from '../interface'

const menuItems:MenuItemFace[] = [
    {
      href: "/dashboard/overview",
      label: "دشبورد",
      icon: null, // اگر آیکون نداشت، null بگذارید
    },
    {
      href: "/dashboard/sales",
      label: "فروش",
      icon: null,
    },
    {
      href: "/dashboard/orders",
      label: "سفارشات",
      icon: null,
    },
    {
      href: "/dashboard/customers",
      label: "مشتریان",
      icon: null,
    },
    {
      type: "divider", // برای جداکننده‌ها
    },
    {
      href: "/dashboard/store",
      label: "فروشگاه",
      icon: null,
    },
    {
      href: "/dashboard/products",
      label: "محصولات",
      icon: null,
    },
    {
      href: "/dashboard/category",
      label: "دسته‌بندی",
      icon: null,
    },
    {
      href: "/dashboard/suppliers",
      label: "تامین‌کنندگان",
      icon: null,
    },
    {
      type: "divider", // برای جداکننده‌ها
    },
    {
      href: "/dashboard/warehouse",
      label: "انبار",
      icon: null,
    },
    {
      href: "/dashboard/suppliers",
      label: "اسناد",
      icon: null,
    },
    {
      href: "/dashboard/reports",
      label: "گزارشات",
      icon: null,
    },
    {
      type: "divider", // برای جداکننده‌ها
    },
    {
      href: "/",
      label: "خروج",
      icon: null,
    },
  ];

  export {
    menuItems
  }