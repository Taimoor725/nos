import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from 'react';
import Loading from "@/app/loading"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ferrari",
  description: "Car agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      <Suspense fallback={<Loading/>}>
        {children}
      </Suspense>
    </body>
  </html>
  );
}
