import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Muhammad Zacky Al Ghifari | Backend Developer',
  description: 'Portfolio of Muhammad Zacky Al Ghifari - Backend Developer & Computer Science Student at Universitas Brawijaya.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 font-sans antialiased min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}