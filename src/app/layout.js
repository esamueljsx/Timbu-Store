import "./globals.css";
import { Suspense } from "react";
import { Raleway } from "next/font/google";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Loader from "./components/ui/NProgress";
import { CartPageProvider } from "@/context/CartPageContext";

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
        <Loader>
          <Suspense>
            <CartPageProvider>
              <Navbar />
              {children}
              <Footer />
            </CartPageProvider>
          </Suspense>
        </Loader>
      </body>
    </html>
  );
}
