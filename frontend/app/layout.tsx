import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/navbar';

import { ThemeProvider } from '@/components/theme-provider';
import { settings } from '@/config/settings';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://powerpulse.mihaildanilov.com/'),
  title: {
    default: 'PowerPulse',
    template: `%s | 'PowerPulse',`,
  },
  description:
    'Utilizing real-time data and predictive analytics, we buy low and sell high on your behalf, 24/7',
  keywords: ['Next.js', 'NestJs', 'Tailwind CSS', 'Vercel', 'Prisma', 'PostgreSQL'],

  creator: 'Mihails Danilovs',
  icons: {
    icon: './favicon.ico',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen flex-col bg-background text-primary`}>
        {settings.themeToggleEnabled ? (
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
          </ThemeProvider>
        ) : (
          <ThemeProvider attribute="class" forcedTheme="light" enableSystem>
            <Navbar />
            {children}
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
