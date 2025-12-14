import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import Navbar from './(components)/navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'GlassLeaf Tea | Pure Tea, Clearly Crafted',
  description: 'Premium organic tea presented with transparency and purity.',
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
