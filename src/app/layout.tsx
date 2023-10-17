import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
    <html lang="pt-BR">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
