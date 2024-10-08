import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/core/Navbar/Navbar";
import Footer from "@/components/core/Footer/Footer";
import { AppProps } from 'next/app';
import { api } from '../utils/trpc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react";
import { httpBatchLink } from "@trpc/client";

const queryClient = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AITools",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              authorization: getAuthCookie(),
            };
          },
        }),
      ],
    }),
  );

  return (
    
    <html lang="en">
      <body className={inter.className}>
        <api.Provider client={trpcClient} queryClient={queryClient}>
         <QueryClientProvider client={queryClient}>
            <Navbar/>
            {children}
            <Footer/>
          </QueryClientProvider>
        </api.Provider>
      </body>
    </html>
  );
}
function getAuthCookie(): string | string[] | undefined {
  throw new Error("Function not implemented.");
}

