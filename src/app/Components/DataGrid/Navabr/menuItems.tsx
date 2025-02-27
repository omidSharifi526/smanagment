interface MenuItemLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
  type?: undefined; // نوع `type` فقط می‌تواند `undefined` باشد
}

interface MenuItemDivider {
  type: "divider"; // نوع `type` فقط می‌تواند `"divider"` باشد
  href?: undefined; // سایر فیلدها باید `undefined` باشند
  label?: undefined;
  icon?: undefined;
}

export type MenuItemFace = MenuItemLink | MenuItemDivider;

// اصلاح نوع برای menuItems
export const menuItems: Record<number, MenuItemFace[]> = {
  1: [
    { label: "داشبورد", href: "/dashboard", icon: "FaHome" },
    { label: "سفارشات", href: "/orders", icon: "FaShoppingCart" },
    { label: "مشتریان", href: "/customers", icon: "FaUser" },
    { type: "divider" },
    { label: "مدیریت متریال", href: "/materials", icon: "FaBox" },
    { label: "خروج", href: "/", icon: "FaSignOutAlt" }, // آیتم خروج
  ],
  2: [
    { label: "داشبورد", href: "/dashboard", icon: "FaHome" },
    { label: "سفارشات", href: "/orders", icon: "FaShoppingCart" },
    { label: "مشتریان", href: "/customers", icon: "FaUser" },
    { type: "divider" },
    { label: "مدیریت متریال", href: "/materials", icon: "FaBox" },
    { label: "گزارشات", href: "/reports", icon: "FaChartBar" },
    { type: "divider" },
    { label: "تنظیمات", href: "/settings", icon: "FaCog" },
    { label: "خروج", href: "/", icon: "FaSignOutAlt" }, // آیتم خروج
  ],
  3: [
    { label: "داشبورد", href: "/dashboard", icon: "FaHome" },
    { label: "سفارشات", href: "/orders", icon: "FaShoppingCart" },
    { label: "خروج", href: "/", icon: "FaSignOutAlt" }, // آیتم خروج
  ],
};
