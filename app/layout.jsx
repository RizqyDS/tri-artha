import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata = {
  title: "Tri Artha Manunggal",
  description: "Professional Calibration Industrial and Medical",
  icons: {
    icon: [
      {
        url: "/images/favicon.png",
        href: "/images/favicon.png",
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.variable} ${bebasNeue.variable}`}>
        {children}

        {/* Load Google Ads library */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17060346146"
          strategy="afterInteractive"
        />

        {/* Initialize gtag */}
        <Script
          id="google-ads-init"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-17060346146');
          `}
        </Script>
      </body>
    </html>
  );
}