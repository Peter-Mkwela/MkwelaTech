import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'MkwelaTech - Digital Solutions, Zero Complexity',
  description:
    'From Web & Software Development to Data Recovery & Graphics — we provide innovative, reliable, and affordable digital solutions.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-white bg-gradient-to-b from-[#000066] via-[#000033] to-black min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
