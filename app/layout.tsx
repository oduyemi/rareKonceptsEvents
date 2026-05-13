import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import type { Metadata } from "next";
import { ClientSideLayout } from "@/components/ClientSideLayout";
import { Providers } from "@/components/Providers";


export const metadata: Metadata = {
  title: "Top Event Management Company in Lagos, Nigeria  | Rare Koncepts Events",
  description: "Experience unparalleled event planning in Lagos. Rare Koncepts Events specializes in luxury weddings and corporate events. Let us turn your vision into a reality. Book today!",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body suppressHydrationWarning>
    <Providers>
        <ClientSideLayout>{children}</ClientSideLayout>
    </Providers>
  </body>
</html>
  );
}