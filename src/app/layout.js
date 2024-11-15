/*import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar2.jsx"; // Importar Navbar
import Footer from "./components/Footer.jsx"; // Importar Footer

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

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {}
        <main>{children}</main> {}
        <Footer /> {}
      </body>
    </html>
  );
}*/

"use client";
import { usePathname } from "next/navigation"; // Importar usePathname desde next/navigation
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar2.jsx"; // Importar Navbar
import Footer from "./components/Footer.jsx"; // Importar Footer

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

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Obtener la ruta actual
  const noLayoutPages = ["/login", "/register"]; // Definir las páginas que no usan el layout

  // Verificar si la ruta actual es una de las que no deben tener el layout
  const isNoLayoutPage = noLayoutPages.includes(pathname);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {}
        {!isNoLayoutPage && <Navbar />}
        <main>{children}</main>
        {!isNoLayoutPage && <Footer />}
      </body>
    </html>
  );
}
