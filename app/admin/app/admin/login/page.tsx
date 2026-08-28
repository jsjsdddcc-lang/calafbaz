import { loginAction } from '@/app/actions/admin';
import SubmitButton from '@/components/admin/SubmitButton';

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-20 glass-panel p-8 rounded-3xl space-y-6">
      <h1 className="text-2xl font-black text-center">ورود به پنل ادمین</h1>
      <form action={loginAction} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">ایمیل</label>
          <input name="email" type="email" required className="w-full bg-black/40 border border-gaming-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gaming-accent" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">رمز عبور</label>
          <input name="password" type="password" required className="w-full bg-black/40 border border-gaming-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gaming-accent" />
        </div>
        <SubmitButton text="ورود" loadingText="در حال ورود..." />
      </form>
    </div>
  );
}
