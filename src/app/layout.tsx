import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grade 9B Study Habits Report",
  description: "Interactive mobile-first web dashboard for Grade 9B study habits report.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
