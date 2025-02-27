import axios from "axios";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 30000, // زمان انتظار برای درخواست‌ها
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // ارسال کوکی‌ها به سرور
});

// اینترسپتور برای ارسال توکن (در صورتی که نیاز باشه)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token"); // دریافت توکن از کوکی
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// اینترسپتور برای مدیریت خطاها
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized - Redirect to login");
      // مثلا میشه کاربر رو به صفحه لاگین هدایت کرد
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
