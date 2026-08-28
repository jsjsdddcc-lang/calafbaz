import Link from 'next/link';
import { Gamepad2, Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="glass-panel border-b border-gaming-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-black text-lg text-gaming-accent">
          <Gamepad2 /> کالاف باز
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/multiplayer" className="hover:text-gaming-accent">مولتی‌پلیر</Link>
          <Link href="/battle-royale" className="hover:text-gaming-accent">بتل‌رویال</Link>
          <Link href="/admin" className="p-2 glass-panel rounded-lg hover:border-gaming-accent"><Shield size={18} /></Link>
        </div>
      </div>
    </nav>
  );
}
