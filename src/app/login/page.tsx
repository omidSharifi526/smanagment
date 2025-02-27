'use client'
import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useLogin } from './hooks';
import Loading from '../Components/Loading/Loading';

const Login = () => {
 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  const{mutate:callLogin,data:loginResponse,isPending,isSuccess}=useLogin();


  




  
    const handleLogin = async (e:any) => {
      e.preventDefault();
      callLogin({username,password})
  
    

    };

    if (isPending) {
     return <Loading/>
    }

  
    


  return (
    <div className="flex items-center justify-center min-h-screen">
        
    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold mb-4">ورود به حساب</h2>
        <form onSubmit={handleLogin}>
          {/* فیلد نام کاربری */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">نام کاربری</span>
            </label>
            <input
              type="text"
              placeholder="نام کاربری را وارد کنید"
              className="input input-bordered"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* فیلد رمز عبور */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">رمز عبور</span>
            </label>
            <input
              type="password"
              placeholder="رمز عبور را وارد کنید"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* دکمه ورود */}
          <div className="form-control mt-6">
           
            <button type='submit' onClick={(e:any)=>{
           handleLogin(e)
            }}>ورود</button>
           
           
          </div>
        </form>
        {/* لینک ثبت‌نام */}
        <p className="text-center text-sm mt-4">
          حساب کاربری ندارید؟{" "}
          <a className="text-blue-500 hover:underline" href="#">
            ثبت‌نام کنید
          </a>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Login