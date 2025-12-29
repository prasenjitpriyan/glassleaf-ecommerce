import Link from 'next/link';
import LeafAnimation from '../(website)/(components)/leaf-animation';
import '../globals.css';

export const metadata = {
  title: 'GlassLeaf Tea CMS',
  description: 'Sanity Studio for GlassLeaf Tea',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ margin: 0 }} suppressHydrationWarning>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          html, body {
            background-color: var(--background) !important;
          }
          #sanity, .sanity-studio-root {
            background-color: transparent !important;
          }
        `,
          }}
        />
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            opacity: 0.5,
          }}>
          <LeafAnimation />
        </div>
        <div style={{ position: 'relative', zIndex: 1, height: '100vh' }}>
          {children}
        </div>
        <Link
          href="/"
          title="Back to Home"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            background: '#0f4c3a',
            color: '#fff',
            borderRadius: '50%',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s',
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </Link>
      </body>
    </html>
  );
}
