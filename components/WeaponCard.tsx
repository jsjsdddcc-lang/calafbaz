import Link from 'next/link';
import Image from 'next/image';

export default function WeaponCard({ weapon, mode }: { weapon: any; mode: string }) {
  return (
    <Link href={`/${mode}/weapons/${weapon.slug}`} className="glass-panel rounded-2xl p-4 flex flex-col justify-between hover:border-gaming-accent transition group">
      <div className="relative h-40 w-full mb-4 bg-black/20 rounded-xl overflow-hidden">
        {weapon.image_url ? (
          <Image src={weapon.image_url} alt={weapon.name} fill className="object-contain p-2 group-hover:scale-105 transition" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-600 text-xs">بدون تصویر</div>
        )}
      </div>
      <div>
        <span className="text-[10px] px-2 py-0.5 bg-gaming-accent/20 text-gaming-accent rounded-full font-bold">
          {weapon.categories?.name}
        </span>
        <h3 className="font-bold text-lg mt-1">{weapon.name}</h3>
      </div>
    </Link>
  );
}
