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