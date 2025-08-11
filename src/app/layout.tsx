import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/component/Navbar";
import { Gorstek } from "@/assets/fonts/font";
export const metadata: Metadata = {
  title: "Daffa Rihadatul Fairus",
  description:
    "Portofolio pribadi yang menampilkan proyek-proyek terbaik saya, dibangun dengan Next.js dan shadcn UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Gorstek.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
