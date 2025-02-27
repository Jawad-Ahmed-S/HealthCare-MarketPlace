import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import { CartProvider } from "./CartContext";
import { SearchProvider } from "./SearchContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HealthCare - Marketplace",
  description: "Premium health care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <SearchProvider>

        <CartProvider>

        {children}
        </CartProvider>
        </SearchProvider>
        </body>
    </html>
  );
}
