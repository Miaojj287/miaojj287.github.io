
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yijun Miao / 缪亦隽 - Portfolio",
  description: "Minimalist portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Permanent+Marker&family=Kalam:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
