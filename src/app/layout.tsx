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
    default: "Clipe Consult | IT Consulting, Website Design & Software Development Ghana",
    template: "%s | Clipe Consult",
  },
  description:
    "Clipe Consult is a Ghana-based IT consulting company delivering website design, software development, IT support, web hosting, network solutions and IT training for businesses, schools, NGOs, churches & government institutions.",
  keywords: [
    "IT Company Ghana",
    "IT Consulting Ghana",
    "Website Design Ghana",
    "Software Development Ghana",
    "Web Hosting Ghana",
    "Domain Registration Ghana",
    "Network Solutions Ghana",
    "Computer Repairs Ghana",
    "Managed IT Services Ghana",
    "Business Technology Solutions Ghana",
    "Ho Volta Region IT",
    "Accra IT consulting",
  ],
  authors: [{ name: "Clipe Consult" }],
  creator: "Clipe Consult",
  publisher: "Clipe Consult",
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
      { url: "/logo-icon.png", type: "image/png", sizes: "609x699" },
    ],
    apple: [{ url: "/logo-icon.png", sizes: "609x699" }],
    shortcut: ["/favicon.svg"],
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: SITE_URL,
    siteName: "Clipe Consult",
    title: "Clipe Consult | Empowering Businesses Through Innovative IT Solutions",
    description:
      "Reliable technology solutions that help businesses grow, improve productivity, strengthen cybersecurity, and embrace digital transformation in Ghana.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Clipe Consult — IT Consulting in Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clipe Consult | IT Consulting in Ghana",
    description:
      "Website design, software development, IT support, hosting, networks & training for businesses across Ghana.",
    images: ["/og-image.svg"],
    creator: "@clipeconsult",
  },
  category: "technology",
  other: {
    "theme-color": "#1B2A5C",
    "format-detection": "telephone=no",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Clipe Consult",
  legalName: "Clipe Consult",
  slogan: "Building Innovations | Engineering Excellence",
  description:
    "Ghana-based IT consulting company providing website design, software development, IT support, web hosting, network solutions, IT training and business technology services.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.svg`,
  email: "info@clipeconsult.com",
  telephone: "+233 244 000 000",
  foundingDate: "2019",
  areaServed: ["Ghana", "Ho", "Volta Region", "Accra"],
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
      telephone: "+233 244 000 000",
      email: "info@clipeconsult.com",
      areaServed: "GH",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "technical support",
      telephone: "+233 244 111 111",
      email: "support@clipeconsult.com",
      areaServed: "GH",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/clipeconsult",
    "https://www.linkedin.com/company/clipeconsult",
    "https://twitter.com/clipeconsult",
    "https://www.instagram.com/clipeconsult",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Clipe Consult",
  image: `${SITE_URL}/logo.png`,
  url: SITE_URL,
  telephone: "+233 244 000 000",
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
  areaServed: ["Ho", "Volta Region", "Accra", "Ghana"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: "Clipe Consult",
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
