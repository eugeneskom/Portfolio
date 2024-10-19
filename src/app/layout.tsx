import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Eugene Skomorokhov | Front-End Developer & Full-Stack Expert",
  description: "Passionate front-end developer specializing in React, Next.js, and modern web technologies. Creating responsive, user-friendly applications with clean, efficient code. Expertise in full-stack development, e-commerce solutions, and custom dashboards.",
  keywords: [
    "Front-End Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Web Development",
    "E-commerce",
    "Custom Dashboards",
    "Eugene Skomorokhov",
    "SPA Development",
    "MERN Stack",
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.eugeneskom.com', // Replace with your actual domain
    siteName: 'Eugene Skomorokhov Portfolio',
    title: "Eugene Skomorokhov | Front-End Developer & Full-Stack Expert",
    description: "Crafting responsive, user-friendly web applications with React, Next.js, and modern technologies. Full-stack expertise in e-commerce, custom dashboards, and more.",
    images: [
      {
        url: "/image/logo.jpg", // Replace with actual path to your Open Graph image
        width: 1200,
        height: 630,
        alt: "Eugene Skomorokhov - Front-End Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Replace with your Twitter handle
    title: "Eugene Skomorokhov | Front-End Developer & Full-Stack Expert",
    description: "Crafting responsive, user-friendly web applications with React, Next.js, and modern technologies. Full-stack expertise in e-commerce, custom dashboards, and more.",
    images: ["/image/logo.jpg"], // Use the same image as OpenGraph
  },

  other: {
    'pinterest-rich-pin': 'true',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:site_name': 'Eugene Skomorokhov Portfolio',
    'linkedin:owner': 'urn:li:page:d_flagship3_profile_view_base_contact_details;98b57415b', // Replace with your LinkedIn profile ID
    'telegram:channel': '@eugeneskom', // Replace with your Telegram channel if you have one
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Full-stach developer Eugene Skomorokhov</title>
        {/* <meta name="description" content={metadata.description} /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
