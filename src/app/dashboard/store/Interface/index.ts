 export type StoreEntity = {
    name: string;
    englishName?: string; // اختیاری
    phone: string;
    address: string;
    isActive: boolean;
  };


  export type StaffEntity = {
    fullName: string;
    nationalId: string;
    phone: string;
    role: "manager" | "cashier" | "sales"; // نقش‌های پیش‌فرض
    isActive: boolean;
    createdAt: Date;
  };