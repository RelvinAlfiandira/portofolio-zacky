import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/ui/Preloader';
import BackgroundBeams from '@/components/BackgroundBeams';
import { Manrope, Poppins, Geist } from "next/font/google";
import './globals.css';
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const poppins = Poppins({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-poppins" });

export const metadata = {
  title: 'Muhammad Zacky Al Ghifari',
  description: 'Portfolio of Muhammad Zacky Al Ghifari - Computer Science Student at Universitas Brawijaya.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" 
    data-scroll-behavior="smooth"
    className={cn(manrope.variable, poppins.variable, "font-sans", geist.variable)}>
      <body className="bg-[#080808] text-white font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-white selection:text-black relative overflow-x-hidden">
        
        <Preloader />
        
        <div className="fixed inset-0 w-full h-[100dvh] pointer-events-none z-0 overflow-hidden">
          <BackgroundBeams />
        </div>
        
        <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-[1]" />
        <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-white/[0.035] to-transparent rounded-full blur-3xl pointer-events-none z-[1]" />
        <div className="relative z-10 flex flex-col min-h-screen w-full">
          
          <Navbar />
          
          <main className="w-full flex-1 p-0 m-0">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}