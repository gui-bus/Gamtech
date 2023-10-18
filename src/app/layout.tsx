import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import Header from "@/components/common/header";
import UIProvider from "@/providers/uiprovider";
import { AuthProvider } from "@/providers/auth";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamtech | Elevando sua experiência tecnológica!",
  description:
    "Na Gamtech, somos apaixonados por eletrônicos. Oferecemos uma ampla seleção de items para computadores, tudo para aprimorar sua jornada tecnológica. Explore nossa loja online e mergulhe em um universo de entretenimento eletrônico de alta qualidade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <body className="bg-gradient-to-b from-zinc-200 to-slate-300 dark:from-neutral-700 dark:to-zinc-700">
        <AuthProvider>
          <UIProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
            </ThemeProvider>
          </UIProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
