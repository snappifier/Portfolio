import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./SmoothScroll";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",

});

export const metadata = {
	metadataBase: new URL("https://krystianmatwiej.pl"),
  title: "Krystian Matwiej - Frontend Developer | React & Next.js",
  description: "Frontend Developer from Poland specializing in React, Next.js and Motion.dev animations. Building modern, performant, high quality websites.",
	authors: [{name: "Krystian Matwiej", url: "https://krystianmatwiej.pl"}],
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://krystianmatwiej.pl",
		siteName: "Krystian Matwiej Portfolio",
		title: "Krystian Matwiej - Frontend Developer",
		description: "Frontend Developer from Poland specializing in React, Next.js and Motion.dev animations. Building modern, performant, high quality websites.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Krystian Matwiej - Frontend Developer Portfolio"
			}
		]
	}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased bg-zinc-950`}>
      <SmoothScroll>
        {children}
	      <Analytics />
	      <SpeedInsights />
      </SmoothScroll>
      </body>
    </html>
  );
}
