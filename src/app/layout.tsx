"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import ToasterContext from "./api/contex/ToasetContex";
import { useEffect, useState } from "react";
import PreLoader from "@/components/Common/PreLoader";
import { AnalyticsProvider } from './providers';

import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import Yandex from '@/components/Analytics/Yandex';
import Google from '@/components/Analytics/Google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      <head>
        <Yandex />
        <Google />
      </head>
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="light"
            >
              <AnalyticsProvider />
              <ToasterContext />
              <Header />
              {children}
              <Footer />
              <ScrollToTop />
            </ThemeProvider>
          </SessionProvider>
        )}
      </body>
    </html>
  );
}
