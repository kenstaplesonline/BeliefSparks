import type { Metadata } from "next";
import "./globals.css";
import { GoogleMapsProvider } from "@/components/GoogleMapsLoader";

export const metadata: Metadata = {
  title: "The Neighbourhoods - Discover Calgary Communities",
  description: "Discover the heart of every Calgary neighbourhood. We celebrate what makes each community special.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GoogleMapsProvider>
          <nav className="bg-primary text-white py-4 px-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="/" className="flex items-center gap-3 hover:text-red-200 transition-colors">
              <img
                src="/logo.png"
                alt="The Neighbourhoods logo"
                className="w-16 h-16"
              />
              <span className="text-xl font-bold hidden sm:inline">The Neighbourhoods</span>
            </a>
            <div className="flex gap-4 sm:gap-6 text-sm">
              <a href="/" className="hover:text-red-200 transition-colors">Home</a>
              <a href="/neighborhoods" className="hover:text-red-200 transition-colors">Neighbourhoods</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-8 px-4 md:px-6 mt-12">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6 pb-6 border-b border-gray-800">
              <p className="text-gray-400 text-xs md:text-sm max-w-3xl mx-auto">
                We respectfully acknowledge that we are on Treaty 7 territory — is traditional lands of the Blackfoot Confederacy (Siksika, Piikani, Kainai), the Tsuut&apos;ina First Nation, and the &Icircy&acirc;rhe Nakoda (Stoney Nakoda) First Nation (Chiniki, Bearspaw, Wesley). This is also home to the M&eacute;tis Nation of Alberta, Region 3.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 mb-2">
              <img
                src="/logo.png"
                alt="The Neighbourhoods logo"
                className="w-14 h-14 md:w-16 md:h-16"
              />
              <h3 className="text-base md:text-lg font-bold">The Neighbourhoods</h3>
            </div>
            <p className="text-gray-400 text-xs md:text-sm">Discover the heart of every Calgary neighbourhood</p>
            <p className="text-xs text-gray-500 mt-2">© 2026 The Neighbourhoods. All rights reserved.</p>
          </div>
        </footer>
        </GoogleMapsProvider>
      </body>
    </html>
  );
}
