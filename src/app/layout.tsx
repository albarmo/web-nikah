import type { Metadata } from "next";
import { La_Belle_Aurore, Lora } from "next/font/google";
import "./globals.css";

const laBeleAurore = La_Belle_Aurore({
  variable: "--font-la-belle-aurore",
  subsets: ["latin"],
  weight: ['400']
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Albar & Yulia",
  description: "Were invite you to the Wedding of Albar & Yulia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${laBeleAurore.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
