import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Michroma } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const michroma = Michroma({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sigilo — Software a la medida",
  description:
    "Diseñamos y construimos software a la medida. Apps móviles, sistemas de gestión, automatización y tecnología cívica.",
  openGraph: {
    title: "Sigilo — Software a la medida",
    description:
      "Diseñamos y construimos software a la medida. Apps móviles, sistemas de gestión, automatización y tecnología cívica.",
    url: "https://sigilo.mx",
    siteName: "Sigilo",
    images: [
      {
        url: "https://sigilo.mx/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sigilo — Software a la medida",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sigilo — Software a la medida",
    description:
      "Diseñamos y construimos software a la medida. Apps móviles, sistemas de gestión, automatización y tecnología cívica.",
    images: ["https://sigilo.mx/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${inter.variable} ${jetbrains.variable} ${michroma.variable} h-full antialiased`}
    >
      <head />
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
