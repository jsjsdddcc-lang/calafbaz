import Link from 'next/link';
import { Gamepad2, Shield, Flame, Compass } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      <div className="text-center space-y-4 py-12 glass-panel rounded-3xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gaming-accent/10 via-transparent to-gaming-accent/5 pointer-events-none" />
        <h1 className="text-4xl md:text-6xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-gaming-accent to-yellow-500">
          مرجع تخصصی کالاف دیوتی موبایل
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          بهترین لودآوت‌ها، راهنمای جامع اسلحه‌ها و ترفندهای حرفه‌ای برای تسلط بر میدان نبرد.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link href="/multiplayer" className="px-8 py-3 bg-gaming-accent text-black font-bold rounded-xl shadow-lg hover:opacity-95 transition">
            بخش مولتی‌پلیر
          </Link>
          <Link href="/battle-royale" className="px-8 py-3 glass-panel text-white font-bold rounded-xl hover:border-gaming-accent transition">
            بخش بتل‌رویال
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl space-y-3">
          <Gamepad2 className="w-10 h-10 text-gaming-accent" />
          <h3 className="text-xl font-bold">لودآوت‌های حرفه‌ای</h3>
          <p className="text-gray-400 text-sm">بهترین اتچمنت‌ها برای کنترل لگد و افزایش سرعت نشه‌گیری.</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl space-y-3">
          <Shield className="w-10 h-10 text-gaming-accent" />
          <h3 className="text-xl font-bold">آنالیز دقیق</h3>
          <p className="text-gray-400 text-sm">بررسی نقاط قوت و ضعف هر اسلحه برای انتخاب هوشمندانه.</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl space-y-3">
          <Flame className="w-10 h-10 text-gaming-accent" />
          <h3 className="text-xl font-bold">بروزرسانی مداوم</h3>
          <p className="text-gray-400 text-sm">همگام با آخرین سیزن‌ها و تغییرات متای بازی.</p>
        </div>
      </div>
    </div>
  );
}
