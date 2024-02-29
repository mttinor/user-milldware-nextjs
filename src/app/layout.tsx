"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Toast from "@/components/base/Toast";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/navbar";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showHeader = !["/login"].includes(pathname);
  const queryClient = new QueryClient();

  const lists = useRef([
    {
      href: "/",
      name: "لیست کاربران",
      roles: ["admin", "view", "edit"],
    },
    {
      href: "/dashboard",
      name: "تنظیمات",
      roles: ["admin"],
    },
  ]);
  return (
    <html lang="en">
      <head></head>
      <body>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <header>{showHeader && <Navbar lists={lists.current} />}</header>
            {children}
            <Toast />
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
