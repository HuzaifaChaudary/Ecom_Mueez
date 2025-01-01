import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic"; 
import { Toaster } from "react-hot-toast";
import ScrollToTop from "@/components/ScrollTotop/ScrollTotop";

// Dynamically import ReduxProvider with ssr: false
const ReduxProvider = dynamic(() => import("@/components/Provider"), { 
  ssr: false 
});

const ClientWrapper = dynamic(() => import("@/components/Clientwrapper/ClientWrapper"), {
  ssr: false, // Ensure ClientWrapper is client-side only
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "An-Luxuries: Where Luxury Meets Affordability",
  description: "Discover the finest selection of branded bags, glasses, and watches at An-Luxuries. We bring you the perfect blend of luxury and affordability, ensuring you stand out with style and elegance. Elevate your fashion game with our premium, handpicked accessories."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://brightspotcdn.com" />
      <link rel="preconnect" href="https://sothebys-com.brightspotcdn.com" />
      <body className={inter.className}>
        <ReduxProvider>
          <Toaster />
          <ClientWrapper>{children}</ClientWrapper>
        </ReduxProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
