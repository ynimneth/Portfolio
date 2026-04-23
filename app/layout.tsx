import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yenula Nimneth | Developer Portfolio",
  description:
    "Portfolio of Yenula Nimneth, an IT undergraduate focused on modern web development, practical software projects, and polished user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
