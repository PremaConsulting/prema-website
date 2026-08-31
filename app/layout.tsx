import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import FloatingContact from "@/components/layout/FloatingContact";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Accounting & Bookkeeping Services | Tax Consultants in UAE",
    template: "%s | PREMA Consulting",
  },
  description:
    "PREMA Consulting offers expert advisory and compliance services in finance, taxation, audit, and digital transformation in the UAE.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
