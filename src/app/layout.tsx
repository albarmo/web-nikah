import type { Metadata } from "next";
import { La_Belle_Aurore, Lora } from "next/font/google";
import { Toaster } from 'react-hot-toast';
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
  title: "The Wedding of Albar & Yulia",
  description: "Were invite you to the Wedding of Albar & Yulia",
  openGraph: {
    type: "website",
    url: "albaryulia.site",
    title: "The Wedding of Albar & Yulia",
    description: "Were invite you to the Wedding of Albar & Yulia",
    siteName: "Albar & Yulia",
    images: [{
      url: "https://i.ibb.co.com/JHXj3dn/image-3.jpg",
    }],
  }
};

const toastConfig = {
  success: {
    style: {
      background: '#fffff',
      color: '#0a0a0a'
    },
  },
}

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
        <Toaster toastOptions={toastConfig} />
        {children}
      </body>
    </html>
  );
}
