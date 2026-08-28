'use server';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export async function getWeaponsByMode(modeSlug: string, query: string = '') {
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  let q = supabase
    .from('weapons')
    .select('*, categories!inner(*), game_modes!inner(*)')
    .eq('game_modes.slug', modeSlug)
    .eq('status', 'published');

  if (query) {
    q = q.ilike('name', `%${query}%`);
  }

  const { data, error } = await q;
  if (error) return [];
  return data;
}

export async function getWeaponDetail(slug: string) {
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { data, error } = await supabase
    .from('weapons')
    .select('*, categories(*), game_modes(*), loadouts(*)')
    .eq('slug', slug)
    .single();

  if (error) return null;
  return data;
}
