import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(){
  return {
  metadataBase: new URL("https://www.zemy-group.com"),
  title: "ZEMY GROUP LLC - Pioneering Solutions and Sustainable Business Practice",
  description: "ZEMY Group LLC is a leading holding company headquartered in NY. With a combination of subsidiaries spanning healthcare, daily commodities, pet food, generic drugs, medical diagnostics, real estate, and hospital management consultancy, we're redefining industries and transforming possibilities.",
  keyword: "Holding company,ZEMY Group LLC,Headquarters in NY,Subsidiaries,Daily commodities,Pet Treat,Bully sticks,Pet food,Generic drugs,Elite Treat bully sticks,Medical diagnostics,Real estate,Hospital management consultancy,Diverse portfolio,Market segments,Industry leader,Business conglomerate,Investment opportunities,Strategic partnerships,Innovation,Growth-oriented,Corporate governance",
  appleMobileWebAppTitle: 'ZEMY GROUP LLC',
  openGraph: {
    title: "ZEMY GROUP LLC - Pioneering Solutions and Sustainable Business Practice",
    description: "ZEMY Group LLC is a leading holding company headquartered in NY.With a combination of subsidiaries spanning healthcare,daily commodities,pet food,generic drugs,medical diagnostics,real estate,and hospital management consultancy.",
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

const schemaOrgData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://elitetreatforpets.com/#organization",
      "name": "Elite Treat For Pets",
      "sameAs": ["https://www.facebook.com/PetTreat"]
    },
    {
      "@type": "WebSite",
      "@id": "https://elitetreatforpets.com/#website",
      "url": "https://elitetreatforpets.com",
      "name": "Elite Treat For Pets",
      "publisher": {
        "@id": "https://elitetreatforpets.com/#organization"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://elitetreatforpets.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://elitetreatforpets.com",
            "name": "Home"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://elitetreatforpets.com/",
            "name": "Elite Treat For Pets"
          }
        }
      ]
    },
    {
      "@type": "CollectionPage",
      "@id": "https://elitetreatforpets.com/#webpage",
      "url": "https://elitetreatforpets.com/",
      "name": "Premium all-natural bully sticks for dogs. Healthy, delicious, and long-lasting. | Elite Treat For Pets",
      "isPartOf": {
        "@id": "https://elitetreatforpets.com/#website"
      },
      "inLanguage": "en-US",
      "breadcrumb": {
        "@id": "https://elitetreatforpets.com/#breadcrumb"
      }
    }
  ]
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Script
        id="my-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
      />
      <link rel="alternate" type="application/rss+xml" title="ZEMY GROUP &raquo; Feed" href="https://rss.app/feeds/SRjwJEauF0ZESkkJ.xml" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
