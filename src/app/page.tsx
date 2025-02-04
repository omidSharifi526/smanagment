
import moment from "moment-jalaali";
const currentDate = moment().format("jYYYY/jM/jD");
import Link from 'next/link';
export default function Home() {

  // const miladiToJalali = (date: string): string => {
  //   return moment(date, "YYYY-MM-DD").format("jYYYY/jMM/jDD");
  // };
  // moment.loadPersian({ usePersianDigits: true });
  // const numberToPersian = (num: number): string => {
  //   return num.toLocaleString("fa-IR");
  // };
  // console.log(miladiToJalali("2024-10-05")); // خروجی: ۱۴۰۳/۰۷/۱۴
  // const jalaliDate: string = moment().format("jYYYY/jMM/jDD");
  return (
   <>
   {/* <Navbar/> */}
 
   {/* <p>
    {
   numberToPersian(123456)
    }
   </p> */}
   {/* <p>📅 تاریخ شمسی: {jalaliDate}</p>; */}
     {/* <p className="textarea-xs">تاریخ امروز: {convertToPersianNumbers(currentDate)}</p>
      <div className="flex-none">
      
      </div> */}
      {/* <DataGrid/> */}
      <div style={{display:'flex',justifyContent:'center'}} className="p-4 gap-8"  >
     به فروش یار خوش آمدید
     
     
     <Link  href="/login">
     <button className="btn btn-secondary"    >
     ورود
     </button>
     </Link>
       
      
      </div>
     

   </>
  );
}
