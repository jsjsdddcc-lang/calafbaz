import Link from 'next/link';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export default async function AdminWeaponsPage() {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll() { return cookieStore.getAll(); } } }
  );

  const { data: weapons } = await supabase.from('weapons').select('*, categories(*), game_modes(*)');

  return (
    <div className="glass-panel p-6 rounded-3xl space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-black">مدیریت اسلحه‌ها</h1>
        <Link href="/admin/weapons/add" className="px-4 py-2 bg-gaming-accent text-black font-bold rounded-xl text-sm">
          + افزودن اسلحه
        </Link>
      </div>
      <div className="space-y-3">
        {weapons?.map((weapon: any) => (
          <div key={weapon.id} className="flex justify-between items-center p-4 bg-black/30 border border-gaming-border rounded-xl">
            <div>
              <h3 className="font-bold">{weapon.name}</h3>
              <span className="text-xs text-gray-400">{weapon.game_modes?.name} - {weapon.categories?.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
