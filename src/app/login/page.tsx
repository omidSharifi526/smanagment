'use client'
import React,{useState} from 'react'
import Link from 'next/link';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
  
      // اینجا می‌توانید لاجیک احراز هویت را اضافه کنید
      console.log("نام کاربری:", username);
      console.log("رمز عبور:", password);
  
      // در حالت واقعی، درخواست لاگین به بک‌اند فرستاده می‌شود
      alert(`ورود با نام کاربری: ${username}`);
    };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        
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
            <Link href="/dashboard/overview"  >
            <button type="submit" className="btn btn-primary">
              ورود
            </button>
            </Link>
           
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