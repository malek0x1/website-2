"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Script from "next/script";
import { ReactNode } from "react";
import Footer from "./components/Footer";
import "./globals.css";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <title>Starlake AI</title>
        <meta
          name="description"
          content="Starlake AI - AI-powered solutions for big data."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ fontFamily: "var(--font-geist-sans)" }}>
        <main>{children}</main>
        <Footer />

        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=UA-207943293-1`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-207943293-1', {
              anonymize_ip: true, // Enables IP anonymization
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Launchlist Widget Script */}
        <Script
          src="https://getlaunchlist.com/js/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
