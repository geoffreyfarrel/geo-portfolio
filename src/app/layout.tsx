import type { Metadata } from 'next';
import { Imperial_Script, Inter } from 'next/font/google';
import './globals.css';
import { HeroProvider } from '@/contexts/HeroContext';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const imperialScript = Imperial_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-imperial',
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
      <body
        className={`${inter.variable} ${imperialScript.variable} antialiased`}
      >
        <HeroProvider>
          <main className="flex flex-col items-center scroll-smooth font-sans">
            {children}
          </main>
        </HeroProvider>
      </body>
    </html>
  );
}
