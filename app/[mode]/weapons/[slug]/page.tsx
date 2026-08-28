import { getWeaponDetail } from '@/app/actions/public';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CheckCircle, XCircle, Crosshair } from 'lucide-react';

export default async function WeaponDetailPage({ params }: { params: { mode: string; slug: string } }) {
  const weapon = await getWeaponDetail(params.slug);
  if (!weapon) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="glass-panel p-6 rounded-3xl space-y-6">
        <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden bg-black/40">
          {weapon.image_url ? (
            <Image src={weapon.image_url} alt={weapon.name} fill className="object-contain p-4" />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">بدون تصویر</div>
          )}
        </div>

        <div>
          <span className="text-xs px-3 py-1 bg-gaming-accent/20 text-gaming-accent rounded-full font-bold">
            {weapon.categories?.name}
          </span>
          <h1 className="text-3xl font-black mt-2">{weapon.name}</h1>
          <p className="text-gray-300 mt-2 text-sm leading-relaxed">{weapon.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gaming-border">
          <div className="glass-panel p-4 rounded-xl space-y-2">
            <h3 className="flex items-center gap-2 text-green-400 font-bold"><CheckCircle size={18} /> نقاط قوت</h3>
            <p className="text-sm text-gray-300">{weapon.pros || 'ثبت نشده'}</p>
          </div>
          <div className="glass-panel p-4 rounded-xl space-y-2">
            <h3 className="flex items-center gap-2 text-red-400 font-bold"><XCircle size={18} /> نقاط ضعف</h3>
            <p className="text-sm text-gray-300">{weapon.cons || 'ثبت نشده'}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-black flex items-center gap-2"><Crosshair className="text-gaming-accent" /> لودآوت‌های پیشنهادی</h2>
        <div className="space-y-4">
          {weapon.loadouts && weapon.loadouts.length > 0 ? (
            weapon.loadouts.map((loadout: any) => (
              <div key={loadout.id} className="glass-panel p-6 rounded-2xl space-y-3">
                <h3 className="text-lg font-bold text-gaming-accent">{loadout.name}</h3>
                <p className="text-sm text-gray-300">{loadout.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">لودآوتی برای این اسلحه ثبت نشده است.</p>
          )}
        </div>
      </div>
    </div>
  );
}
