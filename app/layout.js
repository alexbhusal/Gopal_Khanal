import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gopal Khanal",
  description: "Professional profile of Gopal Khanal, an MBA student specializing in business strategy, management, and finance.",
  keywords: [
    "Gopal Khanal",
    "MBA student",
    "business strategy",
    "management",
    "finance",
    "marketing",
    "entrepreneurship",
    "business development",
    "leadership",
    "economics",
    "corporate finance",
    "market research",
    "project management",
    "strategic planning",
    "operations management",
    "investment analysis",
    "data analysis",
    "financial modeling",
    "organizational behavior",
    "consulting",
    "innovation",
    "supply chain management",
    "human resources",
    "business analytics"
  ]
};


export default function RootLayout({ children }) {
  return (
    <html lang="en"
    className="hydrated">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
