export default function StoreLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar moved to root layout */}
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
