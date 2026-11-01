import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "./_components/footer/footer";
import { Header } from "./_components/header";
import QueryProvider from "@/providers/react-query-provider";
import NextTopLoader from "nextjs-toploader";
import { Notifications } from "./_components/notification/notifications";
import AuthProvider from "@/providers/auth-provider";

const vazirmatn = localFont({
  src: "./fonts/Vazirmatn.woff2",
  variable: "--font-vazirmatn",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "زرنگو | Zerango",
    template: "%s | Zerango",
  },
  description: "زرنگو؛ نمونه معماری فرانت‌اند با Next.js و TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable + " dark"}>
      <body className="flex min-h-screen flex-col bg-base-100 text-base-content">
        <a className="skip-link" href="#main-content">رفتن به محتوای اصلی</a>
        <NextTopLoader showSpinner={false} color="var(--color-primary)" />
        <Notifications />
        <AuthProvider>
          <QueryProvider>
            <Header />
            <main id="main-content" className="site-main" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
