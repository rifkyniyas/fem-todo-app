import "./globals.css";
import { Josefin_Sans } from "next/font/google";

export const metadata = {
  title: "FEM Todo App | Rifky Niyas",
};

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-josefin",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} font-sans min-h-screen bg-desktop-light 
        bg-no-repeat bg-left-top bg-light-vl-gray
        px-8 py-16 text-lg`}
      >
        {children}
      </body>
    </html>
  );
}
