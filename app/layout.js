import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(){
  return {
  metadataBase: new URL("https://www.zemy-group.com"),
  title: "ZEMY GROUP LLC",
  description: "ZEMY Group LLC is a leading holding company headquartered in NY. With a spectrum of subsidiaries spanning healthcare, daily commodities, pet food, generic drugs, medical diagnostics, real estate, and hospital management consultancy, we're redefining industries and transforming possibilities.",
  keyword: "Holding company,ZEMY Group LLC,Headquarters in NY,Subsidiaries,Daily commodities,Pet Treat,Bully sticks,Pet food,Generic drugs,Elite Treat bully sticks,Medical diagnostics,Real estate,Hospital management consultancy,Diverse portfolio,Market segments,Industry leader,Business conglomerate,Investment opportunities,Strategic partnerships,Innovation,Growth-oriented,Corporate governance",
  appleMobileWebAppTitle: 'ZEMY GROUP LLC',
  openGraph: {
    title: "ZEMY GROUP LLC",
    description: "Discover the diverse portfolio of ZEMY Group LLC, a leading holding company headquartered in NY. With a spectrum of subsidiaries spanning healthcare, daily commodities, pet food, generic drugs, medical diagnostics, real estate, and hospital management consultancy, we're redefining industries and transforming possibilities.",
    url: "https://www.zemy-group.com",
    siteName: "ZEMY GROUP LLC",
    images: "https://www.zemy-group.com/logo.png",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `https://www.zemy-group.com/`,
    languages: {
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "ZEMY GROUP LLC",
    images: "https://www.zemy-group.com/logo.png"
  }
}
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
