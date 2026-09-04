import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Manrope, Poppins } from "next/font/google";
import './globals.css';

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: 'Muhammad Zacky Al Ghifari | Backend Developer',
  description: 'Portfolio of Muhammad Zacky Al Ghifari - Backend Developer & Computer Science Student at Universitas Brawijaya.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${poppins.variable}`}>
      <body className="bg-[#080808] text-white font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-white selection:text-black relative">
        {/* Subtle Ambient Background Lighting & Dot Texture */}
        <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
        <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-white/[0.035] to-transparent rounded-full blur-3xl pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <Navbar />
          <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full pt-4 sm:pt-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}