import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctors Appointment App",
  description: "Connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
              <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Description */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">MediConnect</h2>
                  <p className="text-sm">
                    Your trusted platform to connect with healthcare professionals—anytime, anywhere.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/" className="hover:text-white">Home</a></li>
                    <li><a href="/about" className="hover:text-white">About Us</a></li>
                    <li><a href="/appointments" className="hover:text-white">Book Appointment</a></li>
                    <li><a href="/contact" className="hover:text-white">Contact</a></li>
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
                  <ul className="space-y-2 text-sm">
                    <li>General Checkup</li>
                    <li>Telemedicine</li>
                    <li>Specialist Consultation</li>
                    <li>Health Packages</li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Email: support@mediconnect.com</li>
                    <li>Phone: +91 98765 43210</li>
                    <li>Address: 123 Wellness St, Bengaluru, India</li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} MediConnect. All rights reserved.
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
