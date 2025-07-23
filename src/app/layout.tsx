import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { HeroProvider } from '@/contexts/HeroContext';

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
      <body className={`${inter.className} overflow-hidden antialiased`}>
        <HeroProvider>
          <main className="scrollbar-hide flex h-screen flex-col items-center overflow-y-scroll scroll-smooth">
            {children}
          </main>
        </HeroProvider>
      </body>
    </html>
  );
}
