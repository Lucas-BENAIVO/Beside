import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beside",
  description: "Beside — formations et accompagnement",
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
      <body>{children}</body>
    </html>
  );
}
