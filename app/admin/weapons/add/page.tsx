import { createWeapon } from '@/app/actions/admin';
import SubmitButton from '@/components/admin/SubmitButton';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export default async function AddWeaponPage() {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll() { return cookieStore.getAll(); } } }
  );

  const { data: categories } = await supabase.from('categories').select('*');
  const { data: gameModes } = await supabase.from('game_modes').select('*');

  return (
    <div className="glass-panel p-8 rounded-3xl space-y-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-black">افزودن اسلحه جدید</h1>
      <form action={createWeapon} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">نام اسلحه</label>
          <input name="name" required className="w-full bg-black/40 border border-gaming-border rounded-xl px-4 py-3 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">اسلاگ (انگلیسی بدون فاصله مثلا m4)</label>
          <input name="slug" required className="w-full bg-black/40 border border-gaming-border rounded-xl px-4 py-3 text-white" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">دسته‌بندی</label>
            <select name="category_id" required className="w-full bg-black/40 border border-gaming-border rounded-xl px-4 py-3 text-white">
              {categories?.map((c: any) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">حالت بازی</label>
            <select name="game_mode_id" required className="w-full bg-black/40 border border-gaming-border rounded-xl px-4 py-3 text-white">
              {gameModes?.map((g: any) => <option key={g.id} value={g.id}>{g.name}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">عکس اسلحه</label>
          <input name="image" type="file" accept="image/*" className="w-full bg-black/40 border border-gaming-border rounded-xl px-4 py-3 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">توضیحات</label>
          <textarea name="description" rows={3} className="w-full bg-black/40 border border-gaming-border rounded-xl px-4 py-3 text-white"></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">نقاط قوت</label>
            <input name="pros" className="w-full bg-black/40 border border-gaming-border rounded-xl px-4 py-3 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">نقاط ضعف</label>
            <input name="cons" className="w-full bg-black/40 border border-gaming-border rounded-xl px-4 py-3 text-white" />
          </div>
        </div>
        <SubmitButton text="ذخیره اسلحه" loadingText="در حال ذخیره..." />
      </form>
    </div>
  );
}
