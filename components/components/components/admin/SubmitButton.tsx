'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton({ text, loadingText }: { text: string; loadingText: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3 bg-gaming-accent text-black font-bold rounded-xl shadow-lg hover:opacity-95 transition disabled:opacity-50"
    >
      {pending ? loadingText : text}
    </button>
  );
}
