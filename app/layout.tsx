import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "Interain",
  description: "India’s 1st AI Driven Soft Skills Training Platform",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          async
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js"
          async
        ></script>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
