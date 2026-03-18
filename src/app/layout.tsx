import { cormorantGaramond, inter, cinzel } from "@/lib/fonts";
import { siteMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${cormorantGaramond.variable} ${inter.variable} ${cinzel.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
