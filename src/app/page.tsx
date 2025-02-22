export default function LandingPage() {
  return (
    <div className="bg-base-200 text-base-content min-h-screen">
      {/* Header */}
      <header className="navbar bg-base-100 shadow-md px-6">
        <div className="flex-1">
          <a className="text-xl font-bold">نرم‌افزار حسابداری</a>
        </div>
        <nav className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><a>ویژگی‌ها</a></li>
            <li><a>تماس با ما</a></li>
            <li><a href="/login"   >ورود</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero min-h-[70vh] bg-gradient-to-r from-blue-600 to-gray-500 text-primary-content">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold">مدیریت مالی ساده و سریع</h1>
            <p className="py-4 text-lg">نرم‌افزار حسابداری تحت وب، مناسب برای همه کسب‌وکارها</p>
            <button className="btn btn-secondary">شروع کنید</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">ویژگی‌های کلیدی</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="card bg-base-100 shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold">سادگی در استفاده</h3>
            <p>رابط کاربری آسان و کاربرپسند برای همه افراد</p>
          </div>
          <div className="card bg-base-100 shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold">دسترسی آنلاین</h3>
            <p>مدیریت مالی از هر جا و در هر زمان</p>
          </div>
          <div className="card bg-base-100 shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold">امنیت بالا</h3>
            <p>نگهداری اطلاعات شما با بالاترین سطح امنیت</p>
          </div>
          <div className="card bg-base-100 shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold">پشتیبانی سریع</h3>
            <p>تیم پشتیبانی همیشه در کنار شماست</p>
          </div>
          <div className="card bg-base-100 shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold">قیمت مناسب</h3>
            <p>ارائه خدمات با کمترین هزینه برای تمامی کاربران</p>
          </div>
          <div className="card bg-base-100 shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold">گزارش‌گیری روزانه</h3>
            <p>دسترسی به گزارش‌های مالی روزانه و دقیق</p>
          </div>
          <div className="card bg-base-100 shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold">مدیریت فاکتورها</h3>
            <p>ایجاد، ویرایش و پیگیری فاکتورهای مالی به‌صورت آنلاین</p>
          </div>
          <div className="card bg-base-100 shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold">پشتیبانی چندکاربره</h3>
            <p>امکان استفاده توسط چندین کاربر با سطوح دسترسی مختلف</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-20 bg-base-300 text-base-content text-center flex items-center justify-center">
        <p className="text-lg">تمامی حقوق محفوظ است © 2025</p>
      </footer>
    </div>
  );
}
