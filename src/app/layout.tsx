import Analytics from "@/components/analytics/Analytics";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata, Viewport } from "next";
import "../styles/optimizations.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Terranest - Premium Terrarium Collections",
    template: "%s | Terranest"
  },
  description: "Creating premium terrarium experiences that bring nature's tranquility into modern spaces. Discover our curated collections, workshops, and care guides.",
  keywords: "terrarium, premium, plants, nature, home decor, workshops, corporate gifts, miniature ecosystem, glass gardens",
  authors: [{ name: "Terranest" }],
  creator: "Terranest",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://terranest.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Terranest - Premium Terrarium Collections",
    description: "Creating premium terrarium experiences that bring nature's tranquility into modern spaces.",
    type: "website",
    locale: "en_US",
    siteName: "Terranest",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://terranest.vercel.app',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Terranest - Premium Terrarium Collections',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terranest - Premium Terrarium Collections",
    description: "Creating premium terrarium experiences that bring nature's tranquility into modern spaces.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification IDs when ready
    // google: 'your-google-verification-id',
    // yandex: 'your-yandex-verification-id',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2D5016' },
    { media: '(prefers-color-scheme: dark)', color: '#2D5016' }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="antialiased font-sans touch-optimized">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
