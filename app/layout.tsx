'use client';

import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/contexts/ThemeContext';
import TopBar from '@/components/TopBar';

const geist = Geist({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>BuildPro Construction - Quality Building Services</title>
        <meta name="description" content="Professional construction services with over 20 years of experience. Residential, commercial, and renovation projects." />
      </head>
      <body className={geist.className}>
        <ThemeProvider>
          <TopBar />    
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}