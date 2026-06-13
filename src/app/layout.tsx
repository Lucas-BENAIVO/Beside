import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { headerData } from "@/data/navigation";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Beside — Vous aidez votre proche. On vous aide à tenir.",
  description:
    "Beside aide les aidants familiaux à suivre la santé de leur proche, organiser les rendez-vous et partager la charge avec la famille.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${plusJakarta.variable} bg-background antialiased`}>
        <Header data={headerData} />
        {children}
      </body>
    </html>
  );
}
