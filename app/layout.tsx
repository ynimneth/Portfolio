import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Yenula Nimneth | Developer Portfolio",
  description:
    "Portfolio of Yenula Nimneth, an IT undergraduate focused on modern web development, practical software projects, and polished user experiences.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Yenula Nimneth | Developer Portfolio",
    description:
      "Portfolio of Yenula Nimneth, an IT undergraduate focused on modern web development, practical software projects, and polished user experiences.",
    siteName: "Yenula Nimneth Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yenula Nimneth | Developer Portfolio",
    description:
      "Portfolio of Yenula Nimneth, an IT undergraduate focused on modern web development, practical software projects, and polished user experiences.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="relative h-full antialiased"
      data-theme="dark"
      data-cursor="on"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  document.documentElement.dataset.theme = "dark";
                  localStorage.removeItem("portfolio-theme");
                  document.documentElement.dataset.cursor = localStorage.getItem("portfolio-cursor-enabled") === "false" ? "off" : "on";
                } catch (error) {}
              })();
            `,
          }}
        />
      </head>
      <body className="relative flex min-h-full flex-col">{children}</body>
    </html>
  );
}
