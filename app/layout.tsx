import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "مرجع کالاف دیوتی موبایل",
  description: "بهترین لودآوت‌ها و راهنمای اسلحه‌های کالاف دیوتی موبایل",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gaming-dark text-white min-h-screen selection:bg-gaming-accent selection:text-black">
        <Navbar />
        <main className="pb-12">{children}</main>
      </body>
    </html>
  );
}
