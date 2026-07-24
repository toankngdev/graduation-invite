import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Prevents invisible text rendering while loading fonts
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Graduation Invitation",
    default: "Graduation Invitation | Nguyen Khanh Toan",
  },
  description:
    "Official graduation ceremony invitation for Nguyen Khanh Toan - Information Technology, Hoa Sen University.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Graduation Invitation | Nguyen Khanh Toan",
    description: "Join me in celebrating my graduation milestone!",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#090d16", // Colors browser addresses bar components on modern devices
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col antialiased bg-[#090d16] text-[#f0f6fc]">
        {children}
      </body>
    </html>
  );
}
