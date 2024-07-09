import { Raleway } from "next/font/google";
import "./globals.css";
import Providers from "./components/ui/NProgress";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import { CartProvider } from "@/context/CartContext";

const trispace = Raleway({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin", "latin-ext", "vietnamese"],
  preload: false,
  variable: "--font-trispace",
});

export const metadata = {
  title: {
    template: "%s - HNG Bookstore",
    default: "HNG Bookstore",
  },
  description: "HNG Bookstore",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${trispace.variable} font-timbu bg-main`}>
        <Providers>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
