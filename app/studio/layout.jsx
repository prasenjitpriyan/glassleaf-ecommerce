import Link from 'next/link';

export const metadata = {
  title: 'GlassLeaf Tea CMS',
  description: 'Sanity Studio for GlassLeaf Tea',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
        <Link
          href="/"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            padding: '10px 20px',
            background: '#000',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            fontFamily: 'system-ui, sans-serif',
            fontSize: '14px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}>
          Back to Home
        </Link>
      </body>
    </html>
  );
}
