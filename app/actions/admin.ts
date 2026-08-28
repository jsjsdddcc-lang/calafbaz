'use server';

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

function createClient() {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => cookieStore.set(name, value));
        },
      },
    }
  );
}

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };

  redirect('/admin');
}

export async function logoutAction() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect('/admin/login');
}

export async function createWeapon(formData: FormData) {
  const supabase = createClient();
  
  const name = formData.get('name') as string;
  const slug = formData.get('slug') as string;
  const category_id = formData.get('category_id') as string;
  const game_mode_id = formData.get('game_mode_id') as string;
  const description = formData.get('description') as string;
  const pros = formData.get('pros') as string;
  const cons = formData.get('cons') as string;
  const image = formData.get('image') as File;

  let image_url = '';
  if (image && image.size > 0) {
    const fileName = `${Date.now()}-${image.name}`;
    const { error: uploadError } = await supabase.storage.from('media').upload(fileName, image);
    if (!uploadError) {
      const { data } = supabase.storage.from('media').getPublicUrl(fileName);
      image_url = data.publicUrl;
    }
  }

  const { error } = await supabase.from('weapons').insert({
    name, slug, category_id, game_mode_id, description, pros, cons, image_url, status: 'published'
  });

  if (error) return { error: error.message };
  redirect('/admin/weapons');
}
