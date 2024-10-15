import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

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
  // openGraph: {
  //   title: "Eugene Skomorokhov | Front-End Developer & Full-Stack Expert",
  //   description: "Crafting responsive, user-friendly web applications with React, Next.js, and modern technologies. Full-stack expertise in e-commerce, custom dashboards, and more.",
  //   images: [
  //     {
  //       url: "/path-to-your-og-image.jpg", // Replace with actual path to your Open Graph image
  //       width: 1200,
  //       height: 630,
  //       alt: "Eugene Skomorokhov - Front-End Developer",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Eugene Skomorokhov | Front-End Developer & Full-Stack Expert",
  //   description: "Crafting responsive, user-friendly web applications with React, Next.js, and modern technologies. Full-stack expertise in e-commerce, custom dashboards, and more.",
  //   images: ["/path-to-your-twitter-image.jpg"], // Replace with actual path to your Twitter card image
  // },
}

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
      </body>
    </html>
  );
}
