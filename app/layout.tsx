import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import FloatingButtons from './../components/ui/FloatingButtons.jsx';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elite Work Solutions - Integrated Professional Services Throughout Portugal',
  description: 'Multi-service company providing operational, technical, and management services for construction, hospitality, healthcare, industrial, and corporate sectors.',
  icons:{
    icon : `favicon.png`
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation/>
        {children}
        <Footer/>
        <FloatingButtons/>
        <Toaster />
      </body>
    </html>
  );
}
