import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "social | iberdi seven",
  description: "Social ibedi iasd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
