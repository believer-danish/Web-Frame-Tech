import localFont from "next/font/local";
import { Roboto, Inter, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";

const cabinet = localFont({
  src: [
    {
      path: "./fonts/cabinet/CabinetGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/cabinet/CabinetGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/cabinet/CabinetGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/cabinet/CabinetGrotesk-Extrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-cabinet",
});
const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const playfair = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});
const geist = Geist({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata = {
  title: "Web Frame Tech",
  description: "French products landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${inter.variable} ${playfair.variable} ${geist.variable} ${cabinet.variable}  `}
      >
        {children}
      </body>
    </html>
  );
}
