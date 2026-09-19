import type { Metadata } from "next";
import { Poppins, Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://clipeconsult.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RACLIPE CONSULT | Technology, Business Solutions & Digital Systems",
    template: "%s | RACLIPE CONSULT",
  },
  description:
    "RACLIPE CONSULT designs, builds, secures and supports technology that works in the real world. Software development, digital experiences, infrastructure, cybersecurity, cloud solutions & digital transformation for businesses and governments in Ghana and across Africa.",
  keywords: [
    "RACLIPE CONSULT",
    "Technology Ghana",
    "Business Solutions Ghana",
    "Digital Systems Ghana",
    "Software Development Ghana",
    "Digital Transformation Ghana",
    "Cybersecurity Ghana",
    "Cloud Solutions Ghana",
    "IT Infrastructure Ghana",
    "ERP Ghana",
    "CRM Ghana",
    "Enterprise Systems Ghana",
    "Ho Volta Region",
    "Accra IT consulting",
  ],
  authors: [{ name: "RACLIPE CONSULT" }],
  creator: "RACLIPE CONSULT",
  publisher: "RACLIPE CONSULT",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/raclipe-logo.png", type: "image/png", sizes: "1889x833" },
    ],
    apple: [{ url: "/raclipe-logo.png", sizes: "1889x833" }],
    shortcut: ["/favicon.svg"],
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: SITE_URL,
    siteName: "RACLIPE CONSULT",
    title: "RACLIPE CONSULT | Technology, Business Solutions & Digital Systems",
    description:
      "From a business website to a complete enterprise platform, RACLIPE CONSULT designs, builds, secures and supports technology that works in the real world. IDEAS TODAY • SOLUTIONS TOMORROW.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "RACLIPE CONSULT — Technology, Business Solutions & Digital Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RACLIPE CONSULT | Technology, Business Solutions & Digital Systems",
    description:
      "Software development, digital experiences, infrastructure, cybersecurity, cloud & digital transformation for businesses across Ghana and Africa.",
    images: ["/og-image.svg"],
  },
  category: "technology",
  other: {
    "theme-color": "#002060",
    "format-detection": "telephone=no",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RACLIPE CONSULT",
  legalName: "RACLIPE CONSULT",
  slogan: "IDEAS TODAY • SOLUTIONS TOMORROW",
  description:
    "Ghana-based technology company providing software development, digital experiences, infrastructure, cybersecurity, cloud solutions and digital transformation for businesses and governments.",
  url: SITE_URL,
  logo: `${SITE_URL}/raclipe-logo.png`,
  image: `${SITE_URL}/og-image.svg`,
  email: "info@clipeconsult.com",
  telephone: "+233 24 978 3736",
  foundingDate: "2019",
  areaServed: ["Ghana", "Ho", "Volta Region", "Accra", "Africa"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Street, Ho",
    addressLocality: "Ho",
    addressRegion: "Volta Region",
    postalCode: "00233",
    addressCountry: "GH",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+233 24 978 3736",
      email: "info@clipeconsult.com",
      areaServed: "GH",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "technical support",
      telephone: "+233 53 539 9562",
      email: "clipeconsult@gmail.com",
      areaServed: "GH",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/clipeconsult",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "RACLIPE CONSULT",
  image: `${SITE_URL}/raclipe-logo.png`,
  url: SITE_URL,
  telephone: "+233 24 978 3736",
  email: "info@clipeconsult.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Street, Ho",
    addressLocality: "Ho",
    addressRegion: "Volta Region",
    postalCode: "00233",
    addressCountry: "GH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.6126,
    longitude: 0.4759,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  areaServed: ["Ho", "Volta Region", "Accra", "Ghana", "Africa"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: "RACLIPE CONSULT",
  publisher: { "@id": `${SITE_URL}/#localbusiness` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} ${openSans.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
