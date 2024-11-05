import type { Metadata } from "next";
import "./globals.css";
import "./animations.css";

export const metadata: Metadata = {
  title: "Live Polls",
  description: "Live Polls Free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
