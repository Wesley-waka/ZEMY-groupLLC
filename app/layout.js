import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZEMY Group LLC",
  description: "A holding company with its headquarters in NY. It has many subsidiaries which  encompasses many market segments including healthcare, daily commodities, pet food, generic drugs,medical diagnostics, real estate, hospital management consultancy etc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
