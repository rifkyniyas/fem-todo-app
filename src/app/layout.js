import "./globals.css";
import { Josefin_Sans } from "next/font/google";

export const metadata = {
  title: "FEM Todo App | Rifky Niyas",
};

const josefinSans = Josefin_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-josefin",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} font-sans min-h-screen bg-
        bg-mobile-light lg:bg-desktop-light dark:bg-mobile-dark  dark:lg:bg-desktop-dark 
        bg-no-repeat bg-auto bg-left-top bg-light-vl-gray
        px-8 py-16 text-lg pb-20`}
      >
        {children}
      </body>
    </html>
  );
}
