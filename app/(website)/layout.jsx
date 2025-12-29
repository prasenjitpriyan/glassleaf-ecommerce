import { geistMono, geistSans } from '../fonts';
import '../globals.css';
import Footer from './(components)/footer';
import Navbar from './(components)/navbar';

export const metadata = {
  title: 'GlassLeaf Tea | Pure Tea, Clearly Crafted',
  description: 'Premium organic tea presented with transparency and purity.',
  icons: {
    icon: '/images/icon.png',
  },
};

import LeafAnimation from './(components)/leaf-animation';
import PageTransition from './(components)/page-transition';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LeafAnimation />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
