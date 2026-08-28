import { getWeaponsByMode } from '@/app/actions/public';
import WeaponCard from '@/components/WeaponCard';
import SearchInput from '@/components/SearchInput';

export default async function MultiplayerPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || '';
  const weapons = await getWeaponsByMode('multiplayer', query);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-black">اسلحه‌های مولتی‌پلیر</h1>
          <p className="text-gray-400 text-sm">بهترین گان‌ها برای درگیری‌های سریع و رقابتی</p>
        </div>
        <SearchInput />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {weapons.map((weapon: any) => (
          <WeaponCard key={weapon.id} weapon={weapon} mode="multiplayer" />
        ))}
        {weapons.length === 0 && (
          <p className="text-gray-500 col-span-full text-center py-12">هیچ اسلحه‌ای پیدا نشد.</p>
        )}
      </div>
    </div>
  );
}
