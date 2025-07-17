import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import Loader from "./Loader";


export const metadata: Metadata = {
  title: "AARAMBH WORKS",
  description: "A full-service digital innovation partner ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sf">
        <Loader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
