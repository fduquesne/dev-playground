import type { Metadata } from "next";
import Header from "./_components/layout/header";
import "./globals.css";

export const instant = false;

export const metadata: Metadata = {
  title: "01 Fundamentals",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-neutral-900 text-neutral-50">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
