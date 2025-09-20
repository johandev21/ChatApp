import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import HeroSection from "@/components/hero-section";
import { HeroHeader } from "@/components/header";
import Features from "@/components/features";
import { Geist } from "next/font/google";
import Footer from "@/components/footer";

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ theme: shadcn }}>
      <ConvexClientProvider>
        <html lang="en" className={geist.className} suppressHydrationWarning>
          <body>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <SignedOut>
                <HeroHeader />
                <HeroSection />
                <Features />
                <Footer />
              </SignedOut>
              <SignedIn>
                {/* <UserButton /> */}
              </SignedIn>
              {children}
            </ThemeProvider>
          </body>
        </html>
      </ConvexClientProvider>
    </ClerkProvider>
  );
}
