import Link from 'next/link';
import { logoutAction } from '@/app/actions/admin';
import { LayoutDashboard, Shield, LogOut } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div className="glass-panel p-4 rounded-2xl flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Shield className="text-gaming-accent" />
          <span className="font-bold">پنل مدیریت ادمین</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/admin" className="text-sm text-gray-300 hover:text-white">داشبورد</Link>
          <Link href="/admin/weapons" className="text-sm text-gray-300 hover:text-white">اسلحه‌ها</Link>
          <form action={logoutAction}>
            <button type="submit" className="flex items-center gap-1 text-sm text-red-400 hover:text-red-300">
              <LogOut size={16} /> خروج
            </button>
          </form>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
