import { Roboto, Poppins, Raleway } from "next/font/google";
// import "./globals.css";
import Script from "next/script";
import Navbar from "../components/Navbar";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import FooterSection from "../components/footerSection";
import ScrollToTop from "../components/scrollToTop";
import { GoogleAnalytics } from "@next/third-parties/google";

// Load the fonts
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata = {
  title:
    "SVKM's Tapanbhai Mukeshbhai Patel Memorial Hospital & Research Center",
  description:
    "Official website for SVKM's Tapanbhai Mukeshbhai Patel Memorial Hospital & Research Center, Shirpur.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link href="/assets/css/bootstrap.min.css" rel="stylesheet" /> */}
        <link href="/assets/css/bootstrap-icons.css" rel="stylesheet" />
        {/* <link href="/assets/css/aos.css" rel="stylesheet" /> */}
        <link href="/assets/css/all.min.css" rel="stylesheet" />
        {/* <link href="/assets/css/glightbox.min.css" rel="stylesheet" /> */}
        {/* <link href="/assets/css/swiper-bundle.min.css" rel="stylesheet" /> */}

        <Script
          src="/assets/js/jquery-3.7.1.min.js"
          strategy="afterInteractive"
        />

        <link href="/assets/css/main.css" rel="stylesheet" />

        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/carousel.css" />
      </head>
      <body
        className={`${roboto.variable} ${poppins.variable} ${raleway.variable}`}
      >
        <Navbar />
        {children}
        <FooterSection />
        <ScrollToTop />
        <GoogleAnalytics gaId="G-7B2KWNLEM4" />
        {/* <Script
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/validate.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/aos.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/glightbox.min.js" strategy="afterInteractive" /> */}
        {/* <Script
          src="/assets/js/purecounter_vanilla.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/swiper-bundle.min.js"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  );
}
