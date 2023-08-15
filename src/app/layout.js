import "./globals.css";
import { Josefin_Sans } from "next/font/google";

export const metadata = {
  title: "FEM Todo App | Rifky Niyas",
};

const josefinSans = Josefin_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
  variable: "--font-josefin",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} font-sans min-h-screen 
        bg-mobile-light lg:bg-desktop-light dark:bg-mobile-dark  dark:lg:bg-desktop-dark 
        bg-no-repeat bg-[100%_auto] bg-top bg-light-vl-gray dark:bg-dark-vd-blue
        px-8 pt-16 text-lg`}
      >
        {children}
      </body>
    </html>
  );
}
