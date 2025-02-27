import { useMutation,useQueryClient } from "@tanstack/react-query";
import {login} from '../api/index'
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";


const useLogin = () => {
  const router = useRouter();
  // "name": "فروشنده3",
  // "userType": 2,
  // "storeName": "فروشگاه3",
  // "storeType": 3,
  // "needCaptcha": false,
  // "token": "eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIiwiY3R5IjoiSldUIn0.k-aVFD9d-WbAtvZ3ANsOfTmkZ4xR2mzsCSB7NLFq6xAoU1r2wVVPPw.fAk7cBveG9nAu6aTfwJvkQ.k_cFUvBjIwMF2sJqPwMfcVT5sZiWgLiXFr2rKU4pDHP-u3_DO8ZyFEzOg95IuCFStF8MDfCGrIQf3jIIXFkWBSjQfZ1A7HteM2RGITOZE5bCuOU9tI_84rCHPb-jPPS_e-ITsxtg2t0QD3Xyf5h1mcFXNOKSNFKSwDbTVcdP-w-1EHTr9ObVi0q2KSvq4DUJ4udVEwSv-P_ZnurSHrXUBbkG3uFT8FQAWdOLAopwbWyumxCvlyLA76T-KKkI68erlF2aRTA2eHS5ydpn9HifZCpijDQ8lR9u4LXgHqaopL8kg68gJ08wedn8LaRfLrR5zsSi8_wrKguj0pnwpsJzjyPimqVlysH1tlMvhd_hatvhgr4wGYF7XTj0dliuXd2soBzc5bZ2ckp9YnOF2ubaqhkU9yp__A31x0kPISw5FUF8_I16IasTWZ4_CFMVHBTtD2bvrhcbxrn8g2id6k7TyvQ4-QMQ7ehkRrCYxClSiqlfUCYKkt893g0VDwH4SRYNwVfniGe4ffKCR9Okc6-oUuSSM46iAzlvLRoI59lL97EASLDknBoJLjIByAlW0JT5Q8tsi35d_7wCZ56W8mqEh6YAtdtSWXc6VAq1E6kqerOZPzfyjFDsira64YFdgx6y.vGz7yt0Scq6Rlt5H5B7Hcw",
  // "userRoles": [
  //     {
  //         "roleName": "SimpleVendor"
  //     }
  // ],

  return useMutation({
    mutationFn: ({ username, password }: { username: string; password: string }) =>
      login(username, password),

    onSuccess: (data: any) => {
      router.push("/dashboard/user");

      if (data?.data?.data) {
        const { token, id,name,userType,storeName,storeType} = data.data.data;

        if (token) {
          const userInfo = {
            id,
            fulName:name ||'کاربر',
            storeType :storeType,
            storeName: storeName,
            userType:userType
          };
        
          // ذخیره توکن
          Cookies.set("token", token, { expires: 7, secure: true, sameSite: "strict" });

          // ذخیره اطلاعات کاربر
          Cookies.set("user", JSON.stringify(userInfo),{ expires: 7, secure: true, sameSite: "strict" });

          

          // هدایت به صفحه داشبورد
        }
      } else {
        console.warn("⚠️ داده‌های لاگین ناقص هست!");
      }
    },

    onError: (error: any) => {
      console.error("❌ خطا در لاگین:", error);
    },
  });
};




  export {
    useLogin
  }