import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="glass-panel p-8 rounded-3xl space-y-6">
      <h1 className="text-3xl font-black">خوش آمدید ادمین عزیز</h1>
      <p className="text-gray-400 text-sm">از طریق این پنل می‌توانید به راحتی اسلحه‌ها و لودآوت‌های سایت را مدیریت کنید.</p>
      <div className="flex gap-4">
        <Link href="/admin/weapons/add" className="px-6 py-3 bg-gaming-accent text-black font-bold rounded-xl shadow-lg">
          افزودن اسلحه جدید
        </Link>
        <Link href="/admin/weapons" className="px-6 py-3 glass-panel text-white font-bold rounded-xl">
          لیست اسلحه‌ها
        </Link>
      </div>
    </div>
  );
}
