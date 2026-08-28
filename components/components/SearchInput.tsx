'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="relative w-full md:w-72">
      <Search className="absolute right-3 top-3.5 text-gray-400" size={18} />
      <input
        type="text"
        placeholder="جستجوی اسلحه..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('q')?.toString()}
        className="w-full bg-black/40 border border-gaming-border rounded-xl pr-10 pl-4 py-2.5 text-sm text-white focus:outline-none focus:border-gaming-accent"
      />
    </div>
  );
}
