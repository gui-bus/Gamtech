import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import Header from "@/components/common/header";
import UIProvider from "@/providers/uiprovider";
import { AuthProvider } from "@/providers/auth";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foxtech | Elevando sua experiência tecnológica!",
  description:
    "Na Foxtech, somos apaixonados por eletrônicos voltados para gamers. Oferecemos uma ampla seleção de consoles, controles, jogos, acessórios e muito mais, tudo para aprimorar sua jornada no mundo dos jogos. Explore nossa loja online e mergulhe em um universo de entretenimento eletrônico de alta qualidade.",
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
