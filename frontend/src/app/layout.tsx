import type { Metadata } from "next";
import localFont from "next/font/local";
// import LoadingBar from "@/components/LoadingBar";
import NextTopLoader from "nextjs-toploader";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";

const headingFont = localFont({
    src: "../../assets/vag-world.woff2",
    variable: "--font-heading",
});

type RootLayoutProps = {
    children: React.ReactNode;
};

export const metadata: Metadata = {
    title: "Block2Box - приватный сервер",
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ru" className="scroll-smooth">
            <body
                className={`
                  min-h-screen
                  bg-b2b-neutral-950
                  overflow-x-hidden
                  ${headingFont.variable}
                  font-copy
                  font-semibold
                  antialiased
                  pt-20
                `}
            >
                <NextTopLoader color="#257cff" showSpinner={false} />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
