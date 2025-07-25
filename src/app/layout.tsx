import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { HeroProvider } from '@/contexts/HeroContext';
import { HeroUIProvider } from '@heroui/react';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Geoffrey Farrel',
    template: 'Geo Portfolio | %s',
  },
  description: 'Personal portfolio of Geoffrey Farrel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <HeroProvider>
          <main className="flex flex-col items-center scroll-smooth">
            {children}
          </main>
        </HeroProvider>
      </body>
    </html>
  );
}
